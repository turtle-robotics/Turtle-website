import { useEffect, useState } from "react";
const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/1_1kPyU_8ZjSbxqTuaR0HvO5Pn5SzwjuBG-HlEfRkmSM/gviz/tq?tqx=out:json&sheet=Slides%20Manifest";
const textClass = "text-center text-gray-400";

// Google Sheets publishes query results as a JavaScript callback rather than raw JSON.
function parseSheetResponse(text) {
  const match = text.match(
    /^\s*\/\*O_o\*\/\s*google\.visualization\.Query\.setResponse\((.*)\);\s*$/s,
  );
  if (!match) throw new TypeError("Slides sheet returned an invalid response.");

  const { status, table } = JSON.parse(match[1]);
  if (status !== "ok" || !table) {
    throw new TypeError("Slides sheet returned an invalid response.");
  }

  const headers = table.cols.map(({ label }) => label);
  return (table.rows || []).map(({ c = [] }) =>
    Object.fromEntries(
      headers.map((header, index) => [header, c[index]?.v ?? ""]),
    ),
  );
}

// Filters and orders the shared manifest for the active program.
function getProgramSlides(slides, program) {
  if (!Array.isArray(slides)) {
    throw new TypeError("Slides sheet returned an invalid response.");
  }

  return slides
    .filter(
      (slide) =>
        slide?.program === program &&
        Number.isInteger(slide.week) &&
        slide.week > 0 &&
        typeof slide.title === "string" &&
        slide.title.trim() &&
        typeof slide.downloadUrl === "string" &&
        slide.downloadUrl.trim(),
    )
    .sort((left, right) => left.week - right.week)
    .map(({ id, week, title, label, downloadUrl }) => ({
      id: id || `${program}-${week}-${downloadUrl}`,
      label: label?.trim() || `Week ${week}: ${title.trim()}`,
      downloadUrl,
    }));
}

// Shared selector for every development-program page; the Sheet is the source of truth.
const ProgramSlides = ({ program }) => {
  const [slides, setSlides] = useState([]);
  const [selectedSlideId, setSelectedSlideId] = useState("");
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const controller = new AbortController();

    async function loadSlides() {
      try {
        const response = await fetch(SHEET_URL, { signal: controller.signal });

        if (!response.ok) {
          throw new Error("Slides are unavailable.");
        }

        const slides = getProgramSlides(
          parseSheetResponse(await response.text()),
          program,
        );
        if (!controller.signal.aborted) {
          setSlides(slides);
          setStatus("ready");
        }
      } catch (error) {
        if (!controller.signal.aborted) {
          setStatus("error");
        }
      }
    }

    loadSlides();
    return () => controller.abort();
  }, [program]);

  const selectedSlide = slides.find((slide) => slide.id === selectedSlideId);

  if (status === "loading")
    return <p className={textClass}>Loading slides...</p>;
  if (status === "error") {
    return (
      <p className={textClass}>
        Slides are temporarily unavailable. Please try again later.
      </p>
    );
  }
  if (!slides.length)
    return <p className={textClass}>No slides are published yet.</p>;

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-6">
      <select
        aria-label="Select a week"
        className="glass-card border border-gray-700 px-4 py-3 rounded-lg text-gray-200 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
        value={selectedSlideId}
        onChange={(event) => setSelectedSlideId(event.target.value)}
      >
        <option value="">Select a week...</option>
        {slides.map((slide) => (
          <option key={slide.id} value={slide.id}>
            {slide.label}
          </option>
        ))}
      </select>

      {selectedSlide && (
        <a
          href={selectedSlide.downloadUrl}
          download
          className="bg-yellow-500 text-black px-6 py-3 rounded-lg text-sm font-light transition-all duration-300"
        >
          Download PDF
        </a>
      )}
    </div>
  );
};

export default ProgramSlides;
