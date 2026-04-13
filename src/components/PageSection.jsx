export default function PageSection({ heading, colorVariant, children }) {
  // split heading text so that yellow can be applied to last word only
  const headingWithoutLastWord =
    heading.length > 1
      ? heading.trim().split(/\s+/).slice(0, -1).join(" ")
      : null;
  const headingLastWord =
    heading.length > 1 ? heading.trim().split(/\s+/).pop() : heading;

  const bgColorClasses = {
    A: "",
    B: "backdrop-brightness-90",
  };

  return (
    <section className={`py-24 px-4 ${bgColorClasses[colorVariant]}`}>
      <div className="max-w-7xl mx-auto">
        {heading && (
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-center mb-20 text-gray-200">
            {headingWithoutLastWord}{" "}
            <span className="text-yellow-400">{headingLastWord}</span>{" "}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
