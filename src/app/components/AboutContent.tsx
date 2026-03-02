import { getAboutContent } from "@/sanity/queries";

const fallback = {
  title: "O nas",
  paragraphs: [
    "Uzupełnij treść w panelu /studio → O nas.",
  ],
};

export default async function AboutContent() {
  const about = (await getAboutContent()) ?? fallback;

  return (
    <div>
      <h2 className="text-3xl font-semibold text-[#1f2a37]">{about.title}</h2>

      <div className="mt-4 space-y-3 text-[16px] leading-7 text-[#3b4552]">
        {about.paragraphs.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>
    </div>
  );
}
