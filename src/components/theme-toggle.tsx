'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Moon, SunMoon } from 'lucide-react';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className="swap swap-rotate border p-1 bg-slate-200 dark:bg-slate-900  rounded-full"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? <Moon fill="" /> : <SunMoon />}
    </button>
  );
};

export default ThemeToggle;
