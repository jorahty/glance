'use client';
import { Flex } from '@radix-ui/themes';
import { useTheme } from 'next-themes';

interface Props {
  children: React.ReactNode;
}

export default function Container({ children }: Props) {
  const { resolvedTheme } = useTheme();

  const background =
    resolvedTheme === 'light' ? 'var(--gray-4)' : 'var(--color-surface)';

  return (
    <Flex p="3" gap="3" style={{ minHeight: '100vh', background: background }}>
      {children}
    </Flex>
  );
}
