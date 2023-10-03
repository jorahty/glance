'use client';
import Image from 'next/image';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Button, Flex } from '@radix-ui/themes';

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

  return (
    <Flex justify="center" align="center" style={{ height: '70vh' }}>
      <Button color="gray" variant="surface" size="4" onClick={signIn}>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          alt="Google Logo"
          width={24}
          height={24}
        />
        Continue with Google
      </Button>
    </Flex>
  );
}
