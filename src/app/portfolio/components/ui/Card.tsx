interface CardTitleProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardTitleProps) => {
  return <div className="m-4 rounded-md bg-inherit p-4 shadow-lg dark:bg-zinc-700">{children}</div>;
};

export default Card;
