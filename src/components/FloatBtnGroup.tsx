import { MessageOutlined, PhoneOutlined } from '@ant-design/icons';
import { Button, FloatButton, Popover, Tooltip, Typography } from 'antd';
import { ChatBoxIcon, PhoneCallIcon } from 'assets/svg';
import React from 'react';

const { Text } = Typography;

const FloatBtnGroup: React.FC = () => {
  const buttonStyle = {
    width: '65px',
    height: '65px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.4)',
  };

  const iconStyle = {
    height: '30px',
    width: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  // const showZaloChat = () => {
  //   if (!window.zaloSDKReady) {
  //     console.warn('Zalo SDK is not ready yet.');
  //     return;
  //   }

  //   const zaloChatWidget = document.querySelector('.zalo-chat-widget');

  //   if (zaloChatWidget) {
  //     console.log('Zalo button clicked');

  //     if ((zaloChatWidget as HTMLElement).style.display !== 'block') {
  //       (zaloChatWidget as HTMLElement).style.display = 'block';
  //       zaloChatWidget.dispatchEvent(new Event('initializeZaloChat'));
  //     }
  //   } else {
  //     console.warn('Zalo chat plugin chưa được tích hợp.');
  //   }
  // };

  return (
    <div className="custom-float-btn-group">
      <FloatButton.Group
        shape="circle"
        style={{
          transform: 'translate(-25%, -45%)',
          // transform: 'translateX(-65%)',
          position: 'fixed',
        }}
      >
        <Popover
          color="#fff"
          trigger="click"
          arrow={false}
          placement="left"
          content={<Text className="font-semibold">028 2200 5968</Text>}
        >
          <Button
            shape="circle"
            style={{ ...buttonStyle, marginBottom: '15px' }}
            icon={
              <PhoneCallIcon
                style={{
                  height: '53px',
                  width: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
            }
          />
        </Popover>

        <Button
          shape="circle"
          style={buttonStyle}
          className="custom-zalo-icon"
          // onClick={showZaloChat}
          // icon={
          //   <ChatBoxIcon
          //     style={{
          //       height: '28px',
          //       width: '28px',
          //       display: 'flex',
          //       alignItems: 'center',
          //       justifyContent: 'center',
          //     }}
          //   />
          // }
        />

        {/* <FloatButton
          style={buttonStyle}
          icon={<MessageOutlined style={{ color: '#00249C' }} />}
        /> */}
        {/* <FloatButton.BackTop style={buttonStyle} /> */}
      </FloatButton.Group>
    </div>
  );
};

export default FloatBtnGroup;
