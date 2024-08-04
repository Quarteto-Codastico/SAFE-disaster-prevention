export function getFormattedDate(date: Date | string) {
  const parsedDate = new Date(date);

  let day: number | string = parsedDate.getDate();
  let month: number | string = parsedDate.getMonth() + 1;
  const year = parsedDate.getFullYear();

  if (day < 10) {
    day = `0${day}`;
  }

  if (month < 10) {
    month = `0${month}`;
  }

  return `${day}/${month}/${year}`;
}
