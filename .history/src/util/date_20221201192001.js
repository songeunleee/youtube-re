import { format, register } from "timeago.js";
import koLocation from "timeago.js/lib/lang/ko";

register("ko", koLocation);

export function formatAgo(date, lang = "en_US") {
  return format(date, lang);
}
