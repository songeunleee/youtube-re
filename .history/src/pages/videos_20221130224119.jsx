import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], async () => {
    return fetch(`/videos/${keyword ? "search" : "popular"}.json`)
      .then((res) => res.json())
      .then((data) => data.items);
  });

  return (
    <section>
      <div>Videos {keyword ? `🔍${keyword}` : "🔥"}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Somthing is wrong</p>}
      {videos && <ul>{videos.map(video=> <VideoCard key={video.id} )}</ul>}
    </section>
  );
}
