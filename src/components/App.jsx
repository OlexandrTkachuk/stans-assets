import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import ScrollToTop from 'utils/scrollToTop';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';

// pages
const HomePage = lazy(() => import('../pages/Home'));
const AboutUsPage = lazy(() => import('../pages/AboutUs'));
const ArticlePage = lazy(() => import('../pages/Article'));
const AuthorPage = lazy(() => import('../pages/Author'));
const BlogPage = lazy(() => import('../pages/Blog'));
const ContactsPage = lazy(() => import('../pages/Contacts'));
const JoinTheTeamPage = lazy(() => import('../pages/JoinTheTeam'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));
const PortfolioPage = lazy(() => import('../pages/Portfolio'));
const ProductsPage = lazy(() => import('../pages/Products'));
const ServicesPage = lazy(() => import('../pages/Services'));
const TeamPage = lazy(() => import('../pages/Team'));
const TechnologiesPage = lazy(() => import('../pages/Technologies'));

// services
const MobileDev = lazy(() => import('./ServicesPage/MobileDev/MobileDev'));
const GameDev = lazy(() => import('./ServicesPage/GameDev/GameDev'));
const VrDev = lazy(() => import('./ServicesPage/VrDev/VrDev'));
const DedicatedDev = lazy(() => import('./ServicesPage/DedicatedDev/DedicatedDev'));
const SDKDev = lazy(() => import('./ServicesPage/SDKDev/SDKDev'));
const SDKModeling = lazy(() => import('./ServicesPage/SDKModeling/SDKModeling'));
const ArDev = lazy(() => import('./ServicesPage/ArDev/ArDev'));

// technologies
const AndroidPage = lazy(() => import('./TechnologiesPage/Android/Android'));
const IOSPage = lazy(() => import('./TechnologiesPage/IOS/IOS'));
const UnityPage = lazy(() => import('./TechnologiesPage/Unity/Unity'));

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Navigation />

      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/services" element={<ServicesPage />}>
            <Route path="mobileDev" element={<MobileDev />} />
            <Route path="gameDev" element={<GameDev />} />
            <Route path="vrDev" element={<VrDev />} />
            <Route path="dedicatedDev" element={<DedicatedDev />} />
            <Route path="sdkDev" element={<SDKDev />} />
            <Route path="3dModeling" element={<SDKModeling />} />
            <Route path="appDev" element={<ArDev />} />
          </Route>

          <Route path="/technologies" element={<TechnologiesPage />}>
            <Route path="android" element={<AndroidPage />} />
            <Route path="ios" element={<IOSPage />} />
            <Route path="unity" element={<UnityPage />} />
          </Route>

          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/author" element={<AuthorPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/join" element={<JoinTheTeamPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
