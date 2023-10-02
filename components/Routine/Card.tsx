import { Card, Flex, Heading } from '@radix-ui/themes';

// import RoutineInput from './RoutineInput';
import RoutineCalendar from './Calendar';

export default function Routine() {
  return (
    <Card style={{ height: '70vh' }}>
      <Flex direction="column" gap="3" height="100%">
        <Flex justify="between">
          <Heading>Routine</Heading>
          {/* <RoutineInput /> */}
        </Flex>
        <RoutineCalendar />
      </Flex>
    </Card>
  );
}
