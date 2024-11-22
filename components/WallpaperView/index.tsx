"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ImgArrayProps } from "@/types";
import { download } from "@/utils";
import { FiDownload, FiZoomIn, FiZoomOut, FiRotateCw } from "react-icons/fi";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

interface Props {
  data: ImgArrayProps[];
}

const ToolbarClass =
  "mx-2 cursor-pointer text-[14px] w-[1.5em] h-[1.5em] select-none opacity-75 hover:opacity-100 transition-opacity";

const FullScreenIcon = (props: React.HTMLAttributes<any>) => {
  const [fullscreen, setFullscreen] = useState<boolean>(false);
  useEffect(() => {
    document.onfullscreenchange = () => {
      setFullscreen(Boolean(document.fullscreenElement));
    };
  }, []);
  return (
    <svg
      className="PhotoView-Slider__toolbarIcon"
      fill="white"
      width="44"
      height="44"
      viewBox="0 0 768 768"
      {...props}
    >
      {fullscreen ? (
        <path d="M511.5 256.5h96v63h-159v-159h63v96zM448.5 607.5v-159h159v63h-96v96h-63zM256.5 256.5v-96h63v159h-159v-63h96zM160.5 511.5v-63h159v159h-63v-96h-96z" />
      ) : (
        <path d="M448.5 160.5h159v159h-63v-96h-96v-63zM544.5 544.5v-96h63v159h-159v-63h96zM160.5 319.5v-159h159v63h-96v96h-63zM223.5 448.5v96h96v63h-159v-159h63z" />
      )}
    </svg>
  );
};

export default function WallpaperView({ data }: Props) {
  function toggleFullScreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      const element = document.querySelector(".PhotoView-Portal");
      if (element) {
        element.requestFullscreen();
      }
    }
  }

  return (
    <PhotoProvider
      toolbarRender={({ onScale, scale, rotate, onRotate, index }) => {
        return (
          <>
            <FiZoomIn
              onClick={() => onScale(scale + 1)}
              className={ToolbarClass}
            />
            <FiZoomOut
              onClick={() => onScale(scale - 1)}
              className={ToolbarClass}
            />
            {document.fullscreenEnabled && (
              <FullScreenIcon onClick={toggleFullScreen} />
            )}
            <FiRotateCw
              onClick={() => onRotate(rotate + 90)}
              className={ToolbarClass}
            />
            <FiDownload
              className={ToolbarClass}
              onClick={() => download(data[index].src, data[index].name)}
            />
          </>
        );
      }}
    >
      <section className="mt-10 mb-6 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3">
        {data.map((i, k) => (
          <PhotoView key={k} src={i.src}>
            <div className="relative h-[100px] md:h-[200px]">
              <Image
                fill
                src={i.src}
                alt=""
                key={k}
                className="cursor-pointer select-none object-cover rounded-lg"
              />
            </div>
          </PhotoView>
        ))}
      </section>
    </PhotoProvider>
  );
}
