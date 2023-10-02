'use client';
import { useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

import CourseCard from './Card';
import { Course } from './Container';

interface Props {
  courses: Course[];
}

export default function CourseList({ courses: initialCourses }: Props) {
  const supabase = createClientComponentClient();
  const [courses, setCourses] = useState(initialCourses);

  useEffect(() => {
    const channel = supabase
      .channel('realtime courses')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'courses',
        },
        (payload: any) => {
          setCourses((prevCourses) => {
            const newCourses = [...prevCourses];

            if (payload.eventType === 'INSERT') {
              newCourses.push(payload.new);
            } else if (payload.eventType === 'UPDATE') {
              const index = newCourses.findIndex(
                (course) => course.id === payload.new.id
              );
              newCourses[index] = payload.new;
            } else if (payload.eventType === 'DELETE') {
              const index = newCourses.findIndex(
                (course) => course.id === payload.old.id
              );
              newCourses.splice(index, 1);
            }

            return newCourses;
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase]);

  return (
    <>
      {courses?.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </>
  );
}
