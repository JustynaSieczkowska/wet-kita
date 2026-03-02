import { NextResponse } from "next/server";
import { getAboutContent } from "@/sanity/queries";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const about = await getAboutContent();

    return NextResponse.json(
      about ?? {
        title: "O nas",
        paragraphs: [
          "Uzupełnij treść w panelu /studio → O nas i kliknij Publish.",
        ],
      }
    );
  } catch (error) {
    return NextResponse.json({
      title: "O nas",
      paragraphs: ["Treść tymczasowo niedostępna."],
    });
  }
}