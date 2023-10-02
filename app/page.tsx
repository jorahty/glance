import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

import BigPicture from '@/components/BigPicture';
import ThemeChanger from '@/components/ThemeChanger';

export default async function Account() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { content },
  } = await supabase.from('big_pictures').select().single();

  return (
    <>
      <ThemeChanger />
      <BigPicture initialContent={content} />
    </>
  );
}
