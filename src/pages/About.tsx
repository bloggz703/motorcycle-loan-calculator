import React from 'react';
import { Shield, Calculator, Clock, Users } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function About() {
  return (
    <>
      <SEOHead
        title="About Us - MotorcycleLoanCalculator.net | Your Trusted Loan Calculator"
        description="Learn about MotorcycleLoanCalculator.net, your trusted companion for motorcycle loan calculations and financial planning. We provide accurate, unbiased loan estimates."
        canonicalUrl="https://motorcycleloancalculator.net/about"
      />
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About MotorcycleLoanCalculator.net</h1>
            <p className="text-xl text-gray-600">
              Your trusted companion for making informed motorcycle financing decisions
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              At MotorcycleLoanCalculator.net, we're passionate about helping motorcycle enthusiasts make 
              informed financial decisions. Our mission is to provide accurate, transparent, and easy-to-use 
              tools that empower you to understand the true cost of motorcycle financing.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Calculator className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Accurate Calculations</h3>
              <p className="text-gray-600">
                Our calculator uses up-to-date financial algorithms to provide precise estimates 
                of your motorcycle loan payments, including interest rates, taxes, and fees.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <Clock className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Updates</h3>
              <p className="text-gray-600">
                Get instant results as you adjust loan terms, helping you explore different 
                scenarios and find the perfect financing option for your budget.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Unbiased Information</h3>
              <p className="text-gray-600">
                We're not affiliated with any lenders or dealerships, ensuring you receive 
                objective calculations and information without sales pressure.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">User-Focused</h3>
              <p className="text-gray-600">
                Designed with riders in mind, our tools are easy to use and provide clear, 
                actionable insights for your motorcycle financing journey.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Free, no-registration-required calculator accessible 24/7</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Comprehensive calculations including sales tax and trade-in values</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Regular updates to reflect current market rates and trends</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Educational resources to help you understand motorcycle financing</span>
              </li>
            </ul>
          </div>

          {/* Our Commitment */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
            <p className="leading-relaxed">
              We're committed to maintaining the most accurate, user-friendly motorcycle loan calculator 
              available. Our team regularly updates our tools and information to ensure you have the 
              best resources for planning your motorcycle purchase. While we provide calculations and 
              educational content, we always recommend consulting with financial professionals for 
              personalized advice.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}