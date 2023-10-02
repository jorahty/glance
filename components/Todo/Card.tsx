import { Card, Flex, Heading } from '@radix-ui/themes';

import TodoTextArea from './TextArea';

interface Props {
  initialContent: string;
}

export default function TodoCard({ initialContent }: Props) {
  return (
    <Card>
      <Flex direction="column" gap="3">
        <Heading>Todo</Heading>
        <TodoTextArea initialContent={initialContent} />
      </Flex>
    </Card>
  );
}
