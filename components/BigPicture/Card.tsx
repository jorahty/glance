import { createServerComponentClient } from '@/util/createServerSupabaseClient';
import { Card, Flex, Heading } from '@radix-ui/themes';

import BigPictureTextArea from './TextArea';

export default async function BigPictureCard() {
  const supabase = createServerComponentClient();

  const { content } = (
    await supabase.from('big_pictures').select('content').single()
  ).data!;

  return (
    <Card>
      <Flex direction="column" gap="3">
        <Heading>Big Picture</Heading>
        <BigPictureTextArea initialContent={content} />
      </Flex>
    </Card>
  );
}
