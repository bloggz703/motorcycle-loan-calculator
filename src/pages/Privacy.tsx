import React from 'react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose max-w-none bg-white p-8 rounded-xl shadow-md">
          <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Information We Collect</h2>
            <p className="text-gray-600">
              We collect information that you voluntarily provide when using our calculator or 
              contacting us, including:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-600">
              <li>Loan amount preferences</li>
              <li>Credit score range</li>
              <li>Contact information (when provided)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600">
              We use the collected information to:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-600">
              <li>Provide accurate loan calculations</li>
              <li>Improve our calculator functionality</li>
              <li>Respond to your inquiries</li>
              <li>Send relevant updates (with your consent)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Security</h2>
            <p className="text-gray-600">
              We implement appropriate security measures to protect your information. However, 
              no internet transmission is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you have questions about this Privacy Policy, please contact us through our contact form.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}