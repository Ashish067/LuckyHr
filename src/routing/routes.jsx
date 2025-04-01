import { createBrowserRouter } from "react-router-dom";
import ContactUs from "../pages/contact/ContactUs";
import Layout from "../components/Layout";
import Navbar from "../components/header/Navbar";
import AboutLuckyHr from "../pages/AboutLuckyHr/AboutLuckyHr";
import MessageFromChairman from "../pages/messagefromchairman/MessageFromChairman";
import OurTeam from "../pages/ourteam/OurTeam";
import CompanyCertificates from "../pages/AboutLuckyHr/CompanyCertificates";
import CompanyBrochure from "../pages/AboutLuckyHr/CompanyBrochure";
import DemandCertificates from "../pages/AboutLuckyHr/DemandCertificates";
import OurAssociates from "../pages/ourassociates/OurAssociates";
import Gallery from "../pages/gallery/Gallery";
import Ads from "../pages/ads/Ads";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: "", element: <Navbar /> },
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
        element: <Gallery />,
      },
    ],
  },
  { path: "/ContactUs", element: <ContactUs /> },
  { path: "/Ads", element: <Ads /> },
]);

export default router;
