import { Inset } from '@radix-ui/themes';

import Filter from './Filter';

interface Props {
  calendarId: string;
}

export default function RoutineCalendar({ calendarId }: Props) {
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
