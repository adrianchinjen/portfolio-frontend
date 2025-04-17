interface ContainerProps {
  children: React.ReactNode;
}

const ContainerBody = ({ children }: ContainerProps) => {
  return (
    <section className="mx-auto mt-16 min-h-full max-w-6xl border-slate-950 xl:min-h-fit">
      {children}
    </section>
  );
};

export default ContainerBody;

// relative z-10 mx-auto mt-10 min-h-full max-w-6xl border-4 xl:grid xl:min-h-fit xl:grid-flow-col xl:grid-rows-2 2xl:px-7 2xl:pt-10 3xl:pt-16
