import React from "react";

export default function Podcasts() {
  const videos = [
    {
      id: 1,
      title: "Video 1",
      src: "https://www.youtube.com/embed/oCNNDC8VKN8?si=QDIEc8rorzW7qsFB",
    },
    {
      id: 2,
      title: "Video 2",
      src: "https://www.youtube.com/embed/2ywB4uJBPj8?si=gfyQowQxgkUFxgcv",
    },
    {
      id: 3,
      title: "Video 3",
      src: "https://www.youtube.com/embed/LK1Hd_zjypc?si=aqbvpuLtvHzlI-n3",
    },
    {
      id: 4,
      title: "Video 4",
      src: "https://www.youtube.com/embed/3f65pfuprJ8?si=HqTZWg8KytC_Y-pq",
    },
  ];

  return (
    <div className="my-12 mx-auto w-full max-w-[1200px] px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="aspect-video w-full">
            <iframe
              src={video.src}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded shadow"
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}
