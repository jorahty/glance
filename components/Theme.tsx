'use client';
import '@radix-ui/themes/styles.css';
import '@/style/theme-config.css';
import { ThemeProvider } from 'next-themes';
import { Theme as RadixTheme } from '@radix-ui/themes';

interface Props {
  children: React.ReactNode;
}

// <ThemeProvider /> causes an console warning:
// "Warning: Extra attributes from the server: class,style"

export default function Theme({ children }: Props) {
  return (
    <ThemeProvider attribute="class">
      <RadixTheme radius="small" panelBackground="solid">
        {children}
      </RadixTheme>
    </ThemeProvider>
  );
}
