import React from "react";
import { useNavigation } from "react-router-dom";
import { formatAgo } from "../util/date";

export default function VideoCard({ video }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigation();
  const handleClick = () => {
    navigate(`videos/watch/${video.id}`);
  };

  return (
    <li onClick={handleClick}>
      <img className="w-full" src={thumbnails.medium.url} alt="" />
      <div>
        <p className="font-semibold my-2 line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80">{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
}
