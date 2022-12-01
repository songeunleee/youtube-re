import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();

  const {
    error,
    isLoading,
    data: url,
  } = useQuery(["channel"], () => youtube.channelImageURL(id));

  return <div>{name}</div>;
}
