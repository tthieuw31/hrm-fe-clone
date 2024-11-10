export default function formatTime(date: Date) {
  const newDate = new Date(date);

  const hour = newDate.getHours() + 1;
  const minute = newDate.getMinutes() + 1;

  return `${hour}:${minute}`;
}
