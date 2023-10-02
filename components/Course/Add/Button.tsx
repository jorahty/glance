'use client';
import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
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
  const supabase = createClientComponentClient();
  const [name, setName] = useState('');

  const addCourse = async () => {
    await supabase.from('courses').insert({ name });
    setName('');
  };

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
          <TextField.Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </label>

        <Flex gap="3" mt="3" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button onClick={addCourse}>Save</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}
