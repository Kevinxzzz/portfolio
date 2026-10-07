/** Strips protocol and trailing slash for display: https://github.com/x/ -> github.com/x */
export function displayUrl(url: string): string {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}
