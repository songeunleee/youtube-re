import React from "react";

export default function VideoCard({ video: { snippet } }) {
  return <li>{snippet.title}</li>;
}
