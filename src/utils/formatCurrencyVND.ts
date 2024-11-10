export default function formatCurrencyVND(number: number) {
  const numberString = new Intl.NumberFormat('vi-VN', {
    maximumSignificantDigits: 3,
  }).format(number);

  return `${numberString} đ`;
}
