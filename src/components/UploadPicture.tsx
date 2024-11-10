import React, { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Image, Upload } from 'antd';
import type { UploadFile, UploadProps } from 'antd';
import { RcFile } from 'antd/es/upload';

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

interface UploadPictureProps extends UploadProps {
  initialUrl?: string;
}

const UploadPicture: React.FC<UploadPictureProps> = ({
  fileList: initialFileList = [],
  onChange,
  initialUrl,
}) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>(
    Array.isArray(initialFileList) ? initialFileList : []
  );

  useEffect(() => {
    if (initialUrl) {
      setFileList([
        {
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url: initialUrl,
        },
      ]);
    }
  }, [initialUrl]);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(Array.isArray(newFileList) ? newFileList : []);
    if (onChange) {
      onChange({ file: newFileList[0], fileList: newFileList });
    }
  };

  const beforeUpload: UploadProps['beforeUpload'] = () => {
    return false;
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <div className="flex justify-center">
      <Upload
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        beforeUpload={beforeUpload}
        accept=".png, .jpg"
      >
        {fileList.length < 1 ? uploadButton : null}
      </Upload>
      <Image
        preview={{
          visible: previewOpen,
          onVisibleChange: (visible) => setPreviewOpen(visible),
        }}
        src={previewImage}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default UploadPicture;
