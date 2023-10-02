import { Card, Flex, Heading } from '@radix-ui/themes';

import BigPictureTextArea from './TextArea';

interface Props {
  initialContent: string;
}

export default function BigPictureCard({ initialContent }: Props) {
  return (
    <Card>
      <Flex direction="column" gap="3">
        <Heading>Big Picture</Heading>
        <BigPictureTextArea initialContent={initialContent} />
      </Flex>
    </Card>
  );
}
