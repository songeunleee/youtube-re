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

  console.log(videos.snippet.title);

  return <div>VideoDtail {}</div>;
}
