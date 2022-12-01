import React from "react";

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();

  return <div>{name}</div>;
}
