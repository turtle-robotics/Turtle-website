import React from "react";
import { Link } from "react-router-dom";
import ButtonLink from "../components/ButtonLink";

const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
    <h1 className="text-7xl font-bold text-yellow-500 mb-6">404</h1>
    <h2 className="text-3xl font-light text-gray-800 dark:text-gray-200 mb-4">
      Page Not Found
    </h2>
    <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
      Sorry, the page you are looking for does not exist.
    </p>
    <ButtonLink to="/" style="primary" sizeVariant="default">
      Go Home
    </ButtonLink>
  </div>
);

export default NotFound;
