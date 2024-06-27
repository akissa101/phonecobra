'use client';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';

const client = new QueryClient();

type ProviderProps = {
  children: React.ReactNode;
};

export const Provider = ({ children }: ProviderProps) => {
  return (
    <ThemeProvider attribute="class">
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
};
