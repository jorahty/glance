import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Card, Flex, Heading } from '@radix-ui/themes';

import BigPictureTextArea from './TextArea';

export default async function BigPictureCard() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { content },
  } = await supabase.from('big_pictures').select().single();

  return (
    <Card>
      <Flex direction="column" gap="3">
        <Heading>Big Picture</Heading>
        <BigPictureTextArea initialContent={content} />
      </Flex>
    </Card>
  );
}
