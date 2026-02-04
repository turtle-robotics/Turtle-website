// import { useTheme } from '../contexts/ThemeContext'

// const ThemeToggleButton = () => {
//   const { isDark, toggleTheme } = useTheme()

//   return (
//     <button
//       onClick={toggleTheme}
//       className="relative p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
//       aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
//     >
//       {/* Sun Icon */}
//       <svg
//         className={`w-5 h-5 transition-all duration-300 ${isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`}
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
//         />
//       </svg>

//       {/* Moon Icon */}
//       <svg
//         className={`absolute top-2 left-2 w-5 h-5 transition-all duration-300 ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`}
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
//         />
//       </svg>
//     </button>
//   )
// }

// export default ThemeToggleButton;
