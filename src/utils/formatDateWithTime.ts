export default function formatDateWithTime(date: Date) {
  const newDate = new Date(date);

  const day = newDate.toLocaleDateString(['ban', 'id'], {
    day: 'numeric',
    month: 'numeric',
    year: '2-digit',
  });

  const hour = newDate.getHours() + 1;
  const minute = newDate.getMinutes() + 1;

  return `${day} ${hour}:${minute}`;
}
