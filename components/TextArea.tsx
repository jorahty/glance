import { Inset, TextArea as RadixTextArea } from '@radix-ui/themes';

export default function TextArea({ value, onChange }: any) {
  function handleChange(event: any) {
    const textarea = event.target;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';

    onChange(event);
  }

  return (
    <Inset style={{ flexGrow: 1 }} pt="current">
      <RadixTextArea
        value={value}
        size="3"
        onChange={handleChange}
        style={{ height: '100%' }}
        variant="soft"
      />
    </Inset>
  );
}
