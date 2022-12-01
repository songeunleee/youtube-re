import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import axios from "axios";

import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => {
    return youtube.search(keyword);
  });

  return (
    <section>
      <div>Videos {keyword ? `🔍${keyword}` : "🔥"}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Somthing is wrong</p>}
      {videos && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </section>
  );
}
