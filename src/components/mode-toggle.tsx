import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme-provider';
import { FaSun } from 'react-icons/fa';
import { BsFillMoonStarsFill } from 'react-icons/bs';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="border-none bg-inherit shadow-none hover:bg-inherit dark:bg-inherit hover:dark:bg-inherit"
    >
      {theme === 'dark' ? (
        <FaSun className="h-[1.2rem] w-[1.2rem] text-yellow-500 transition-all" />
      ) : (
        <BsFillMoonStarsFill className="h-[1.2rem] w-[1.2rem] text-gray-800 transition-all dark:text-gray-100" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
