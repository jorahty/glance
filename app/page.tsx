import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

import BigPicture from '@/components/BigPicture';
import AccountForm from './account-form';

export default async function Account() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const {
    data: { content },
  } = await supabase.from('big_pictures').select().single();

  return (
    <>
      <AccountForm session={session} />
      <BigPicture content={content} />
    </>
  );
}
