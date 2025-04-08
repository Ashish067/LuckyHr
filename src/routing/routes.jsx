import { createBrowserRouter } from "react-router-dom";
import ContactUs from "../pages/contactUs/ContactUs";
import Layout from "../components/Layout";
import MessageFromChairman from "../pages/aboutUs/MessageFromChairman";
import CompanyCertificates from "../pages/aboutUs/companyDocuments/CompanyCertificates";
import CompanyBrochure from "../pages/aboutUs/companyDocuments/CompanyBrochure";
import DemandCertificates from "../pages/aboutUs/companyDocuments/DemandCertificates";
import Ads from "../pages/ads/Ads";
import Home from "../pages/home/Home";
import OurRecruitmentProcess from "../pages/EmployerZone/OurRecruitmentProcess";
import AboutLuckyHr from "../pages/aboutUs/AboutLuckyHr";
import OurTeam from "../pages/aboutUs/OurTeam";
import OurAssociates from "../pages/aboutUs/OurAssociates";
import Galleries from "../pages/aboutUs/Galleries";
import OurCoverage from "../pages/employerZone/OurCoverage";
import IndustriesWeServe from "../pages/employerZone/IndustriesWeServe";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "AboutUs/AboutLuckyHr", element: <AboutLuckyHr /> },
      {
        path: "AboutUs/MessageFromChairman",
        element: <MessageFromChairman />,
      },
      { path: "AboutUs/OurTeam", element: <OurTeam /> },
      {
        path: "AboutUs/CompanyDocuments/CompanyCertificate",
        element: <CompanyCertificates />,
      },
      {
        path: "AboutUs/CompanyDocuments/CompanyBrochure",
        element: <CompanyBrochure />,
      },
      {
        path: "AboutUs/CompanyDocuments/DemandCertificates",
        element: <DemandCertificates />,
      },
      {
        path: "AboutUs/OurAssociates",
        element: <OurAssociates />,
      },
      {
        path: "AboutUs/Galleries",
        element: <Galleries />,
      },
      {
        path: "/EmployerZone/OurRecruitmentProcess",
        element: <OurRecruitmentProcess />,
      },
      { path: "/ContactUs", element: <ContactUs /> },
      { path: "/Ads", element: <Ads /> },
      {
        path: "/EmployersZone/OurCoverage",
        element: <OurCoverage />,
      },
      {
        path: "/EmployersZone/IndustriesWeServe",
        element: <IndustriesWeServe />,
      },
    ],
  },
]);

export default router;
