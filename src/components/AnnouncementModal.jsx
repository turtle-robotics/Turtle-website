import { useEffect, useRef } from "react";

export default function AnnouncementModal({ open, onClose, title, children }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 px-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="announcement-modal-title"
        className="relative w-full max-w-lg rounded-2xl border border-gray-700 bg-gray-900 p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full text-gray-300 hover:bg-gray-800 hover:text-yellow-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
          aria-label="Close announcement details"
        >
          <span className="text-xl leading-none">×</span>
        </button>

        <h2
          id="announcement-modal-title"
          className="mb-4 pr-8 text-2xl font-light text-yellow-400"
        >
          {title}
        </h2>
        <div className="space-y-4 font-light text-gray-300">{children}</div>
      </div>
    </div>
  );
}
