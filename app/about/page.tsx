import React from 'react';
import { Users, Target, Award, Heart } from 'lucide-react';
import Container from '@/components/ui/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Plus530 Adventure - your trusted partner for premium overlanding and self-drive adventures across the Himalayas.',
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-orange-600 to-orange-700">
        <Container>
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Plus530 Adventure
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Your trusted partner for unforgettable overlanding experiences
            </p>
          </div>
        </Container>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Plus530 Adventure was born from a passion for exploration and a deep love for the 
                majestic Himalayan landscapes. Founded by experienced overlanders and mountain 
                enthusiasts, we've spent years perfecting the art of self-drive expeditions across 
                some of the world's most challenging and beautiful terrain.
              </p>
              <p>
                Our journey began with a simple belief: that the best way to experience a place is 
                behind the wheel, with the freedom to stop, explore, and immerse yourself in the 
                local culture. We've taken this philosophy and built it into every adventure we offer, 
                combining expert guidance with the thrill of self-discovery.
              </p>
              <p>
                Today, we're proud to be one of the leading premium overlanding companies in the 
                Himalayan region, offering carefully curated experiences in Bhutan, Nepal, Ladakh, 
                and beyond. Every journey we design is infused with our commitment to safety, 
                sustainability, and authentic cultural experiences.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full mb-4">
                <Target className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Adventure</h3>
              <p className="text-gray-600">
                We believe in pushing boundaries and creating experiences that challenge and inspire
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                <Users className="h-10 w-10 text-green-700" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Community</h3>
              <p className="text-gray-600">
                Building lasting relationships with travelers and local communities alike
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-4">
                <Award className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                Delivering exceptional service and unforgettable experiences on every journey
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-100 rounded-full mb-4">
                <Heart className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-600">
                Protecting the environments we explore and supporting local communities
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Choose Us</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-orange-600 pl-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Expert Local Knowledge</h3>
                <p className="text-gray-700">
                  Our team includes experienced guides who have spent years exploring every route, 
                  ensuring you get the most authentic and safe experience possible.
                </p>
              </div>
              <div className="border-l-4 border-orange-600 pl-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Premium Equipment</h3>
                <p className="text-gray-700">
                  We maintain a fleet of well-equipped 4x4 vehicles, all regularly serviced and 
                  prepared for high-altitude and challenging terrain.
                </p>
              </div>
              <div className="border-l-4 border-orange-600 pl-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Safety First</h3>
                <p className="text-gray-700">
                  Your safety is our top priority. All our expeditions are planned with multiple 
                  safety protocols, emergency equipment, and 24/7 support.
                </p>
              </div>
              <div className="border-l-4 border-orange-600 pl-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Cultural Immersion</h3>
                <p className="text-gray-700">
                  We believe in meaningful travel. Our itineraries include authentic cultural 
                  experiences, interactions with local communities, and stays in unique accommodations.
                </p>
              </div>
              <div className="border-l-4 border-orange-600 pl-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Customization</h3>
                <p className="text-gray-700">
                  Every traveler is unique. We offer fully customizable itineraries to match your 
                  interests, fitness level, and schedule.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the passionate individuals who make your adventures possible
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Rajesh Sharma', role: 'Founder & Lead Guide', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400' },
              { name: 'Pemba Sherpa', role: 'Senior Expedition Leader', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400' },
              { name: 'Maya Thapa', role: 'Operations Manager', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400' },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div
                  className="w-48 h-48 mx-auto rounded-full bg-cover bg-center mb-4"
                  style={{ backgroundImage: `url('${member.image}')` }}
                />
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
