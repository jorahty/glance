'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Button, Flex, Text } from '@radix-ui/themes';
import { DesktopIcon } from '@radix-ui/react-icons';

export default function Auth() {
  const supabase = createClientComponentClient();
  const [windowWidth, setWindowWidth] = useState(1000);
  const [warningDismissed, setWarningDismissed] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const signIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  const hideWarning = () => setWarningDismissed(true);

  return (
    <Flex justify="center" align="center" style={{ height: '70vh' }}>
      {windowWidth < 1000 && !warningDismissed ? (
        <Warning dismiss={hideWarning} />
      ) : (
        <Button color="gray" variant="surface" size="4" onClick={signIn}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
            alt="Google Logo"
            width={24}
            height={24}
          />
          Continue with Google
        </Button>
      )}
    </Flex>
  );
}

function Warning({ dismiss }: any) {
  return (
    <Flex direction="column" align="center">
      <DesktopIcon width={24} height={24} />
      <Text mt="4">Your screen is too narrow.</Text>
      <Text mb="4">Use a wide-screen device.</Text>
      <Button color="gray" variant="surface" onClick={dismiss}>
        Continue anyway
      </Button>
    </Flex>
  );
}
