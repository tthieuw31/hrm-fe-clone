import { CopyrightOutlined } from '@ant-design/icons';
import { Divider, Layout, Typography } from 'antd';
import {
  FaceBookOutline,
  LinkedInOutline,
  TiktokOutline,
  ZaloOutline,
} from 'assets/svg';
import React, { useMemo } from 'react';

const { Text, Link } = Typography;

const BlockFooter = (): React.ReactElement => {
  const { Footer } = Layout;

  const socialLinks = useMemo(
    () => [
      {
        href: 'https://www.facebook.com/TuyenDungEcoPharmaEplus',
        icon: (
          <FaceBookOutline
            className="md:mr-7"
            style={{ width: '62px', height: '62px' }}
          />
        ),
      },
      {
        href: 'https://www.linkedin.com/in/eco-pharma-eplus-06a6b9287/',
        icon: (
          <LinkedInOutline
            className="md:mr-7"
            style={{ width: '62px', height: '62px' }}
          />
        ),
      },
      {
        href: 'https://www.tiktok.com/@tuyendungecopharma',
        icon: (
          <TiktokOutline
            className="md:mr-7"
            style={{ width: '62px', height: '62px' }}
          />
        ),
      },
      {
        href: 'https://zalo.me/2706971858922086998',
        icon: <ZaloOutline style={{ width: '62px', height: '62px' }} />,
      },
    ],
    []
  );

  return (
    <Footer style={{ background: '#00249C' }}>
      <div className="footer-content">
        <div className="md:flex md:flex-row justify-center text-center w-full items-center">
          <p className="text-footer">KẾT NỐI VỚI CHÚNG TÔI</p>
          <div className="flex justify-between md:justify-center">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="p-2 md:p-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
        <hr className="custom-divider" />

        {/* <Divider style={{ color: '#fff', height: '2px' }} /> */}

        <div className="flex flex-row justify-center items-center">
          <CopyrightOutlined
            style={{
              color: '#FFF',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '19px',
              marginRight: '5px',
            }}
          />
          <p
            style={{
              color: '#FFF',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '19px',
            }}
          >
            2024
          </p>
        </div>
      </div>
    </Footer>
  );
};

export default React.memo(BlockFooter);
