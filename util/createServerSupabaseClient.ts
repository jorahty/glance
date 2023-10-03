import { cookies } from 'next/headers';
import { cache } from 'react';
import { createServerComponentClient as _createServerComponentClient } from '@supabase/auth-helpers-nextjs';

export const createServerComponentClient = cache(() => {
  const cookieStore = cookies();
  return _createServerComponentClient({ cookies: () => cookieStore });
});
