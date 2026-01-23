export default function ButtonLink({
  children,
  linkURL,
  sizeVariant = "default",
  color = "primary",
  transparent = "true",
  className
}) {
  const colorStyles = {
    primary: "bg-yellow-500 text-black",
    secondary: "bg-red-500 text-white",
    accent: "bg-blue-500 text-white",
    "muted-primary": "bg-yellow-200 text-black",
    "muted-secondary": "bg-red-200 text-white",
    "muted-accent": "bg-blue-200 text-white",
  };

  const sizeVariantStyles = {
    default: "no?",
    large: "px-10 py-5",
    xl: "px-16 py-6 text-xl",
    small: "hero-button bg-yellow-500 text-black px-10 py-5 rounded-xl font-medium hover:scale-105 transition-all duration-300",
  };

  return (
    <a
      href={linkURL}
      className={`${className} ${colorStyles[color]} ${sizeVariantStyles[sizeVariant]} inline-block rounded-xl hover:scale-105 transition-all duration-300`}
    >
      {children}
    </a>
  );
}

// Button types:
// size: large, default, small
// color: primary, muted primary, secondary, muted secondary, accent, muted accent
// transparent: false (default), true
