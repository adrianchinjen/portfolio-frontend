interface ParagraphProps {
  children: React.ReactNode;
  font?: string;
  fontWeight?: string;
  styles?: string;
}

const Paragraph = ({
  children,
  font = 'font-sans',
  fontWeight = 'font-normal',
  styles
}: ParagraphProps) => {
  return (
    <p className={`${font} ${fontWeight} text-lg subpixel-antialiased ${styles}`}>{children}</p>
  );
};

export default Paragraph;
