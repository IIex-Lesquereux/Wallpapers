"use client";

import WallpaperView from "@/components/WallpaperView";
import { ImgArrayProps } from "@/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [wallpapers, setWallpapers] = useState<ImgArrayProps[]>([]);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((res) => setWallpapers(res.data));
  }, []);

  return (
    <main className="min-h-screen">
      <div className="mb-4 font-bold text-4xl">HD Wallpapers</div>
      <div>
        This warehouse image content all from the network collection; if there
        is a violation of your rights and interests, I am very sorry, please
        contact me, I will be deleted to deal with.
      </div>
      <WallpaperView data={wallpapers} />
    </main>
  );
}
