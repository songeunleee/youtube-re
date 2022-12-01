import { format, register } from "timeago.js";
import koLocale from "timeago.js/lib/lang/ko";
/* eslint-disable*/
register("ko", koLocale);

export function formatAgo(date, lang = "en_US") {
  return format(date, lang);
}
