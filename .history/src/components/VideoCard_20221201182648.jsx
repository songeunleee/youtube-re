import React from "react";

export default function VideoCard({ video: { snippet } }) {
  return <section>{snippet.title}</section>;
}
