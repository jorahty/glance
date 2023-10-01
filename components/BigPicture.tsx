interface Props {
  content: string;
}

export default function BigPicture({ content }: Props) {
  return <textarea defaultValue={content} />;
}
