import React, { useRef, useEffect, FC } from 'react';

interface ShadowContentProps {
  htmlContent: string;
}

const ShadowContent: FC<ShadowContentProps> = ({ htmlContent }) => {
  const shadowRootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shadowRootRef.current) {
      if (!shadowRootRef.current.shadowRoot) {
        const shadowRoot = shadowRootRef.current.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = htmlContent;

        // Tạo thẻ style để giới hạn kích thước hình ảnh
        const styleElement = document.createElement('style');
        styleElement.textContent = `
          img {
            max-width: 100%;
            height: auto;
          }
        `;

        shadowRoot.appendChild(styleElement);
      } else {
        shadowRootRef.current.shadowRoot.innerHTML = htmlContent;

        // Kiểm tra và thêm CSS nếu cần thiết
        if (!shadowRootRef.current.shadowRoot.querySelector('style')) {
          const styleElement = document.createElement('style');
          styleElement.textContent = `
            img {
              max-width: 100%;
              height: auto;
            }
          `;
          shadowRootRef.current.shadowRoot.appendChild(styleElement);
        }
      }
    }
  }, [htmlContent]);

  return <div ref={shadowRootRef} />;
};

export default ShadowContent;
