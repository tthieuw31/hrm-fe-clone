import { Button, Modal, Result } from 'antd';
import React from 'react';

export type TypeNotification = 'success' | 'info' | 'warning' | 'error';

export interface Props {
  type: TypeNotification;
  message: string;
  description?: string;
  open: boolean;
  onClose: () => void;
}

const NotificationModal: React.FC<Props> = ({
  type,
  message,
  description,
  open,
  onClose,
}) => {
  return (
    <Modal open={open} onCancel={onClose} footer={false}>
      <Result status={type} title={message} subTitle={description} />
    </Modal>
  );
};

export default NotificationModal;
