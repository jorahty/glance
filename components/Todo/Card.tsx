import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Card, Flex, Heading } from '@radix-ui/themes';

import TodoTextArea from './TextArea';

export default async function TodoCard() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { content },
  } = await supabase.from('todos').select().single();

  return (
    <Card>
      <Flex direction="column" gap="3">
        <Heading>Todo</Heading>
        <TodoTextArea initialContent={content} />
      </Flex>
    </Card>
  );
}
