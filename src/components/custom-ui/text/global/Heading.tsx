interface HeadingProps {
  children: React.ReactNode;
  font?: string;
  fontWeight?: string;
  className?: string;
}

const Heading = ({
  children,
  font = 'font-sans',
  fontWeight = 'font-normal',
  className
}: HeadingProps) => {
  return <h1 className={`${font} ${fontWeight} text-5xl ${className}`}>{children}</h1>;
};

export default Heading;
