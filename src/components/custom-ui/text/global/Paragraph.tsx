interface ParagraphProps {
  children: React.ReactNode;
  font?: string;
  fontWeight?: string;
  className?: string;
}

const Paragraph = ({
  children,
  font = 'font-sans',
  fontWeight = 'font-normal',
  className
}: ParagraphProps) => {
  return (
    <p className={`${font} ${fontWeight} text-sm subpixel-antialiased ${className}`}>{children}</p>
  );
};

export default Paragraph;
