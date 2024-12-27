import React from 'react';

export default function Cookies() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
        
        <div className="prose max-w-none bg-white p-8 rounded-xl shadow-md">
          <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">What Are Cookies</h2>
            <p className="text-gray-600">
              Cookies are small text files stored on your device when you visit our website. 
              They help us provide and improve our services by remembering your preferences 
              and analyzing how you use our site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">How We Use Cookies</h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Essential cookies: Required for basic site functionality</li>
              <li>Analytical cookies: Help us understand how visitors use our site</li>
              <li>Preference cookies: Remember your settings and choices</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Managing Cookies</h2>
            <p className="text-gray-600">
              You can control cookies through your browser settings. However, disabling certain 
              cookies may limit your ability to use some features of our site.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}