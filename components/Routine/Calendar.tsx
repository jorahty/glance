'use client';
import { useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Inset } from '@radix-ui/themes';

import Filter from './Filter';

interface Props {
  calendarId: string;
}

export default function RoutineCalendar({
  calendarId: initialCalendarId,
}: Props) {
  const supabase = createClientComponentClient();
  const [mounted, setMounted] = useState(false);
  const [calendarId, setCalendarId] = useState(initialCalendarId);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const channel = supabase
      .channel('realtime routine')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'routines',
        },
        (payload: any) => {
          setCalendarId(payload.new.calendar_id);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase]);

  if (!mounted) return <></>;

  return (
    <Inset style={{ flexGrow: 1 }} pt="current">
      <Filter>
        <iframe
          style={{
            flexGrow: 1,
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          src={`https://calendar.google.com/calendar/embed?src=${calendarId}&ctz=America%2FLos_Angeles&showTitle=0&showNav=0&showDate=0&mode=WEEK&showTabs=0&showCalendars=0&showTz=0&showPrint=0`}
        />
      </Filter>
    </Inset>
  );
}
