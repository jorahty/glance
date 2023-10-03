import { useState, useRef, forwardRef } from 'react';
import { Dialog, DropdownMenu, Flex, IconButton } from '@radix-ui/themes';
import {
  DotsVerticalIcon,
  Pencil2Icon,
  PlusIcon,
  TrashIcon,
} from '@radix-ui/react-icons';

import { Course } from './Container';
import CourseDialogAdd from './Dialog/Add';
import CourseDialogRename from './Dialog/Rename';
import CourseDialogDelete from './Dialog/Delete';

interface Props {
  course: Course;
}

export default function CourseMenu({ course }: Props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hasOpenDialog, setHasOpenDialog] = useState(false);
  const dropdownTriggerRef = useRef(null);
  const focusRef = useRef(null) as any;

  function handleDialogItemSelect() {
    focusRef.current = dropdownTriggerRef.current;
  }

  function handleDialogItemOpenChange(open: boolean) {
    setHasOpenDialog(open);
    if (open === false) {
      setDropdownOpen(false);
    }
  }

  return (
    <DropdownMenu.Root open={dropdownOpen} onOpenChange={setDropdownOpen}>
      <DropdownMenu.Trigger>
        <IconButton variant="ghost">
          <DotsVerticalIcon width="20" height="20" />
        </IconButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        sideOffset={5}
        hidden={hasOpenDialog}
        onCloseAutoFocus={(event) => {
          if (focusRef.current) {
            focusRef.current.focus();
            focusRef.current = null;
            event.preventDefault();
          }
        }}>
        <DialogItem
          triggerChildren={
            <Flex align="center" gap="2">
              <PlusIcon /> New
            </Flex>
          }
          onSelect={handleDialogItemSelect}
          onOpenChange={handleDialogItemOpenChange}>
          <CourseDialogAdd prev_course={course.id} />
        </DialogItem>
        <DialogItem
          triggerChildren={
            <Flex align="center" gap="2">
              <Pencil2Icon /> Rename
            </Flex>
          }
          onSelect={handleDialogItemSelect}
          onOpenChange={handleDialogItemOpenChange}>
          <CourseDialogRename course={course} />
        </DialogItem>
        <DialogItem
          color="red"
          triggerChildren={
            <Flex align="center" gap="2">
              <TrashIcon /> Delete
            </Flex>
          }
          onSelect={handleDialogItemSelect}
          onOpenChange={handleDialogItemOpenChange}>
          <CourseDialogDelete courseId={course.id} />
        </DialogItem>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

const DialogItem = forwardRef((props: any, forwardedRef) => {
  const { triggerChildren, children, onSelect, onOpenChange, ...itemProps } =
    props;
  return (
    <Dialog.Root onOpenChange={onOpenChange}>
      <Dialog.Trigger>
        <DropdownMenu.Item
          {...itemProps}
          ref={forwardedRef}
          onSelect={(event) => {
            event.preventDefault();
            onSelect && onSelect();
          }}>
          {triggerChildren}
        </DropdownMenu.Item>
      </Dialog.Trigger>
      <Dialog.Content style={{ maxWidth: 450 }}>{children}</Dialog.Content>
    </Dialog.Root>
  );
}) as any;
