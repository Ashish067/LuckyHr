export const navData = [
  {
    id: 1,
    navHeading: "Home",
    link: "/",
    hasSubs: false,
    lvlTwo: [],
  },
  {
    id: 2,
    navHeading: "About Us",
    link: "",
    hasSubs: true,
    lvlTwo: [
      {
        subNavHeading: "About Lucky HR",
        link: "/AboutUs/AboutLuckyHR",
      },
      {
        subNavHeading: "Message From Chairman",
        link: "/AboutUs/MessageFromChairman",
      },
      {
        subNavHeading: "Our Team",
        link: "/AboutUs/OurTeam",
      },
      {
        subNavHeading: "Company Documents",
        link: "",
        hasMoreSubs: true,
        lvlThree: [
          {
            id: 1,
            lvl3Heading: "Company Certificates",
            link: "/AboutUs/CompanyDocuments/CompanyCertificate",
          },
          {
            id: 2,
            lvl3Heading: "Company Brochure",
            link: "/AboutUs/CompanyDocuments/CompanyBrochure",
          },
          {
            id: 3,
            lvl3Heading: "Demand Certificates",
            link: "/AboutUs/CompanyDocuments/DemandCertificates",
          },
        ],
      },
      {
        subNavHeading: "Our Associates",
        link: "/AboutUs/OurAssociates",
      },
      {
        subNavHeading: "Galleries",
        link: "/AboutUs/Galleries",
      },
    ],
  },
  {
    id: 3,
    navHeading: "Employer Zone",
    link: "",
    hasSubs: true,
    lvlTwo: [
      {
        subNavHeading: "Industries We Serve",
        link: "/EmployerZone/IndustriesWeServe",
      },
      {
        subNavHeading: "Our Coverage",
        link: "/EmployersZone/OurCoverage",
      },
      {
        subNavHeading: "Our Valued Cliets",
        link: "/EmployerZone/OurValuedClients",
      },
      {
        subNavHeading: "Our Recruitment Process",
        link: "/EmployerZone/OurRecruitmentProcess",
      },
      {
        subNavHeading: "Find Me The Candidates",
        link: "/EmployerZone/FindMeTheCandidates",
      },
      {
        subNavHeading: "Register As An Employee",
        link: "/EmployerZone/RegistesAsAnEmployee",
      },
      {
        subNavHeading: "Employer FAQ",
        link: "/EmployerZone/EmployerFAQ",
      },
    ],
  },
  {
    id: 4,
    navHeading: "Job Seekers Zone",
    link: "",
    hasSubs: true,
    lvlTwo: [
      {
        subNavHeading: "Live Jobs",
        link: "/JobSeekersZone/LiveJobs",
      },
      {
        subNavHeading: "Submit Your CV",
        link: "/JobSeekersZone/SubmitYourCV",
      },
      {
        subNavHeading: "Register As A Job-Seeker",
        link: "/JobSeekersZone/RegisterAsAJobSeeker",
      },
      {
        subNavHeading: "Job Seeker FAQ",
        link: "/JobSeekersZone/JobSeekerFAQ",
      },
    ],
  },
  {
    id: 5,
    navHeading: "Ads",
    link: "/Ads",
    hasSubs: false,
    lvlTwo: [],
  },
  {
    id: 6,
    navHeading: "Contact Us",
    link: "/ContactUs",
    hasSubs: false,
    lvlTwo: [],
  },
];
