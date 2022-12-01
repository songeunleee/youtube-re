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
  } = useQuery(["videos", id], () => {
    return youtube.channel(id);
  });

  return <div>VideoDtail {videoId}</div>;
}
