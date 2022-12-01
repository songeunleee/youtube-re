import React from "react";

export default function VideoCard({ vdeo: { snippet } }) {
  return <li>{snippet.title}</li>;
}
