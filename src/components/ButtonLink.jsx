import { Link } from 'react-router-dom'

export default function ButtonLink({
  children,
  to,
  sizeVariant = "default",
  style = "primary",
  transparent = "true",
  className
}) {
  const colorStyles = {
    "primary": "bg-yellow-500 text-black",
    "primary-outline": "border-2 border-yellow-500 text-yellow-600",
    "primary-muted": "bg-gradient-to-r from-yellow-500/10 to-amber-500/10 hover:from-yellow-500/20 hover:to-amber-500/20 text-yellow-600 font-light border border-yellow-700/30",
  };

  const sizeVariantStyles = {
    default: "px-6 py-3 rounded-lg",
    large: "px-10 py-5 rounded-xl",
    xl: "px-16 py-6 text-xl rounded-xl",
    small: "px-4 py-2 text-sm rounded-lg",
  };

  return (
    <Link
      to={to}
      className={`${className} ${colorStyles[style]} ${sizeVariantStyles[sizeVariant]} inline-block font-medium hover:scale-105 transition-all duration-300`}
    >
      {children}
    </Link>
  );
}
