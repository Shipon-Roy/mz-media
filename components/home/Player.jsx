import React from "react";
import Container from "../Container";

export default function Player() {
  return (
    <Container>
      <div className="mt-20 rounded-2xl">
        <div>
          <iframe
            className="rounded-3xl mx-auto"
            width="960"
            height="615"
            src="https://www.youtube.com/embed/3v0rqnWxewk?si=CXwBt4QtM7-a12eg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </Container>
  );
}
