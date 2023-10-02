'use client';
import { useState, useEffect, ChangeEvent, useRef } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

interface Props {
  initialContent: string;
}

export default function BigPicture({ initialContent }: Props) {
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

  const sendContent = async (content: string) => {
    await supabase.from('big_pictures').upsert({ content });
  };

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

  return <textarea rows={100} value={content} onChange={onChange} />;
}
