import React, { ReactElement, JSXElementConstructor } from 'react';

/**
 * Hàm chuyển đổi tiếng Việt có dấu thành không dấu.
 * @param {string} str - Chuỗi tiếng Việt có dấu.
 * @returns {string} - Chuỗi không dấu.
 */
function removeVietnameseTones(str: string): string {
  return str
    .normalize('NFD') // Chuyển về dạng tổ hợp ký tự
    .replace(/[\u0300-\u036f]/g, '') // Xóa các dấu thanh
    .replace(/đ/g, 'd') // Thay thế chữ đ thường
    .replace(/Đ/g, 'D'); // Thay thế chữ Đ hoa
}

/**
 * Hàm lọc cho thành phần Select trong Ant Design.
 * @param {string} inputValue - Chuỗi nhập vào từ người dùng.
 * @param {ReactElement<any, string | JSXElementConstructor<any>> | undefined} option - Đối tượng tùy chọn trong Select.
 * @returns {boolean} - Trả về true nếu tùy chọn phù hợp với chuỗi nhập vào (kể cả không dấu).
 */
export function filterOption(
  inputValue: string,
  option?: ReactElement<any, string | JSXElementConstructor<any>>
): boolean {
  if (!option) return false;

  const inputValueNormalized = removeVietnameseTones(inputValue.toLowerCase());
  const optionTextNormalized = removeVietnameseTones(
    option.props.children.toLowerCase()
  );

  return optionTextNormalized.includes(inputValueNormalized);
}
