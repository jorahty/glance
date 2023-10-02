import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Flex } from '@radix-ui/themes';
import CourseCard from './Card';
import CourseList from './List';

export default async function CourseContainer() {
  const supabase = createServerComponentClient({ cookies });

  const { data: courses } = await supabase
    .from('courses')
    .select('id, name, content');

  return <CourseList courses={courses!} />;
}
