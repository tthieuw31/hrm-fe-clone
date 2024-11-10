export const titles: {
  path: string;
  param: string;
  setTitle: (key?: string | number) => string;
}[] = [
  {
    path: '/',
    param: '',
    setTitle: () => 'Trang Chủ',
  },
  {
    path: '/sign-in',
    param: '',
    setTitle: () => 'Đăng nhập',
  },
  {
    path: '/promotion',
    param: '',
    setTitle: () => 'Khuyến mãi',
  },
  {
    path: '/voucher',
    param: '',
    setTitle: () => 'Voucher',
  },
  {
    path: '*',
    param: '',
    setTitle: () => 'Trang không tồn tại',
  },
];
