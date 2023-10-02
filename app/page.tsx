import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

import BigPicture from '@/components/BigPicture';
import Settings from '@/components/Settings';
import { Flex } from '@radix-ui/themes';
import Container from '@/components/Container';

export default async function Account() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { content },
  } = await supabase.from('big_pictures').select().single();

  return (
    <Container>
      <Flex direction="column" gap="3" grow="1">
        <Settings />
        <BigPicture initialContent={content} />
      </Flex>
      <Flex direction="column" gap="3"></Flex>
    </Container>
  );
}
