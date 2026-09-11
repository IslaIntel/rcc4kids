import clsx from "clsx";

export function Section({
  id,
  children,
  className,
  innerClassName,
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <section
      id={id}
      data-section={id}
      className={clsx("scroll-mt-24 py-16 md:py-24", className)}
    >
      <div className={clsx("mx-auto w-full max-w-6xl px-5 md:px-8", innerClassName)}>
        {children}
      </div>
    </section>
  );
}
