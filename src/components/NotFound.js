import React from "react";

const NotFound = () => {
  return (
    <div className="w-full flex items-center justify-center px-8 min-h-screen">
      <div className="w-full flex flex-col items-center -mt-28">
        <div className="text-6xl pb-16">🤨</div>
        <h2 className="text-3xl text-gray-600">
          You are not supposed to be here
        </h2>
      </div>
    </div>
  );
};

export default NotFound;
