import { Button } from 'antd';
import { ZaloIcon } from 'assets/svg';
import React, { useEffect } from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from 'react-share';

interface Props {
  title?: string;
  description?: string;
}

export default function ShareComponent(props: Props): JSX.Element {
  const { title, description } = props;
  const shareUrl = window.location.href;

  const handleZaloShare = () => {
    const zaloShareUrl = `https://zalo.me/share/?url=${encodeURIComponent(
      shareUrl
    )}`;
    window.open(zaloShareUrl, '_blank');
  };
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = 'https://sp.zalo.me/plugins/sdk.js';
  //   script.async = false;
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  //   console.log('shareUrl:', shareUrl);

  return (
    <div>
      <div className="share-buttons">
        <FacebookShareButton url={shareUrl} title={title}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <TwitterShareButton url={shareUrl} title={title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>

        <LinkedinShareButton
          url={shareUrl}
          source={shareUrl}
          title={title}
          summary={description}
        >
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>

        <Button
          type="text"
          shape="circle"
          onClick={handleZaloShare}
          icon={
            <ZaloIcon
              style={{ height: '32px', width: '32px', borderRadius: '50%' }}
            />
          }
          // style={{ marginLeft: '8px' }}
        />
        {/* <div
          className="zalo-share-button item"
          data-oaid="2706971858922086998"
          data-share-type="1"
          data-layout="1"
          data-color="blue"
          data-customize="true"
          style={{
            // display: 'inline-flex',
            cursor: 'pointer',
          }}
        >
          <ZaloIcon
            style={{ height: '32px', width: '32px', borderRadius: '50%' }}
          />
        </div> */}
      </div>
    </div>
  );
}
