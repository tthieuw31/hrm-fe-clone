import { DownOutlined } from '@ant-design/icons';

const headerMenu = [
  {
    key: '/introduce',
    label: 'Giới thiệu',
    // icon: typeof DownOutlined,
    children: [
      {
        key: '/about/aboutEco',
        label: 'Về ECO',
        // screenId: 1,
      },
      {
        key: '/about/aboutEplus',
        label: 'Về EPLUS',
        // screenId: 2,
      },
      {
        key: '/about/remuneration-policy',
        label: 'Chính sách đãi ngộ',
        // screenId: 2,
      },
    ],
  },
  {
    key: '/recruitment',
    label: 'Tuyển dụng',
    children: [
      {
        key: '/jobs',
        label: 'Việc làm',
        // path: '/recruitment/jobs',
      },
      {
        key: '/recruitment-process',
        label: 'Quy trình tuyển dụng',
      },
    ],
  },
  {
    key: '/apply-result',
    label: 'Tra cứu kết quả ứng tuyển',
  },
  {
    key: '/blogs-news',
    label: 'Nhịp sống',
  },
  {
    key: '/contact',
    label: 'Liên hệ',
  },
];

export default headerMenu;
