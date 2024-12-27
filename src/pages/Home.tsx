import React from 'react';
import Calculator from '../components/Calculator';
import FAQ from '../components/FAQ';
import AdDisclosure from '../components/AdDisclosure';
import AdPlaceholder from '../components/AdPlaceholder';
import SEOHead from '../components/SEOHead';
import { Bike, DollarSign, Calculator as CalcIcon, Shield } from 'lucide-react';

export default function Home() {
  return (
    <>
      <SEOHead
        title="Motorcycle Loan Calculator - Free Payment Estimator | MotorcycleLoanCalculator.net"
        description="Calculate your motorcycle loan payments instantly with our free calculator. Get accurate estimates for monthly payments, interest rates, and total costs. Make informed decisions about your motorcycle financing."
        canonicalUrl="https://motorcycleloancalculator.net"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Motorcycle Loan Calculator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plan your motorcycle purchase with confidence. Get instant estimates for monthly payments, 
              interest costs, and total loan amounts.
            </p>
          </div>

          {/* Top Ad Placement */}
          <AdPlaceholder className="mb-12" />

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <DollarSign className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Accurate Calculations</h3>
              <p className="text-gray-600">Get precise estimates based on current market rates and your credit profile.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <CalcIcon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p className="text-gray-600">Simple interface with instant results. Adjust values to see different scenarios.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Registration Required</h3>
              <p className="text-gray-600">Free to use with no sign-up needed. Your privacy is our priority.</p>
            </div>
          </div>

          {/* Calculator Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Calculate Your Motorcycle Loan
            </h2>
            <Calculator />
          </section>

          {/* Middle Ad Placement */}
          <AdPlaceholder className="mb-16" />

          {/* How to Use Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              How to Use Our Motorcycle Loan Calculator
            </h2>
            <div className="prose max-w-none text-gray-600">
              <ol className="list-decimal pl-6 space-y-4">
                <li>Enter the motorcycle price (base price before taxes)</li>
                <li>Input your local sales tax rate to calculate total purchase price</li>
                <li>Add any trade-in value to reduce your loan amount</li>
                <li>Select your desired loan term (12-60 months)</li>
                <li>Choose your credit score range to get appropriate interest rates</li>
                <li>Adjust the interest rate if you have a specific rate in mind</li>
              </ol>
              <p className="mt-4">
                The calculator will instantly show your estimated monthly payments, total interest costs, 
                and total amount repayable. Adjust any values to see how they affect your loan terms.
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <FAQ />

          {/* Bottom Ad Placement */}
          <AdPlaceholder className="mb-12" />

          {/* Ad Disclosure */}
          <AdDisclosure />
        </div>
      </div>
    </>
  );
}