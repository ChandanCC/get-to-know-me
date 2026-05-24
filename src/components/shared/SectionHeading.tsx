interface Props {
  label: string;
}

export default function SectionHeading({ label }: Props) {
  return (
    <h2 className="section-h">
      <span className="hash">#</span>
      {label}
      <span className="hline" />
    </h2>
  );
}
