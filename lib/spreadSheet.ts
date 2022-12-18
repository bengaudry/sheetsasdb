export function getSpreadSheetId(url:string) {
  return url
    .replace("https://docs.google.com/spreadsheets/d/", "")
    .replace(`/edit#gid=0`, "");
}
