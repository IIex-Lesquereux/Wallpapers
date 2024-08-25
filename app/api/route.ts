import { NextResponse } from "next/server";
import { readdirSync } from "fs";
import { join } from "path";
import { ImgArrayProps } from "@/types";

export function GET() {
  const publicDir = join(process.cwd(), "/public/wallpapers");
  let imageList: ImgArrayProps[] = [];
  readdirSync(publicDir).forEach((i) => {
    const imgRegex = /\.(jpg|jpeg|png|gif|bmp|svg|webp)$/i;
    if (imgRegex.test(i)) {
      imageList.push({
        name: i,
        src: `/wallpapers/${i}`,
      });
    }
  });
  return NextResponse.json({ data: imageList }, { status: 200 });
}
