import React from "react";
import { useParams } from "react-router-dom";

export default function VideoDetail() {
  const { videoId } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", id], () => {
    return youtube.channel(id);
  });

  return <div>VideoDtail {videoId}</div>;
}
