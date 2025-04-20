import React from "react";
import FaqLayout from "../../layouts/FaqLayout";
import { employerfaqs } from "../../components/data/faqs";
const EmployerFaq = () => {
  return (
    <>
      <FaqLayout data={employerfaqs} />
    </>
  );
};

export default EmployerFaq;
