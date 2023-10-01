"use client";
import React, { useState } from "react";

const Card = (p) => {
  const [statusCount, setStatusCount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const incrementStatusCount = () => {
    setStatusCount(statusCount + 1);
  };
  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  const isButtonDisabled = statusCount >= 5;

  const strikeThroughStyle = {
    textDecoration: statusCount >= 5 ? "line-through" : "none",
  };

  return (
    <div className="min-h gap-2 flex flex-col items-center justify-center bg-slate-900 md:py-10">
      <div className="outline-border border bg-none p-8 rounded-3xl shadow-md w-5/6">
        <h1
          className="text-2xl text-blue-300 text-left mb-4 text-3xl font-bold justify-center"
          style={strikeThroughStyle}>
          {p.ptitle}
        </h1>
        <h2 className="text-2xl text-slate-200 text-left mb-4 text-2xl justify-center">
          Status: ({statusCount}/5)
        </h2>
        <h2 className="text-2xl text-gray-200 text-left mb-4 text-xl justify-center">
          {p.descTitle}
        </h2>
        <h3 className="text-2xl text-slate-200 text-left mb-4 text-xl justify-center">
          {p.content}
        </h3>
        <div className="flex justify-center">
          <button
            type="submit"
            className={`bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-600 ${
              isButtonDisabled ? "cursor-not-allowed" : ""
            }`}
            onClick={() => {
              incrementStatusCount();
              openPopup();
            }}
            disabled={isButtonDisabled}>
            Select
          </button>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-black mb-2">
              Confirmation
            </h2>
            <p className="text-black">
              Successfully selected the {mentor.ptitle}
            </p>
            <button
              className="flex justify-center bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4"
              onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
