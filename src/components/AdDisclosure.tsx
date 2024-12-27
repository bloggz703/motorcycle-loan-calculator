import React from 'react';

export default function AdDisclosure() {
  return (
    <div className="text-sm text-gray-500 mt-4 p-4 bg-gray-50 rounded-lg">
      <p className="mb-2">Advertisement Disclosure: This website contains advertisements to support our free calculator service. 
      We carefully select advertising partners and ensure ads are relevant to our users.</p>
      
      <p>All calculations and information provided are for educational purposes only. 
      Please consult with financial professionals before making any decisions. Read our full 
      <a href="/disclaimer" className="text-blue-600 hover:underline ml-1">disclaimer</a> for more information.</p>
    </div>
  );
}