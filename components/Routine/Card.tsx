import { createServerComponentClient } from '@/util/createServerSupabaseClient';
import { Card, Flex, Heading } from '@radix-ui/themes';

import RoutineInput from './Input';
import RoutineCalendar from './Calendar';

export default async function Routine() {
  const supabase = createServerComponentClient();

  const { calendar_id: calendarId } = (
    await supabase.from('routines').select('calendar_id').single()
  ).data!;

  return (
    <Card style={{ height: '70vh' }}>
      <Flex direction="column" gap="3" height="100%">
        <Flex justify="between">
          <Heading>Routine</Heading>
          <RoutineInput calendarId={calendarId} />
        </Flex>
        <RoutineCalendar calendarId={calendarId} />
      </Flex>
    </Card>
  );
}
