import moment from 'moment';
export const DATE_FORMAT = 'DD/MM/YYYY';
export default function formatDate(date: Date) {
  const newDate = new Date(date);

  const day = newDate.toLocaleDateString(['ban', 'id'], {
    day: 'numeric',
    month: 'numeric',
    year: '2-digit',
  });

  return `${day}`;
}

function padTo2Digits(num: number) {
  return num.toString().padStart(2, '0');
}

// 👇️ format as "YYYY-MM-DD hh:mm:ss"
// You can tweak the format easily
export function formatLocalDateTime(date: Date) {
  return (
    [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('-') +
    'T' +
    [
      padTo2Digits(date.getHours()),
      padTo2Digits(date.getMinutes()),
      padTo2Digits(date.getSeconds()),
    ].join(':')
  );
}

export function formatPromotionStartTime(date: Date) {
  return (
    [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('-') +
    'T' +
    [padTo2Digits(0), padTo2Digits(0), padTo2Digits(0)].join(':')
  );
}

export function formatPromotionEndTime(date: Date) {
  return (
    [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('-') +
    'T' +
    [padTo2Digits(23), padTo2Digits(59), padTo2Digits(59)].join(':')
  );
}

export function formatDateTimeToString(date: any) {
  const d = moment(date).format('DD/MM/YYYY');
  const t = moment(date).format('HH:mm:ss');
  return t + `\n` + d;
}

export function formatDateToString(date: any) {
  return moment(date).format('DD/MM/YYYY');
}
