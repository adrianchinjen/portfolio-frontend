interface HeadingProps {
  children: React.ReactNode;
  font?: string;
  fontWeight?: string;
  styles?: string;
}

const Heading = ({
  children,
  font = 'font-sans',
  fontWeight = 'font-normal',
  styles
}: HeadingProps) => {
  return (
    <h1 className={`${font} ${fontWeight} text-5xl tracking-tighter ${styles}`}>{children}</h1>
  );
};

export default Heading;
