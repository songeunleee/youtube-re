import React from "react";

export default function VideoCard({ video }) {
  const { title, thumbnails } = video.snippet;
  return (
    <li>
      <img src={thumbnails.medium} alt="" />
    </li>
  );
}
