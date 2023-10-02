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
  const timerIdRef = useRef<undefined | NodeJS.Timeout>(undefined);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const channel = supabase
      .channel('')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'big_pictures',
        },
        (payload: any) => {
          if (!isTyping) setContent(payload.new.content);
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

    setIsTyping(true);
    clearTimeout(timerIdRef.current);
    timerIdRef.current = setTimeout(() => {
      setIsTyping(false);
      sendContent(newContent);
    }, 800);
  };

  const sendContent = async (content: string) => {
    await supabase.from('big_pictures').upsert({ content });
  };

  return <TextArea value={content} onChange={onChange} />;
}
