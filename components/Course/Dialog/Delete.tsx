import { Button, Dialog, Flex } from '@radix-ui/themes';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

import { Course } from '../Container';

interface Props {
  course: Course;
}

export default function CourseDialogDelete({ course }: Props) {
  const supabase = createClientComponentClient();

  const deleteCourse = async () => {
    const { error } = await supabase.rpc('delete_course', {
      course_id: course.id,
    });
    if (error) alert(error.message);
  };

  return (
    <>
      <Dialog.Title>Delete</Dialog.Title>

      <Dialog.Description size="2">
        Are you sure? Deleting <b>{course.name}</b> cannot be undone.
      </Dialog.Description>

      <Flex gap="3" mt="3" justify="end">
        <Dialog.Close>
          <Button variant="soft" color="gray">
            Cancel
          </Button>
        </Dialog.Close>
        <Dialog.Close>
          <Button color="red" onClick={deleteCourse}>
            Delete
          </Button>
        </Dialog.Close>
      </Flex>
    </>
  );
}
