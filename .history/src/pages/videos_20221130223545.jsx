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
    return fetch(`/videos/${keyword ? "search" : "popular"}.json`);
  });

  return (
    <section>
      <div>Videos {keyword ? `🔍${keyword}` : "🔥"}</div>
      <ul>{}</ul>
    </section>
  );
}
