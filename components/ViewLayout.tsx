interface Props {
  children: React.ReactNode;
}

export default function ViewLayout({ children }: Props) {
  return (
    <div className="max-w-6xl mx-auto min-h-screen md:mb-[.5em] py-[1.5em] px-[1em] md:px-[2em]">
      {children}
    </div>
  );
}
