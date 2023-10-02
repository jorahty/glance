'use client';
import { useState, ChangeEvent, useRef } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

import TextArea from '../TextArea';

interface Props {
  initialContent: string;
  courseId: string;
}

export default function CourseTextArea({ initialContent, courseId }: Props) {
  const supabase = createClientComponentClient();
  const [content, setContent] = useState(initialContent);
  const timerId = useRef<undefined | NodeJS.Timeout>(undefined);

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    setContent(newContent);

    clearTimeout(timerId.current);
    timerId.current = setTimeout(() => {
      sendContent(newContent);
    }, 800);
  };

  const sendContent = async (content: string) => {
    await supabase.from('courses').upsert({ id: courseId, content });
  };

  return <TextArea value={content} onChange={onChange} />;
}
