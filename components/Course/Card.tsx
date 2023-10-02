import { Card, Flex, Heading } from '@radix-ui/themes';

import { Course } from './Container';
import CourseMenu from './Menu';
import CourseTextArea from './TextArea';

interface Props {
  course: Course;
}

export default function CourseCard({ course }: Props) {
  return (
    <Card>
      <Flex direction="column" gap="3" height="100%" style={{ width: '300px' }}>
        <Flex justify="between">
          <Heading>{course.name}</Heading>
          <CourseMenu courseId={course.id} />
        </Flex>
        <CourseTextArea initialContent={course.content} courseId={course.id} />
      </Flex>
    </Card>
  );
}
