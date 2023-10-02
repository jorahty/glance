import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Flex } from '@radix-ui/themes';

import CourseList from './List';
import CourseAddButton from './Add/Button';

export interface Course {
  id: string;
  name: string;
  content: string;
}

export default async function CourseContainer() {
  const supabase = createServerComponentClient({ cookies });

  const { data: courses } = await supabase
    .from('courses')
    .select('id, name, content');

  return (
    <Flex
      grow="1"
      gap="3"
      align="start"
      style={{
        width: 'calc(100vw - 310px)',
        overflowY: 'scroll',
      }}>
      <CourseList courses={courses!} />
      <CourseAddButton />
    </Flex>
  );
}
