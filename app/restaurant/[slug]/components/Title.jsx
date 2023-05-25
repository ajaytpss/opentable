import React from "react";

const Title = (props: any) => {
  return (
    <div className="mt-4 border-b pb-6">
      <h1 className="font-bold text-2xl">{props.title}</h1>
    </div>
  );
};

export default Title;
