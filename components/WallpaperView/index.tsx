import Image from "next/image";
import { ImgArrayProps } from "@/types";
import { download } from "@/utils";
import { FiDownload } from "react-icons/fi";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

interface Props {
  data: ImgArrayProps;
}

export default function WallpaperView({ data }: Props) {
  return (
    <div className="cursor-pointer relative group select-none h-[100px] md:h-[200px]">
      <PhotoProvider>
        <PhotoView src={data.src}>
          <Image
            src={data.src}
            alt=""
            placeholder="blur"
            className="rounded-md select-none"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            blurDataURL="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 200'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='none' style='filter: url(%23b);' href='data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAABmBS//8QAFxAAAwEAAAAAAAAAAAAAAAAAAQIEEf/aAAgBAQABBQJKsH//xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAwEBPwGP/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwF//8QAFhABAQEAAAAAAAAAAAAAAAAAAQAz/9oACAEBAAY/Asxv/8QAFxABAAMAAAAAAAAAAAAAAAAAAQAhcf/aAAgBAQABPyErjbP/2gAMAwEAAgADAAAAEPv/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAwEBPxCH/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAER/9oACAECAQE/EKz/xAAYEAEAAwEAAAAAAAAAAAAAAAABABFRkf/aAAgBAQABPxAkZ2w9n//Z'/%3E%3C/svg%3E"
          />
        </PhotoView>
      </PhotoProvider>
      <div
        className="absolute bottom-1 right-1 text-[#1677ff] text-[1.5em] hidden md:group-hover:block p-1 rounded"
        onClick={() => download(data.src, data.name)}
        style={{ background: "rgba(255,255,255,.7)" }}
      >
        <FiDownload />
      </div>
    </div>
  );
}
