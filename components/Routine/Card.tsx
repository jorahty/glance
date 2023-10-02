import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Card, Flex, Heading } from '@radix-ui/themes';

// import RoutineInput from './RoutineInput';
import RoutineCalendar from './Calendar';

export default async function Routine() {
  const supabase = createServerComponentClient({ cookies });

  const { calendar_id: calendarId } = (
    await supabase.from('routines').select('calendar_id').single()
  ).data!;

  return (
    <Card style={{ height: '70vh' }}>
      <Flex direction="column" gap="3" height="100%">
        <Flex justify="between">
          <Heading>Routine</Heading>
          {/* <RoutineInput /> */}
        </Flex>
        <RoutineCalendar calendarId={calendarId} />
      </Flex>
    </Card>
  );
}
