import { useEffect, useState, useCallback  } from "react";
import {Calendar, dateFnsLocalizer} from "react-big-calendar";
import {format, parse, startOfWeek, getDay} from "date-fns";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";

import "./Calendar.css";


const locales = {
    "en-US": enUS,
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 0 }),
    getDay,
    locales,
});

function buildGoogleCalendarUrl(event) {
  const formatDate = (date) =>
    new Date(date)
      .toISOString()
      .replace(/[-:]/g, "")
      .split(".")[0] + "Z";

  const start = formatDate(event.start);
  const end = formatDate(event.end);

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.title,
    dates: `${start}/${end}`,
    details: event.description || "",
    location: event.location || "",
    ctz: "America/Chicago",
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function EventModal({ event, onClose }) {
  if (!event) return null;

  const formatDate = (date) =>
    new Date(date).toLocaleString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-gray-900 text-gray-200 rounded-2xl shadow-2xl w-full max-w-md p-6 relative border border-gray-700">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>

        {/* Date */}
        <p className="text-sm text-blue-400 mb-2">
          {formatDate(event.start)} → {formatDate(event.end)}
        </p>

        {/* Location */}
        {event.location && (
          <p className="text-sm text-gray-400 mb-2">
            📍 {event.location}
          </p>
        )}

        {/* Description */}
        {event.description && (
          <p className="text-sm text-gray-300 mb-4 whitespace-pre-line">
            {event.description}
          </p>
        )}

        {/* Add to Google button */}
        <a
          href={buildGoogleCalendarUrl(event)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full text-center hero-button border-2 border-yellow-500 text-yellow-600 px-10 py-5 rounded-xl font-medium hover:scale-105 transition-all duration-300"
        >
          Add to Google Calendar
        </a>
      </div>
    </div>
  );
}

export default function CalendarSection() {
    const [events, setEvents] = useState([]);
    const [range, setRange] = useState(null);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const API_KEY = import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY;
    const CALENDAR_ID = "turtlerobotics@gmail.com";

    if (!API_KEY) {
    console.error("Missing Google API key");
    return;
    }
        
    const fetchEvents = useCallback(async (start, end) => {
        if (!start || !end) return;

        const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
        CALENDAR_ID
        )}/events?key=${API_KEY}&timeMin=${start.toISOString()}&timeMax=${end.toISOString()}&singleEvents=true&orderBy=startTime`;

        const res = await fetch(url);
        const data = await res.json();

        const formatted = (data.items || []).map((event) => ({
            title: event.summary,
            start: new Date(event.start.dateTime || event.start.date),
            end: new Date(event.end.dateTime || event.end.date),
            allDay: !event.start.dateTime,
            description: event.description || "",
            location: event.location || "",
            }));

        setEvents(formatted);
    }, [API_KEY]);

    useEffect(() => {
        if (range?.start && range?.end) {
        fetchEvents(range.start, range.end);
        }
    }, [range, fetchEvents]);

    useEffect(() => {
        var monthStart=new Date();
        var monthEnd=new Date();

        monthStart.setDate(monthStart.getDate() - 30);
        monthEnd.setDate(monthEnd.getDate() + 30);

        setRange({
            start: monthStart,
            end: monthEnd,
            });
    }, []);

    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-center mb-10 text-gray-200">
                Calendar
            </h2>

            <div className="flex justify-center">
                <div className="rounded-2xl border-4 border-gray-700 shadow-xl bg-gray-900/60 p-4 w-full max-w-[1300px]">
                    <div className="h-[900px] w-full text-gray-200">
                        <Calendar
                            localizer={localizer}
                            events={events}
                            startAccessor="start"
                            endAccessor="end"
                            onSelectEvent={(event) => setSelectedEvent(event)}
                            views={["month", "agenda"]}
                            defaultView="month"
                            onRangeChange={(newRange) => {
                            if (Array.isArray(newRange)) {
                                setRange({
                                start: newRange[0],
                                end: newRange[newRange.length - 1],
                                });
                            } else {
                                setRange(newRange);
                            }
                            }}
                            style={{ height: "100%" }}
                            className="text-gray-200 rounded-xl"
                        />
                    </div>
                </div>
            </div>
        <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
        />
        /</div>
    );
}
