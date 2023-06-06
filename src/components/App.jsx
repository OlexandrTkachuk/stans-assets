import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';

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

const App = () => {
  return (
    <div>
      <Navigation />

      <Suspense fallback="Loading...">
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

          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/author" element={<AuthorPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/join" element={<JoinTheTeamPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/technologies" element={<TechnologiesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
