'use client';
import { Box, Inset } from '@radix-ui/themes';
import { useTheme } from 'next-themes';

interface Props {
  calendarId: string;
}

export default function RoutineCalendar({ calendarId }: Props) {
  const { resolvedTheme } = useTheme();

  const filter =
    resolvedTheme === 'dark'
      ? 'invert(100%) contrast(75%) hue-rotate(180deg)'
      : undefined;

  return (
    <Inset style={{ flexGrow: 1 }} pt="current">
      <Box style={{ filter: filter, height: '100%' }}>
        <iframe
          style={{
            flexGrow: 1,
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          src={`https://calendar.google.com/calendar/embed?src=${calendarId}&ctz=America%2FLos_Angeles&showTitle=0&showNav=0&showDate=0&mode=WEEK&showTabs=0&showCalendars=0&showTz=0&showPrint=0`}
        />
      </Box>
    </Inset>
  );
}
