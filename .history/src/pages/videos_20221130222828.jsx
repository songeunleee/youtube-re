import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Videos() {
  const { keyword } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      "C:/Users/songeun/react/react-re/youtube-re/public/videos/popular.json"
    ).then(console.log);
  }, []);
  return (
    <section>
      <div>Videos {keyword ? `🔍${keyword}` : "🔥"}</div>
      <ul>{}</ul>
    </section>
  );
}
