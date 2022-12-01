import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId } = video.snippet;
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", video.id], () => {
    return youtube.channel(video.id);
  });

  return (
    <section>
      <iframe
        id="player"
        type="text/html"
        width="100%"
        height="640"
        src={`http://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
      />
      <div>
        <h2>{title}</h2>
      </div>
    </section>
  );
}
