import { Card, Flex, Heading } from '@radix-ui/themes';

import TodoTextArea from './TextArea';

interface Props {
  initialContent: string;
}

export default function TodoCard({ initialContent }: Props) {
  return (
    <Card style={{ flexGrow: 1, padding: 0 }}>
      <Flex direction="column" gap="3" height="100%">
        <Heading>Todo</Heading>
        <TodoTextArea initialContent={initialContent} />
      </Flex>
    </Card>
  );
}
