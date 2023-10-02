'use client';
import {
  Dialog,
  TextField,
  Text,
  Button,
  IconButton,
  Flex,
} from '@radix-ui/themes';
import { PlusIcon } from '@radix-ui/react-icons';

export default function CourseAddButton() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <IconButton mr="3">
          <PlusIcon width="18" height="18" />
        </IconButton>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 450 }}>
        <label>
          <Text as="div" size="2" mb="1" weight="bold">
            Name
          </Text>
          <TextField.Input defaultValue="" placeholder="Name" />
        </label>

        <Flex gap="3" mt="3" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button>Save</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}
