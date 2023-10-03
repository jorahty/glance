import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Flex } from '@radix-ui/themes';

import CourseList from './List';
import CourseButton from './Button';

export interface Course {
  id: string;
  user_id: string;
  index: number;
  name: string;
  content: string;
}

export default async function CourseContainer() {
  const supabase = createServerComponentClient({ cookies });

  const { data: courses } = await supabase
    .from('courses')
    .select()
    .order('index');

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
      <CourseButton />
    </Flex>
  );
}
