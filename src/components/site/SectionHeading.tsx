import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <span className="inline-block rounded-full bg-amber-100 border border-amber-300/80 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-amber-900 shadow-xs">
        {eyebrow}
      </span>
      <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base sm:text-lg text-stone-600 font-medium leading-relaxed">{description}</p>
      )}
    </Reveal>
  );
}
