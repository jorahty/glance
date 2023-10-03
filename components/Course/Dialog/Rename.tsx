import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { TextField, Button, Dialog, Flex } from '@radix-ui/themes';

import { Course } from '../Container';

interface Props {
  course: Course;
}

export default function CourseDialogRename({ course }: Props) {
  const supabase = createClientComponentClient();
  const [name, setName] = useState(course.name);

  const renameCourse = async () => {
    await supabase.from('courses').upsert({ id: course.id, name });
    setName(name);
  };

  return (
    <>
      <Dialog.Title>Rename</Dialog.Title>

      <TextField.Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />

      <Flex gap="3" mt="3" justify="end">
        <Dialog.Close>
          <Button variant="soft" color="gray">
            Cancel
          </Button>
        </Dialog.Close>
        <Dialog.Close>
          <Button onClick={renameCourse}>Save</Button>
        </Dialog.Close>
      </Flex>
    </>
  );
}
