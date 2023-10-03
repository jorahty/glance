'use client';
import { useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

import { Course } from './Container';
import CourseCard from './Card';
import CourseButton from './Button';

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
              if (index !== -1) {
                newCourses[index].name = payload.new.name;
                newCourses[index].prev_course = payload.new.prev_course;
              }
            } else if (payload.eventType === 'DELETE') {
              const index = newCourses.findIndex(
                (course) => course.id === payload.old.id
              );
              if (index !== -1) newCourses.splice(index, 1);
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

  const sortedCourses = sortCourses(courses);
  const lastCourse = sortedCourses[sortedCourses.length - 1];

  return (
    <>
      {sortedCourses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
      <CourseButton prev_course={lastCourse?.id} />
    </>
  );
}

// From ChatGPT
function sortCourses(courses: Course[]) {
  const sortedCourses = [];

  // Find the course with prev_course as null (the starting point)
  const startCourse = courses.find((course) => course.prev_course === null);

  if (startCourse) {
    // Add the startCourse to the sortedCourses array
    sortedCourses.push(startCourse);

    // Recursively find and add the next courses based on prev_course
    const findNextCourse = (prevCourseId: string) => {
      const nextCourse = courses.find(
        (course) => course.prev_course === prevCourseId
      );
      if (nextCourse) {
        sortedCourses.push(nextCourse);
        findNextCourse(nextCourse.id);
      }
    };

    findNextCourse(startCourse.id);
  }

  return sortedCourses;
}
