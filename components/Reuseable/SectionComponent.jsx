import React from "react";

const SectionComponent = ({ children, id }) => {
  return (
    <section id={id} className="mx-auto py-[128px] max-w-[1300px]">
      {children}
    </section>
  );
};

export default SectionComponent;
