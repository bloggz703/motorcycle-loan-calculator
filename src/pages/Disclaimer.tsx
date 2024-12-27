import React from 'react';

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Disclaimer</h1>
        
        <div className="prose max-w-none bg-white p-8 rounded-xl shadow-md">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Not Financial Advice</h2>
            <p className="text-gray-600">
              The calculations and information provided by our motorcycle loan calculator are 
              for educational purposes only. They should not be considered financial advice. 
              Always consult with qualified financial professionals before making any financial decisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Accuracy of Information</h2>
            <p className="text-gray-600">
              While we strive to provide accurate calculations, actual loan terms, rates, and 
              payments may vary based on multiple factors including lender criteria, market 
              conditions, and your personal financial situation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">No Lender Affiliation</h2>
            <p className="text-gray-600">
              We are not affiliated with any lenders, financial institutions, or motorcycle 
              dealerships. We do not provide loans or facilitate loan applications.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Limitation of Liability</h2>
            <p className="text-gray-600">
              We are not responsible for any decisions made based on the information or 
              calculations provided by our tool. Users should verify all information independently 
              before making financial commitments.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}