import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const BreadCrumb = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const pathNameMap = {
    '/': 'Trang chủ',
    '/jobs': 'Việc làm',
    '/jobs/detail/:id': 'Chi tiết công việc',
    '/jobs/apply/:jobID': 'Ứng tuyển',
    '/recruitment-process': 'Quy trình tuyển dụng',

    '/about': 'Giới thiệu',
    '/about/aboutEco': 'Về ECO',
    '/about/aboutEplus': 'Về Eplus',
    '/about/remuneration-policy': 'Chính sách đãi ngộ',

    '/apply-result': 'Tra cứu kết quả ứng tuyển',

    '/blogs-news': 'Nhịp sống',
    '/blogs-news/:id': 'Chi tiết bài viết',

    '/contact': 'Liên hệ',
  };

  const getPathName = (path: string): string => {
    const dynamicRoutes = Object.keys(pathNameMap);
    for (const route of dynamicRoutes) {
      const routeRegex = new RegExp(`^${route.replace(/:[^\s/]+/g, '[^/]+')}$`);
      if (routeRegex.test(path)) {
        return pathNameMap[route as keyof typeof pathNameMap];
      }
    }
    return path;
  };
  const handleReload = (path: string) => {
    if (location.pathname === path) {
      if (path === '/jobs') {
        navigate('/jobs');
        window.location.reload();
      } else {
        window.location.reload();
      }
    } else {
      window.location.href = path;
    }
  };
  const breadCrumbView = () => {
    const { pathname } = location;
    const pathnames = pathname.split('/').filter((x) => x);
    const breadcrumbItems = [
      {
        title: (
          <Link to="/">
            <HomeOutlined />
          </Link>
        ),
      },
    ];

    pathnames.forEach((name, index) => {
      const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
      const displayName = getPathName(routeTo);
      const isJobPage = routeTo.endsWith('/jobs'); // HR muốn case đặc biệt khi ở trang jobs
      const isLast = index === pathnames.length - 1;
      breadcrumbItems.push({
        title: isLast ? (
          <span
            onClick={() => (isJobPage ? handleReload(routeTo) : undefined)}
            style={{
              cursor: isJobPage ? 'pointer' : 'default',
            }}
          >
            {displayName}
          </span>
        ) : (
          <Link to={routeTo}>{displayName}</Link>
        ),
      });
    });

    return (
      <div className="breadcrumbs px-3 sm:px-0">
        <Breadcrumb items={breadcrumbItems} />
      </div>
    );
  };
  return <>{breadCrumbView()}</>;
};

export default BreadCrumb;
