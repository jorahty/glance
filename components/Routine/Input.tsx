'use client';
import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Button, Dialog, Flex, Text, TextField } from '@radix-ui/themes';
import { Pencil2Icon } from '@radix-ui/react-icons';

interface Props {
  calendarId: string;
}

export default function RoutineInput({ calendarId: initalCalendarId }: Props) {
  const supabase = createClientComponentClient();
  const [calendarId, setCalendarId] = useState(initalCalendarId);

  const updateRoutine = async () => {
    await supabase.from('routines').upsert({ calendar_id: calendarId });
  };

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
            value={calendarId}
            onChange={(e) => setCalendarId(e.target.value)}
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
            <Button onClick={updateRoutine}>Save</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}
