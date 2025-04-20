import React from "react";
import { jobseekerfaqs } from "../../components/data/faqs";
import FaqLayout from "../../layouts/FaqLayout";

const JobSeekerFAQ = () => {
  return <FaqLayout data={jobseekerfaqs} />;
};

export default JobSeekerFAQ;
