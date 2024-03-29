import { Flex } from '@radix-ui/themes';

import Settings from '@/components/Settings';
import BigPictureCard from '@/components/BigPicture/Card';
import TodoCard from '@/components/Todo/Card';
import Routine from '@/components/Routine/Card';
import CourseContainer from '@/components/Course/Container';

export default async function Account() {
  return (
    <Flex p="3" gap="3" style={{ minHeight: '100vh', marginBottom: '90vh' }}>
      <Flex direction="column" gap="3" grow="1">
        <Settings />
        <BigPictureCard />
        <TodoCard />
      </Flex>
      <Flex direction="column" gap="3">
        <Routine />
        <CourseContainer />
      </Flex>
    </Flex>
  );
}
