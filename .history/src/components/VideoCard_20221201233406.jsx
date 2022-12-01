import React from "react";
import { useNavigate } from "react-router-dom";
import { formatAgo } from "../util/date";

export default function VideoCard({ video, type }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const isList = type === "list";
  const navigate = useNavigate();
  const handleClick = () =>
    navigate(`/videos/watch/${video.id}`, { state: { video } });

  return (
    <li className={isList ? "flex gap-1 m-1" : ""} onClick={handleClick}>
      <img className="w-full" src={thumbnails.medium.url} alt="" />
      <div>
        <p className="font-semibold my-2 line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80">{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
}
