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
import Whys from './components/home_resources/why';
import VideoPage from './components/home_resources/why/video';
import Startup from './components/community/startups';
import StartupDetails from './components/community/startups/startup-details';
import Brochure from './components/community/startups/startup-brochure';
import Impact from './components/admin-dashboard/impart';
import AdminDashboard from './components/admin-dashboard';
import Blogs from './components/admin-dashboard/blogs/blog';
import Consultations from './components/admin-dashboard/consultation';
import AdMediaMentions from './components/admin-dashboard/media-mention/media-mentions';
import AdNonProfit from './components/admin-dashboard/non-profit/non-profits';
import AdPayments from './components/admin-dashboard/payment';
import AdProject from './components/admin-dashboard/projects/projects';
import AdResources from './components/admin-dashboard/resources/resources';
import AddResources from './components/admin-dashboard/resources/add-resources';
import AdServices from './components/admin-dashboard/services/services';
import AdStartupFoundary from './components/admin-dashboard/startup-foundary/startup-foundary';
import AdTraining from './components/admin-dashboard/trainings/training';
import AdVolunteers from './components/admin-dashboard/volunteer/volunteers';
import AdWorkPlans from './components/admin-dashboard/workspace/work-plan';
import AddBlog from './components/admin-dashboard/blogs/add-blog';
import EditBlog from './components/admin-dashboard/blogs/edit-blog';
import SignIn from './components/auth/sign-in';
import SignUp from './components/auth/sign-up';
import AddEvent from './components/admin-dashboard/events/add-event';
import AdminEvents from './components/admin-dashboard/events/events';
import AddMentions from './components/admin-dashboard/media-mention/add-mentions';
import AddNonProfit from './components/admin-dashboard/non-profit/add-nonprofit';
import AddProject from './components/admin-dashboard/projects/add-project';
import AddServices from './components/admin-dashboard/services/add-services';
import AddStartupFoundary from './components/admin-dashboard/startup-foundary/add-startupfoundary';
import AddTraining from './components/admin-dashboard/trainings/add-training';
import AddWorkspacePlan from './components/admin-dashboard/workspace/add-workspaceplan';
import EditMentions from './components/admin-dashboard/media-mention/edit-mentions';

function RootComponent() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path={ROUTES.HOMEPAGE_ROUTE} element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/community" element={<Community />} />
        <Route path="/programs/packages-details/:id" element={<PackageDetails />} />
        <Route path="/programs/packages-details/:id/payment" element={<Payment />} />
        <Route path="/programs/startups" element={<Startup />} />
        <Route path="/programs/startups/details/:name" element={<StartupDetails />} />
        <Route path="/programs/startups/details/brochure" element={<Brochure />} />
        <Route path="/programs/project" element={<Project />} />
        <Route path="/programs/project-details" element={<ProjectDetails />} />
        <Route path="/programs/profits" element={<Profits />} />
        <Route path="/home_services" element={<Services />} />
        <Route path="/home_services/consultation" element={<Consultation />} />
        <Route path="/home_services/consultation/bookings" element={<Booking />} />
        <Route path="programs" element={<HomeServices />} />
        <Route path="/home_services/training-details" element={<HomeTrainings />} />
        <Route path="/home_resources/blog" element={<HomeResource />} />
        <Route path="/home_resources/blog-details" element={<Blog />} />
        <Route path="/home_resources/ebook" element={<Ebook />} />
        <Route path="/home_resources/faqs" element={<Faq />} />
        <Route path="/home_resources/contact-us" element={<ContactUs />} />
        <Route path="/home_resources/Why" element={<Whys />} />
        <Route path="/home_resources/Why/:id" element={<VideoPage />} />
        <Route path="/auth/sign-in" element={<SignIn />} />
        <Route path="/auth/sign-up" element={<SignUp />} />

        {/* //{ DASHBOARD ROUTES} // */}
        <Route path="/admin_dashboard" element={<AdminDashboard />}>
          <Route path="impact" element={<Impact />} />
          <Route path="blog" element={<Blogs />}>
            <Route path="add-blog" element={<AddBlog />} />
            <Route path="edit-blog" element={<EditBlog />} />
          </Route>
          <Route path="consultation" element={<Consultations />} />
          <Route path="consultation" element={<Consultations />} />
          <Route path="events" element={<AdminEvents />}>
            <Route path="add-events" element={<AddEvent />} />
          </Route>
          <Route path="media" element={<AdMediaMentions />}>
            <Route path="add-media" element={<AddMentions />} />
            <Route path="edit-media/:id" element={<EditMentions />} />
          </Route>
          <Route path="non-profit" element={<AdNonProfit />}>
            <Route path="add-non-profit" element={<AddNonProfit />} />
          </Route>
          <Route path="payments" element={<AdPayments />} />
          <Route path="projects" element={<AdProject />}>
            <Route path="add-projects" element={<AddProject />} />
          </Route>
          <Route path="resources" element={<AdResources />}>
            <Route path="add-resources" element={<AddResources />} />
          </Route>
          <Route path="services" element={<AdServices />}>
            <Route path="add-services" element={<AddServices />} />
          </Route>
          <Route path="startup" element={<AdStartupFoundary />}>
            <Route path="add-startup" element={<AddStartupFoundary />} />
          </Route>
          <Route path="training" element={<AdTraining />}>
            <Route path="add-training" element={<AddTraining />} />
          </Route>
          <Route path="volunteers" element={<AdVolunteers />} />
          <Route path="workspaces" element={<AdWorkPlans />}>
            <Route path="add-workspaces" element={<AddWorkspacePlan />} />
          </Route>
        </Route>
        {/* //{ DASHBOARD ROUTES} // */}

      </Routes>
    </Router>
  );
}

export default RootComponent;
