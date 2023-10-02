import { Button, Dialog, Flex } from '@radix-ui/themes';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

interface Props {
  courseId: string;
}

export default function CourseDialogDelete({ courseId }: Props) {
  const supabase = createClientComponentClient();

  const deleteCourse = async () => {
    await supabase.from('courses').delete().eq('id', courseId);
  };

  return (
    <>
      <Dialog.Title>Delete</Dialog.Title>

      <Dialog.Description size="2">
        Are you sure? Deleting "Course" cannot be undone.
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
