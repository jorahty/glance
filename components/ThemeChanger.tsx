'use client';
import { useEffect, useState } from 'react';
import { Select, Flex, Text } from '@radix-ui/themes';
import { useTheme } from 'next-themes';
import { Half2Icon, MoonIcon, SunIcon } from '@radix-ui/react-icons';

export default function ThemeChanger() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <Select.Root>
        <Select.Trigger style={{ minWidth: 120 }} />
      </Select.Root>
    );

  return (
    <>
      <Select.Root value={theme} onValueChange={setTheme}>
        <Select.Trigger style={{ minWidth: 120 }} />
        <Select.Content>
          <Select.Group>
            <Select.Label>Theme</Select.Label>
            <Select.Item value="system">
              <Flex gap="3" align="center">
                <Half2Icon />
                <Text>System</Text>
              </Flex>
            </Select.Item>
            <Select.Item value="light">
              <Flex gap="3" align="center">
                <SunIcon />
                <Text>Light</Text>
              </Flex>
            </Select.Item>
            <Select.Item value="dark">
              <Flex gap="3" align="center">
                <MoonIcon />
                <Text>Dark</Text>
              </Flex>
            </Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </>
  );
}
