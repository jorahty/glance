'use client';
import { Dialog, IconButton } from '@radix-ui/themes';
import { PlusIcon } from '@radix-ui/react-icons';
import CourseDialogAdd from './Dialog/Add';

interface Props {
  prev_course: string;
}

export default function CourseButton({ prev_course }: Props) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <IconButton mr="3">
          <PlusIcon width="18" height="18" />
        </IconButton>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 450 }}>
        <CourseDialogAdd prev_course={prev_course} />
      </Dialog.Content>
    </Dialog.Root>
  );
}
