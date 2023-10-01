'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function Auth() {
  const supabase = createClientComponentClient();

  const signIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback',
      },
    });
  };

  return <button onClick={signIn}>Sign in with Google</button>;
}
