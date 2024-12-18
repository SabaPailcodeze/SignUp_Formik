import React from "react";
import FreeTrial from "../../Atoms/FreeTrial/FreeTrial";
import Form from "../../Atoms/Form/FormCont";

const Right = () => {
  return (
    <div className=" flex flex-col flex-1  gap-6 ">
      <FreeTrial />
      <Form />
    </div>
  );
};

export default Right;
