/**
 * A reusable section heading (`<h2>`) that applies the site-wide
 * responsive typography and colour styles used across every page.
 *
 * Usage:
 *   <SectionHeading>JOIN TURTLE</SectionHeading>
 *   <SectionHeading>ABOUT <span className="text-yellow-400">TURTLE</span></SectionHeading>
 *
 * @param {string}  className  Optional extra Tailwind classes (e.g. custom margin).
 * @param {React.ReactNode} children  Heading content; wrap accent words in a
 *                                    `<span className="text-yellow-400">` span.
 */
const SectionHeading = ({ children, className = "" }) => (
  <h2
    className={`text-4xl md:text-5xl lg:text-6xl text-center mb-20 text-gray-200 ${className}`}
  >
    {children}
  </h2>
);

export default SectionHeading;
