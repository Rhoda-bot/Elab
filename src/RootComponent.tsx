/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ROUTES from './resources/routes-constants';
import './styles/main.scss';
import 'bootstrap/dist/css/bootstrap.css';
import About from './components/about';
import Programs from './components/program';
import Community from './components/community';
import PackageDetails from './components/community/package-details';
import Payment from './components/community/payment';
import Startups from './components/community/startups';
import StartupDetails from './components/community/startup-details';
import Brochure from './components/community/startup-brochure';
import Project from './components/community/projects/project';
import ProjectDetails from './components/community/projects/project-details';
import Profits from './components/community/profits';
import Services from './components/services';
import Consultation from './components/consultation';
import Booking from './components/consultation/bookings';
import HomeServices from './components/home_services';
import HomeTrainings from './components/home_services/training';
import HomeResource from './components/home_resources';
import Blog from './components/home_resources/blog';
import Ebook from './components/home_resources/ebook';
import Faq from './components/home_resources/faq';
import ContactUs from './components/home_resources/contact-us';

function RootComponent() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path={ROUTES.HOMEPAGE_ROUTE} element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/community" element={<Community />} />
        <Route path="/community/packages-details/:id" element={<PackageDetails />} />
        <Route path="/community/packages-details/:id/payment" element={<Payment />} />
        <Route path="/community/startups" element={<Startups />} />
        <Route path="/community/startups/details/:name" element={<StartupDetails />} />
        <Route path="/community/startups/details/brochure" element={<Brochure />} />
        <Route path="/community/project" element={<Project />} />
        <Route path="/community/project-details" element={<ProjectDetails />} />
        <Route path="/community/profits" element={<Profits />} />
        <Route path="/home_services/digital-services" element={<Services />} />
        <Route path="/home_services/consultation" element={<Consultation />} />
        <Route path="/home_services/consultation/bookings" element={<Booking />} />
        <Route path="/home_services/training" element={<HomeServices />} />
        <Route path="/home_services/training-details" element={<HomeTrainings />} />
        <Route path="/home_resources/blog" element={<HomeResource />} />
        <Route path="/home_resources/blog-details" element={<Blog />} />
        <Route path="/home_resources/ebook" element={<Ebook />} />
        <Route path="/home_resources/faqs" element={<Faq />} />
        <Route path="/home_resources/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default RootComponent;
