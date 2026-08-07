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
      <p className="text-gradient-gold text-xs font-semibold tracking-[0.35em] uppercase">
        {eyebrow}
      </p>
      <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
        <span className="text-gradient-luxe">{title}</span>
      </h2>
      {description && (
        <p className="text-muted-foreground mt-4 text-base sm:text-lg">{description}</p>
      )}
    </Reveal>
  );
}
