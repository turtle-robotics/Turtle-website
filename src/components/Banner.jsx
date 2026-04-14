export default function Banner({ children, style = "primary", onClose }) {
  const colorStyles = {
    primary: "bg-yellow-500 text-black",
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-[60] ${colorStyles[style]}`}>
      <div className="mx-auto px-2">
        <div className="min-h-12 py-2 relative flex items-center justify-center text-center">
          <div className="text-sm sm:text-base font-medium tracking-wide px-10">
            {children}
          </div>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="absolute right-0 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full h-7 w-7 hover:bg-black/10 transition-colors"
              aria-label="Dismiss site banner"
            >
              <span className="text-lg leading-none">×</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
