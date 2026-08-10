export default function SectionHeading({ eyebrow, title, align = "center" }) {
  const alignment = align === "left" ? "text-left items-start" : "text-center items-center";
  return (
    <div className={`flex flex-col ${alignment} gap-2 mb-10`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {title && <h2 className="heading-hero text-2xl md:text-4xl">{title}</h2>}
    </div>
  );
}
