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
        width="640"
        height="360"
        src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
        frameborder="0"
      ></iframe>
    </section>
  );
}
