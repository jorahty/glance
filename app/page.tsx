import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Flex } from '@radix-ui/themes';

import Container from '@/components/Container';
import Settings from '@/components/Settings';
import BigPictureCard from '@/components/BigPicture/Card';

export default async function Account() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { content },
  } = await supabase.from('big_pictures').select().single();

  return (
    <Container>
      <Flex direction="column" gap="3" grow="1">
        <Settings />
        <BigPictureCard initialContent={content} />
      </Flex>
      <Flex direction="column" gap="3"></Flex>
    </Container>
  );
}
