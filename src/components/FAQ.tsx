import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How does a motorcycle loan calculator work?",
    answer: "Our motorcycle loan calculator uses your loan amount, term length, and credit score to estimate monthly payments and total costs. It factors in current market interest rates based on your credit rating."
  },
  {
    question: "What credit score do I need for a motorcycle loan?",
    answer: "While you can get a motorcycle loan with various credit scores, better scores typically mean lower interest rates. Excellent credit (700+) usually qualifies for the best rates, while scores below 600 may face higher rates."
  },
  {
    question: "How much should I put as a down payment?",
    answer: "A typical down payment is 10-20% of the motorcycle's value. Larger down payments usually result in better loan terms and lower monthly payments."
  },
  {
    question: "Can I pay off my motorcycle loan early?",
    answer: "Most lenders allow early repayment, but some may charge prepayment penalties. Check your loan terms carefully before signing."
  },
  {
    question: "What affects motorcycle loan interest rates?",
    answer: "Interest rates are influenced by your credit score, down payment amount, loan term length, and current market rates. New motorcycles often qualify for lower rates than used ones."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto mt-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="text-gray-500" />
              ) : (
                <ChevronDown className="text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-50">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}