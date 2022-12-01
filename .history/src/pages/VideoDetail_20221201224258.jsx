import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function VideoDetail() {
  const { videoId } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", videoId], () => {
    return youtube.channel(videoId);
  });

  console.log();

  return (
    <section>
      <iframe
        id="player"
        type="text/html"
        width="100%"
        height="640"
        src={`http://www.youtube.com/embed/${videoId}`}
        frameborder="0"
      ></iframe>
    </section>
  );
}
