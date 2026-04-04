export default function Hero({
  heading,
  subheading,
  backgroundImage,
  backgroundAltText,
  children,
}) {
  // split heading text so that yellow can be applied to last word only
  const headingWithoutLastWord =
    heading.length > 1
      ? heading.trim().split(/\s+/).slice(0, -1).join(" ")
      : null;
  const headingLastWord =
    heading.length > 1 ? heading.trim().split(/\s+/).pop() : heading;

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {backgroundImage != null && (
        <>
          <img
            src={backgroundImage}
            alt={backgroundAltText}
            className="absolute inset-0 w-full h-full object-cover object-center brightness-50 z-0"
          />
          {/* Image overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/25 z-0"></div>{" "}
        </>
      )}

      <div className="relative text-center max-w-6xl mx-auto z-10">
        <h1 className="text-6xl md:text-8xl lg:text-9xl tracking-tight text-gray-200 mb-8">
          <span className="block">{headingWithoutLastWord}</span>
          <span className="block text-yellow-400">{headingLastWord}</span>
        </h1>
        <p className="text-xl md:text-2xl font-light tracking-wide text-gray-200 mb-12 max-w-3xl mx-auto">
          {subheading}
        </p>
        {children}
      </div>
    </section>
  );
}
