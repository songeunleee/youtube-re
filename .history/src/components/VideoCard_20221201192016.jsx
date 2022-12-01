import React from "react";
import { format } from "timeago.js";
import { formatAgo } from "../util/date";

export default function VideoCard({ video }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  return (
    <li>
      <img src={thumbnails.medium.url} alt="" />
      <div>
        <p>{title}</p>
        <p>{channelTitle}</p>
        <p>{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
}
