"use client";

const Error = ({ error }) => {
  return (
    <div className="text-center h-[80vh] flex items-center justify-center">
      {error.message}
    </div>
  );
};

export default Error;
