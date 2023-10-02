import { TextField, Button, Dialog, Flex } from '@radix-ui/themes';

export default function CourseDialogRename() {
  return (
    <>
      <Dialog.Title>Rename</Dialog.Title>

      <TextField.Input defaultValue="Course" placeholder="Name" />

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
    </>
  );
}
