import { notification } from 'antd';

type TypeNotification = 'success' | 'info' | 'warning' | 'error';

export const openNotificationWithIcon = (
  type: TypeNotification,
  message: string,
  description?: string,
  duration?: number
): void => {
  notification[type]({
    message,
    description,
    // pauseOnHover: true,
    // showProgress: true,
    duration,
  });
};
