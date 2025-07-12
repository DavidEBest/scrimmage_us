import { useDarkMode } from '../hooks/useDarkMode';

const DarkModeToggle = () => {
  const [darkMode, toggleDarkMode] = useDarkMode();

  const handleToggle = () => {
    console.log('Dark mode toggle clicked, current state:', darkMode);
    toggleDarkMode();
  };

  return (
    <button
      onClick={handleToggle}
      className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 ${
        darkMode 
          ? 'bg-gradient-to-r from-purple-600 to-blue-600' 
          : 'bg-gradient-to-r from-yellow-400 to-orange-500'
      }`}
      aria-label="Toggle dark mode"
    >
      <span
        className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-200 ${
          darkMode ? 'translate-x-7' : 'translate-x-1'
        }`}
      >
        <span className="flex h-full w-full items-center justify-center text-xs">
          {darkMode ? '🌙' : '☀️'}
        </span>
      </span>
    </button>
  );
};

export default DarkModeToggle;