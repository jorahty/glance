import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Text, TextField, Flex, Dialog, Button } from '@radix-ui/themes';

interface Props {
  prev_course: string;
}

export default function CourseDialogAdd({ prev_course }: Props) {
  const supabase = createClientComponentClient();
  const [name, setName] = useState('');

  const addCourse = async () => {
    await supabase.rpc('insert_course', {
      name,
      prev_course,
    });
    setName('');
  };

  return (
    <>
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
    </>
  );
}
