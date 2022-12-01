import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();

  const {
    error,
    isLoading,
    data: url,
  } = useQuery(["channel", id], () => youtube.channelImageURL(id));

  return (
    <div className="flex my-4 mb-8">
      {url && <img src={url} alt={name} />}
      <p>{name}</p>
    </div>
  );
}
