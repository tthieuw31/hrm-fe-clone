import { Result } from 'antd';
import {
  fetchAndStoreCategories,
  getCategoriesFromLocalStorage,
} from 'apis/categories/CategoriesServices';
import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PageError = (): React.ReactElement => {
  return (
    <Result
      status="error"
      title="Có lỗi xảy ra"
      subTitle="Xin lỗi, trang bạn đang tìm kiếm không tồn tại."
    />
  );
};

export default PageError;
