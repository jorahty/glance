import { Button, Dialog, Flex } from '@radix-ui/themes';

export default function CourseDialogDelete() {
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
          <Button color="red">Delete</Button>
        </Dialog.Close>
      </Flex>
    </>
  );
}
