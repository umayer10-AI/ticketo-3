'use client'
import React from 'react';
import UpdateProfileModal from './UpdateProfileModal';

const FormSubmittedShowing = () => {
    return (
        <div>
            <div className="flex items-center mt-30 justify-center min-h-[300px]">
  <div className="bg-slate-900 shadow-lg rounded-2xl p-8 max-w-md w-full text-center border">
    
    <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-green-100">
      <svg
        className="w-8 h-8 text-green-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
    </div>

    <h2 className="text-2xl font-bold mt-4">
      Application Already Submitted
    </h2>

    <p className="text-gray-400 mt-2">
      You have already submitted this form. Our team will review your
      application and get back to you if needed.
    </p>

    <div className='mt-6 flex justify-center gap-3'>
        <button
      onClick={() => router.push("/")}
      className="bg-linear-to-r from-cyan-500 to-blue-600 px-5 py-2.5 font-medium rounded-xl hover:bg-blue-700 transition"
    >
      Back to Home
    </button>
    <UpdateProfileModal></UpdateProfileModal>
    </div>
  </div>
</div>
        </div>
    );
};

export default FormSubmittedShowing;