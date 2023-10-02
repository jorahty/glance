import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import CourseList from './List';

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

  return <CourseList courses={courses!} />;
}
