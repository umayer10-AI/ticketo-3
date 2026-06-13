'use client'
import Link from 'next/link';
import React from 'react';

const PremiumButton = () => {

    const a = async () => {
        console.log("hello premium")
    }

    return (
        <button onClick={a}
            className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-700 px-6 py-3 font-semibold text-white transition hover:scale-105"
          >
            Create Event
          </button>
        )
};

export default PremiumButton;