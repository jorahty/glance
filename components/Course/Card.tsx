import { Card, Flex, Heading } from '@radix-ui/themes';

// import CourseMenu from './Menu';
// import TextArea from '../TextArea';

interface Props {
  course: any;
}

export default function CourseCard({ course }: Props) {
  return (
    <Card>
      <Flex direction="column" gap="3" height="100%" style={{ width: '300px' }}>
        <Flex justify="between">
          <Heading>{course.name}</Heading>
          {/* <CourseMenu /> */}
        </Flex>
        {/* <TextArea /> */}
        <pre>{course.content}</pre>
      </Flex>
    </Card>
  );
}
