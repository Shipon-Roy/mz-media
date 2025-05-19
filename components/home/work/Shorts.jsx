import React from "react";

export default function Shorts() {
  const shortsVideos = [
    {
      id: 1,
      title: "Shorts 1",
      src: "https://youtube.com/embed/h-Pr0ppvm2Q?si=uETMQ0KMoBdvtV6g", // replace with real shorts link
    },
    {
      id: 2,
      title: "Shorts 2",
      src: "https://www.youtube.com/embed/JKJ6P4FdCKw",
    },
    {
      id: 3,
      title: "Shorts 3",
      src: "https://www.youtube.com/embed/oYpInXyyRT8",
    },
  ];

  return (
    <div className="my-12 mx-auto w-full max-w-[1200px] px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {shortsVideos.map((video) => (
          <div key={video.id} className="aspect-[9/16] w-full">
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
