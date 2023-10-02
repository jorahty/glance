'use client';
import { useState, useEffect, ChangeEvent, useRef } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

import TextArea from '../TextArea';

interface Props {
  initialContent: string;
}

export default function BigPictureTextArea({ initialContent }: Props) {
  const supabase = createClientComponentClient();
  const [content, setContent] = useState(initialContent);
  const timerId = useRef<undefined | NodeJS.Timeout>(undefined);
  const isTyping = useRef(false);

  useEffect(() => {
    const channel = supabase
      .channel('realtime big picture')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'big_pictures',
        },
        (payload: any) => {
          if (!isTyping.current) setContent(payload.new.content);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase]);

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    setContent(newContent);

    isTyping.current = true;
    clearTimeout(timerId.current);
    timerId.current = setTimeout(() => {
      isTyping.current = false;
      sendContent(newContent);
    }, 800);
  };

  const sendContent = async (content: string) => {
    await supabase.from('big_pictures').upsert({ content });
  };

  return <TextArea value={content} onChange={onChange} />;
}
