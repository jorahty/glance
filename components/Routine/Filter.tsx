'use client';
import { useTheme } from 'next-themes';

interface Props {
  children: React.ReactNode;
}

export default function RoutineCalendar({ children }: Props) {
  const { resolvedTheme } = useTheme();

  const filter =
    resolvedTheme === 'dark'
      ? 'invert(100%) contrast(75%) hue-rotate(180deg)'
      : undefined;

  return <div style={{ filter: filter, height: '100%' }}>{children}</div>;
}
