import React from 'react';

const Contact = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 px-4 py-16">
    <div className="max-w-xl w-full text-center">
      <h1 className="text-5xl font-extralight text-gray-800 dark:text-gray-200 mb-6">Contact Us</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        For all inquiries, please email us directly at:
      </p>
      <a
        href="mailto:turtlerobotics@gmail.com"
        className="text-2xl text-accent underline hover:text-accent/80 transition-colors duration-200"
      >
        turtlerobotics@gmail.com
      </a>
      <p className="mt-8 text-gray-500 dark:text-gray-400 text-sm">
        We look forward to hearing from you!
      </p>
    </div>
  </div>
);

export default Contact;
