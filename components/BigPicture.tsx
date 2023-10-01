'use client';
import { useState, useEffect, ChangeEvent, useRef } from 'react';

interface Props {
  content: string;
}

export default function BigPicture({ content }: Props) {
  const [text, setText] = useState(content);
  const timerIdRef = useRef<undefined | NodeJS.Timeout>(undefined);
  const timerActiveRef = useRef(false);

  useEffect(() => {
    clearTimeout(timerIdRef.current);

    if (timerActiveRef.current) {
      const newTimerId = setTimeout(() => {
        console.log('save');
      }, 2000);

      timerIdRef.current = newTimerId;
    }
  }, [text]);

  const onInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    timerActiveRef.current = true;
  };

  return <textarea value={text} onInput={onInput} />;
}
