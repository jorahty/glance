'use client';
import { Button, Dialog, Flex, Text, TextField } from '@radix-ui/themes';
import { Pencil2Icon } from '@radix-ui/react-icons';

export default function RoutineInput() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button variant="surface" color="gray">
          <Pencil2Icon /> Edit
        </Button>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 450 }}>
        <label>
          <Text as="div" size="2" mb="1" weight="bold">
            Google Calendar ID
          </Text>
          <TextField.Input
            defaultValue="jtennant@ucsc.edu"
            placeholder="Google Calendar ID"
          />
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
