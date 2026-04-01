/**
 * A reusable feature card that pairs a large emoji/icon with a title and a
 * short description. Used wherever a 3-up grid of "why join us / how it works"
 * style cards appears across the site.
 *
 * @param {string} icon        Emoji or icon character shown at the top.
 * @param {string} title       Card heading text.
 * @param {React.ReactNode} description  Body text (string or JSX).
 */
const IconCard = ({ icon, title, description }) => (
  <div className="glass-card p-10 rounded-2xl text-center transition-all duration-300">
    <div className="text-5xl mb-6">{icon}</div>
    <h3 className="text-xl font-light mb-4 text-gray-200">{title}</h3>
    <p className="text-gray-400 font-light leading-relaxed">{description}</p>
  </div>
);

export default IconCard;
