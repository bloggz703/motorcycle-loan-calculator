import React, { useState, useEffect } from 'react';
import { DollarSign, Calendar, PieChart, Calculator as CalcIcon, Percent, Bike, Receipt } from 'lucide-react';

interface Rate {
  creditScore: 'Excellent' | 'Good' | 'Fair' | 'Poor';
  rate: number;
}

const rates: Rate[] = [
  { creditScore: 'Excellent', rate: 16.9 },
  { creditScore: 'Good', rate: 19.9 },
  { creditScore: 'Fair', rate: 24.9 },
  { creditScore: 'Poor', rate: 29.9 },
];

export default function Calculator() {
  const [loanAmount, setLoanAmount] = useState(18000);
  const [loanTerm, setLoanTerm] = useState(36);
  const [creditScore, setCreditScore] = useState<Rate['creditScore']>('Excellent');
  const [interestRate, setInterestRate] = useState(16.9);
  const [salesTax, setSalesTax] = useState(7);
  const [tradeInValue, setTradeInValue] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [totalRepayment, setTotalRepayment] = useState(0);

  useEffect(() => {
    const taxAmount = (loanAmount * salesTax) / 100;
    const totalLoanAmount = loanAmount + taxAmount - tradeInValue;
    const monthlyRate = interestRate / 100 / 12;
    const monthlyPayment = (totalLoanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) / 
                          (Math.pow(1 + monthlyRate, loanTerm) - 1);
    const totalRepayment = monthlyPayment * loanTerm;
    
    setMonthlyPayment(monthlyPayment);
    setTotalCost(totalRepayment - totalLoanAmount);
    setTotalRepayment(totalRepayment);
  }, [loanAmount, loanTerm, interestRate, salesTax, tradeInValue]);

  const handleCreditScoreChange = (score: Rate['creditScore']) => {
    setCreditScore(score);
    const newRate = rates.find(r => r.creditScore === score)?.rate || 16.9;
    setInterestRate(newRate);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl p-8 border border-blue-100">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <CalcIcon className="text-blue-600" />
            Calculate Your Motorcycle Loan
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <DollarSign className="text-blue-600" size={16} />
                Motorcycle Price
                <span className="ml-auto text-xs text-gray-500">Base price before tax</span>
              </label>
              <input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="pl-4 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                min="1000"
                max="100000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <Receipt className="text-blue-600" size={16} />
                Sales Tax Rate (%)
                <span className="ml-auto text-xs text-gray-500">Your local tax rate</span>
              </label>
              <input
                type="number"
                value={salesTax}
                onChange={(e) => setSalesTax(Number(e.target.value))}
                className="pl-4 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                min="0"
                max="20"
                step="0.1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <Bike className="text-blue-600" size={16} />
                Trade-in Value
                <span className="ml-auto text-xs text-gray-500">Value of your current bike</span>
              </label>
              <input
                type="number"
                value={tradeInValue}
                onChange={(e) => setTradeInValue(Number(e.target.value))}
                className="pl-4 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                min="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <Calendar className="text-blue-600" size={16} />
                Loan Term
                <span className="ml-auto text-xs text-gray-500">Length of the loan</span>
              </label>
              <select
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="pl-4 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                {[12, 24, 36, 48, 60].map(months => (
                  <option key={months} value={months}>{months} months</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <PieChart className="text-blue-600" size={16} />
                Credit Score Range
                <span className="ml-auto text-xs text-gray-500">Affects your interest rate</span>
              </label>
              <select
                value={creditScore}
                onChange={(e) => handleCreditScoreChange(e.target.value as Rate['creditScore'])}
                className="pl-4 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                {rates.map(({ creditScore }) => (
                  <option key={creditScore} value={creditScore}>{creditScore}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <Percent className="text-blue-600" size={16} />
                Interest Rate (%)
                <span className="ml-auto text-xs text-gray-500">Annual percentage rate</span>
              </label>
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                step="0.1"
                min="0"
                max="100"
                className="pl-4 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-8 text-white shadow-lg">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <CalcIcon />
            Loan Summary
          </h3>
          
          <div className="space-y-6">
            <div>
              <p className="text-blue-100 mb-1">Base Price</p>
              <p className="text-2xl font-bold">${loanAmount.toLocaleString()}</p>
            </div>
            
            <div>
              <p className="text-blue-100 mb-1">Sales Tax</p>
              <p className="text-2xl font-bold">${((loanAmount * salesTax) / 100).toLocaleString()}</p>
            </div>
            
            <div>
              <p className="text-blue-100 mb-1">Trade-in Value</p>
              <p className="text-2xl font-bold">-${tradeInValue.toLocaleString()}</p>
            </div>
            
            <div className="pt-4 border-t border-blue-500">
              <p className="text-blue-100 mb-1">Monthly Payment</p>
              <p className="text-4xl font-bold">${monthlyPayment.toFixed(2)}</p>
            </div>
            
            <div>
              <p className="text-blue-100 mb-1">Total Cost of Credit</p>
              <p className="text-2xl font-bold">${totalCost.toFixed(2)}</p>
            </div>
            
            <div>
              <p className="text-blue-100 mb-1">Total Repayment</p>
              <p className="text-2xl font-bold">${totalRepayment.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}