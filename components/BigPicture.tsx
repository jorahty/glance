'use client';
import { useState, useEffect, ChangeEvent, useRef } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

interface Props {
  content: string;
}

export default function BigPicture({ content }: Props) {
  const supabase = createClientComponentClient();
  const [text, setText] = useState(content);
  const timerIdRef = useRef<undefined | NodeJS.Timeout>(undefined);
  const timerActiveRef = useRef(false);

  useEffect(() => {
    clearTimeout(timerIdRef.current);

    if (timerActiveRef.current) {
      const newTimerId = setTimeout(() => {
        updateBigPicture();
      }, 2000);

      timerIdRef.current = newTimerId;
    }
  }, [text]);

  const onInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    timerActiveRef.current = true;
  };

  const updateBigPicture = async () => {
    let { error } = await supabase
      .from('big_pictures')
      .upsert({ content: text });

    if (error) console.log(error.message);
  };

  return <textarea value={text} onInput={onInput} />;
}
