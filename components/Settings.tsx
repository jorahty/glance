import { Button, Flex, IconButton } from '@radix-ui/themes';
import { QuestionMarkIcon, ExitIcon } from '@radix-ui/react-icons';

import ThemeChanger from './ThemeChanger';

export default function Settings() {
  return (
    <Flex gap="3">
      <IconButton>
        <QuestionMarkIcon width="18" height="18" />
      </IconButton>
      <ThemeChanger />
      <form action="/auth/signout" method="post">
        <Button variant="surface" color="gray">
          <ExitIcon width="18" height="18" /> Logout
        </Button>
      </form>
    </Flex>
  );
}
