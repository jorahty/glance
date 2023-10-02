'use client';
import { useState } from 'react';
import { Flex } from '@radix-ui/themes';

import CourseCard from './Card';
import { Course } from './Container';

interface Props {
  courses: Course[];
}

export default function CourseList({ courses: initialCourses }: Props) {
  const [courses, setCourses] = useState(initialCourses);

  return (
    <Flex
      grow="1"
      gap="3"
      align="start"
      style={{
        width: 'calc(100vw - 310px)',
        overflowY: 'scroll',
      }}>
      {courses?.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </Flex>
  );
}
