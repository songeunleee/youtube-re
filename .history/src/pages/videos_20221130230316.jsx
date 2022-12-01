import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import axios from "axios";

export default function Videos() {
  const { keyword } = useParams();
  const { isLoading, error, data: videos } = useQuery(["videos", keyword]);

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
