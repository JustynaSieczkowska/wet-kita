import { NextResponse } from "next/server";
import { getAboutContent } from "@/sanity/queries";

export async function GET() {
  const about = await getAboutContent();

  // fallback, jeśli w Sanity nie ma jeszcze dokumentu
  return NextResponse.json(
    about ?? {
      title: "O nas",
      paragraphs: ["Uzupełnij treść w panelu /studio → O nas i kliknij Publish."],
    }
  );
}
