import React from 'react';
import { Shield, Clock, CreditCard, AlertCircle } from 'lucide-react';
import Container from '@/components/ui/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy',
  description: 'Plus530 Adventure refund policy - Learn about our fair and transparent refund terms for overlanding and adventure tours.',
};

export default function RefundPolicyPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070')"
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        
        <Container>
          <div className="relative z-10 text-center text-white">
            <div className="flex justify-center mb-6">
              <Shield className="w-16 h-16 text-orange-500" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Refund Policy
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-200">
              Fair and transparent terms for your adventure bookings
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <div className="mb-12 text-center">
              <p className="text-lg text-gray-600 leading-relaxed">
                At Plus530 Adventure, we understand that travel plans can change. Our refund policy is designed to be fair to both our customers and our business partners while ensuring we can continue to provide exceptional adventure experiences.
              </p>
            </div>

            {/* Policy Sections */}
            <div className="space-y-8">
              
              {/* Cancellation Timeline */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <Clock className="w-8 h-8 text-orange-500 mr-4" />
                  <h2 className="text-2xl font-bold text-gray-900">Cancellation Timeline</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-xl font-semibold text-green-700 mb-2">60+ Days Before Departure</h3>
                    <p className="text-gray-600">Full refund minus a 5% administrative fee (minimum ₹5,000)</p>
                  </div>
                  
                  <div className="border-l-4 border-yellow-500 pl-6">
                    <h3 className="text-xl font-semibold text-yellow-700 mb-2">30-59 Days Before Departure</h3>
                    <p className="text-gray-600">75% refund of the total amount paid</p>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-6">
                    <h3 className="text-xl font-semibold text-orange-700 mb-2">15-29 Days Before Departure</h3>
                    <p className="text-gray-600">50% refund of the total amount paid</p>
                  </div>
                  
                  <div className="border-l-4 border-red-500 pl-6">
                    <h3 className="text-xl font-semibold text-red-700 mb-2">Less than 15 Days Before Departure</h3>
                    <p className="text-gray-600">No refund available</p>
                  </div>
                </div>
              </div>

              {/* Emergency Situations */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <AlertCircle className="w-8 h-8 text-orange-500 mr-4" />
                  <h2 className="text-2xl font-bold text-gray-900">Emergency Situations</h2>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    We understand that emergencies happen. In case of documented medical emergencies, family emergencies, or other unforeseen circumstances, we will review each case individually and may offer:
                  </p>
                  <ul className="space-y-2 text-gray-600 ml-6">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                      Credit towards a future adventure (valid for 24 months)
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                      Partial refund based on circumstances
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                      Rescheduling to a future departure (subject to availability)
                    </li>
                  </ul>
                  <p className="text-sm text-gray-500 mt-4">
                    <strong>Documentation Required:</strong> Medical certificates, death certificates, or other official documentation may be required for emergency considerations.
                  </p>
                </div>
              </div>

              {/* Weather & Force Majeure */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Weather & Force Majeure</h2>
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    If Plus530 Adventure cancels a trip due to:
                  </p>
                  <ul className="space-y-2 text-gray-600 ml-6">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                      Severe weather conditions that make travel unsafe
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                      Natural disasters (earthquakes, landslides, floods)
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                      Political unrest or government travel advisories
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                      Road closures or permits being denied by authorities
                    </li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed">
                    Customers will receive a <strong>full refund</strong> or can choose to reschedule their adventure at no additional cost.
                  </p>
                </div>
              </div>

              {/* Refund Process */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <CreditCard className="w-8 h-8 text-orange-500 mr-4" />
                  <h2 className="text-2xl font-bold text-gray-900">Refund Process</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Processing Time</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Bank transfers: 5-7 business days</li>
                        <li>• Credit cards: 7-14 business days</li>
                        <li>• Online wallets: 3-5 business days</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Required Information</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Original booking confirmation</li>
                        <li>• Bank account details (for transfers)</li>
                        <li>• Reason for cancellation</li>
                        <li>• Valid ID proof</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Travel Insurance */}
              <div className="bg-orange-50 rounded-xl p-8 border border-orange-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Travel Insurance Recommendation</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We strongly recommend purchasing comprehensive travel insurance to protect against unforeseen circumstances that may not be covered by our refund policy, including:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-600">
                    <li>• Personal medical emergencies</li>
                    <li>• Trip interruption due to illness</li>
                    <li>• Lost or stolen baggage</li>
                  </ul>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Flight cancellations or delays</li>
                    <li>• Personal liability coverage</li>
                    <li>• Adventure sports coverage</li>
                  </ul>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Questions About Refunds?</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our customer service team is here to help you understand our refund policy and process any cancellations.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-orange-600">refunds@plus530adventure.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                    <p className="text-orange-600">+91-XXXX-XXXXXX</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Hours</h3>
                    <p className="text-gray-600">Mon-Sat: 9 AM - 7 PM IST</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Last Updated */}
            <div className="text-center mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Last updated: December 21, 2025
              </p>
            </div>

          </div>
        </Container>
      </section>
    </div>
  );
}
