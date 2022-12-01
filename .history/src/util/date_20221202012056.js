import { format, register } from "timeago.js";

export function formatAgo(date, lang = "en_US") {
  return format(date, lang);
}
