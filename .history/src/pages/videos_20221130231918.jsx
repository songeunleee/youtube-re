import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import axios from "axios";
import { search } from "../api/youtube";
import FakeYoutube from "../api/fakeYoutube";

export default function Videos() {
  console.log(1);
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => {
    const youtube = new FakeYoutube();
    return youtube.search(keyword);
  });

  return (
    <section>
      <div>Videos {keyword ? `🔍${keyword}` : "🔥"}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Somthing is wrong</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </section>
  );
}
