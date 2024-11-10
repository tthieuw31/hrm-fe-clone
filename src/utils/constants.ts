export const DEFAULT_PAGE_SIZE = 5;
export const DEFAULT_PAGE = 0;

export const RecruitmentStatus = [
  { value: 'ACTIVE', label: 'Đang tuyển' },
  { value: 'INACTIVE', label: 'Tạm ngưng' },
  { value: 'EXPIRED', label: 'Quá hạn' },
  { value: 'DRAFT', label: 'Tin tạm' },
];

export const RecruitmentStatusFilter = [
  { value: 'ALL', label: 'Tất cả' },
  { value: 'ACTIVE', label: 'Đang tuyển' },
  { value: 'INACTIVE', label: 'Tạm ngưng' },
  { value: 'EXPIRED', label: 'Quá hạn' },
  { value: 'DRAFT', label: 'Tin tạm' },
];

export const DepartmentStatus = [
  { value: 'TĐ', label: 'ACTIVE' },
  { value: 'NCTT', label: 'INACTIVE' },
  { value: 'MKT', label: 'USED' },
  { value: 'IT', label: 'EXPIRED' },
  { value: 'ST', label: 'SEND_FAIL' },
  { value: 'ST', label: 'SEND_FAIL' },
  { value: 'ST', label: 'SEND_FAIL' },
  { value: 'ST', label: 'SEND_FAIL' },
];

export const Gender = [
  { value: 'MALE', label: 'Nam' },
  { value: 'FEMALE', label: 'Nữ' },
  { value: 'OTHER', label: 'Khác' },
];

export const MaritalStatus = [
  { value: 'SINGLE', label: 'Độc thân' },
  { value: 'MARRIED', label: 'Đã kết hôn' },
  { value: 'DIVORCED', label: 'Ly hôn' },
];

export const ApplyStatus = [
  {
    value: 'NEW',
    label: 'Mới',
    color: 'cyan',
    percent: 0,
    status: 'wait',
  },
  {
    value: 'SEEN',
    label: 'Lọc CV',
    color: 'gold',
    percent: 50,
    status: 'process',
  },
  {
    value: '02',
    label: 'Ứng tuyển đạt',
    color: 'blue',
    percent: 100,
    status: 'process',
  },
  {
    value: '03',
    label: 'Ứng tuyển loại',
    color: 'volcano',
    percent: 0,
    status: 'error',
  },
  {
    value: '04',
    label: 'Blacklist',
    color: 'red',
    percent: 0,
    status: 'error',
  },
  {
    value: '05',
    label: 'Chờ phỏng vấn',
    color: 'lime',
    percent: 25,
    status: 'process',
  },
  {
    value: '06',
    label: 'Phỏng vấn không đạt vòng 1',
    color: 'magenta',
    percent: 0,
    status: 'process',
  },
  {
    value: '07',
    label: 'Phỏng vấn đạt vòng 1',
    color: 'geekblue',
    percent: 50,
    status: 'process',
  },
  {
    value: '08',
    label: 'Từ chối phỏng vấn',
    color: 'gray',
    percent: 0,
    status: 'error',
  },
  {
    value: '09',
    label: 'Chờ phỏng vấn vòng 2',
    color: 'purple',
    percent: 75,
    status: 'process',
  },
  {
    value: '10',
    label: 'Phỏng vấn không đạt vòng 2',
    color: 'red',
    percent: 0,
    status: 'error',
  },
  {
    value: '11',
    label: 'Phỏng vấn đạt',
    color: 'green',
    percent: 100,
    status: 'finish',
  },
  {
    value: '12',
    label: 'Đồng ý offer',
    color: 'lime',
    percent: 100,
    status: 'finish',
  },
  {
    value: '13',
    label: 'Không đồng ý offer',
    color: 'volcano',
    percent: 0,
    status: 'error',
  },
  {
    value: '14',
    label: 'Từ chối nhận việc',
    color: 'red',
    percent: 0,
    status: 'error',
  },
  {
    value: '15',
    label: 'Đồng ý nhận việc',
    color: 'cyan',
    percent: 80,
    status: 'finish',
  },
  {
    value: '16',
    label: 'Chờ nhận việc',
    color: 'green',
    percent: 100,
    status: 'finish',
  },
];

export const ExperienceStatusFilter = [
  { value: '', label: 'Tất cả' },
  { value: 'EX_KYCKN', label: 'Không yêu cầu KN' },
  { value: 'EX_1_3', label: '1-3 năm KN' },
  { value: 'EX_3_5', label: '3-5 năm KN' },
  { value: 'EX_T_5', label: 'Trên 5 năm KN' },
];

export const SalaryFilter = [
  {
    value: 'NEGOTIABLE',
    salaryFrom: -1,
    salaryTo: 0,
    label: 'Lương thỏa thuận',
  },
  {
    value: 'UNDER_3M',
    salaryFrom: 1,
    salaryTo: 3000000,
    label: 'Dưới 3 triệu',
  },
  {
    value: 'BETWEEN_3M_5M',
    salaryFrom: 3000000,
    salaryTo: 5000000,
    label: '3 triệu - 5 triệu',
  },
  {
    value: 'BETWEEN_5M_10M',
    salaryFrom: 5000000,
    salaryTo: 10000000,
    label: '5 triệu - 10 triệu',
  },
  {
    value: 'BETWEEN_10M_20M',
    salaryFrom: 10000000,
    salaryTo: 20000000,
    label: '10 triệu - 20 triệu',
  },
  {
    value: 'OVER_20M',
    salaryFrom: 20000001,
    salaryTo: 0,
    label: 'Trên 20 triệu',
  },
];

export const BlockDepartmentFilter = [
  {
    value: 'VP',
    label: 'Khối văn phòng',
  },
  {
    value: 'MK',
    label: 'Khối marketing & truyền thông',
  },
  {
    value: 'DVKH',
    label: 'Khối dịch vụ khách hàng',
  },
  {
    value: 'KD',
    label: 'Khối kinh doanh',
  },
  {
    value: 'KV',
    label: 'Khối kho vận',
  },
];
