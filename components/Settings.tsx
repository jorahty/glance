import { createServerComponentClient } from '@/util/createServerSupabaseClient';
import { Button, Flex, IconButton, Tooltip } from '@radix-ui/themes';
import { QuestionMarkIcon, ExitIcon } from '@radix-ui/react-icons';

import ThemeChanger from './ThemeChanger';

export default async function Settings() {
  const supabase = createServerComponentClient();

  const {
    email,
    user_metadata: { full_name },
  } = (await supabase.auth.getUser()).data.user!;

  return (
    <Flex gap="3">
      <IconButton>
        <QuestionMarkIcon width="18" height="18" />
      </IconButton>
      <ThemeChanger />
      <Tooltip content={`${full_name} (${email})`}>
        <form action="/auth/signout" method="post">
          <Button variant="surface" color="gray">
            <ExitIcon width="18" height="18" /> Logout
          </Button>
        </form>
      </Tooltip>
    </Flex>
  );
}
