import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Flex } from '@radix-ui/themes';

import Settings from '@/components/Settings';
import BigPictureCard from '@/components/BigPicture/Card';
import TodoCard from '@/components/Todo/Card';

export default async function Account() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { content },
  } = await supabase.from('big_pictures').select().single();

  return (
    <Flex p="3" gap="3" style={{ minHeight: '100vh' }}>
      <Flex direction="column" gap="3" grow="1">
        <Settings />
        <BigPictureCard initialContent={content} />
        <TodoCard initialContent={content} />
      </Flex>
      <Flex direction="column" gap="3"></Flex>
    </Flex>
  );
}
