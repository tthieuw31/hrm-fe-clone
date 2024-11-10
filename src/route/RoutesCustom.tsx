/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { Spin } from 'antd';
import RemunerationPolicyPage from 'pages/introduce/RemunerationPolicyPage';
import ResultSearchPage from 'pages/applyResult/ResultSearchPage';
import RecruitProcessPage from 'pages/job/RecruitProcessPage';
import ContactPage from 'pages/contact/ContactPage';
import BlogListPage from 'pages/blog/BlogListPage';
import BlogDetailPage from 'pages/blog/BlogDetailPage';
import useScrollToTop from 'hooks/useScrollToTop';
import ProfileForm from 'pages/form/ProfileForm';
import PageError from 'components/PageError';
const HomePage = lazy(() => import('pages/home/HomePage'));
const JobListPage = lazy(() => import('pages/job/JobListPage'));
const JobDetailPage = lazy(() => import('pages/job/JobDetailPage'));
const CandidateApplyPage = lazy(() => import('pages/apply/CandidateApplyPage'));
const AboutEcoPage = lazy(() => import('pages/introduce/AboutEcoPage'));
const AboutEplusPage = lazy(() => import('pages/introduce/AboutEplusPage'));

const RoutesCustom = (): JSX.Element => {
  useScrollToTop();

  return (
    <Suspense fallback={<Spin fullscreen />}>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/jobs" element={<JobListPage />} />
        <Route path="/jobs/detail/:id" element={<JobDetailPage />} />
        <Route path="/jobs/apply/:jobID" element={<CandidateApplyPage />} />
        <Route path="/recruitment-process" element={<RecruitProcessPage />} />

        <Route path="/apply-result" element={<ResultSearchPage />} />

        <Route path="/about/aboutEco" element={<AboutEcoPage />} />
        <Route path="/about/aboutEplus" element={<AboutEplusPage />} />
        <Route
          path="/about/remuneration-policy"
          element={<RemunerationPolicyPage />}
        />

        <Route path="/blogs-news" element={<BlogListPage />} />
        <Route path="/blogs-news/:url" element={<BlogDetailPage />} />

        <Route path="/contact" element={<ContactPage />} />

        <Route path="/update-candidate-profile" element={<ProfileForm />} />

        <Route path="*" element={<Navigate to="/" />} />

        <Route path="/404" element={<PageError />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesCustom;
