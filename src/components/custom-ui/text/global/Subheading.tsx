interface SubHeadingProps {
  children: React.ReactNode;
  font?: string;
  fontWeight?: string;
  styles?: string;
}

const Subheading = ({
  children,
  font = 'font-sans',
  fontWeight = 'font-normal',
  styles
}: SubHeadingProps) => {
  return (
    <h3 className={`${font} ${fontWeight} text-3xl tracking-tighter ${styles}`}>{children}</h3>
  );
};

export default Subheading;
