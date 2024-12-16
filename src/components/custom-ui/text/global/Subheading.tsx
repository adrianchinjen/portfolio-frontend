interface SubHeadingProps {
  children: React.ReactNode;
  font?: string;
  fontWeight?: string;
  className?: string;
}

const Subheading = ({
  children,
  font = 'font-sans',
  fontWeight = 'font-normal',
  className
}: SubHeadingProps) => {
  return (
    <h3 className={`${font} ${fontWeight} text-3xl tracking-tighter ${className}`}>{children}</h3>
  );
};

export default Subheading;
