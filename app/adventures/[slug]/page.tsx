import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, TrendingUp, DollarSign, Check, ArrowLeft } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { adventures, getAdventureBySlug } from '@/data/adventures';
import { Metadata } from 'next';

interface AdventurePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return adventures.map((adventure) => ({
    slug: adventure.slug,
  }));
}

export async function generateMetadata({ params }: AdventurePageProps): Promise<Metadata> {
  const adventure = getAdventureBySlug(params.slug);
  
  if (!adventure) {
    return {
      title: 'Adventure Not Found',
    };
  }

  return {
    title: adventure.title,
    description: adventure.description,
  };
}

export default function AdventurePage({ params }: AdventurePageProps) {
  const adventure = getAdventureBySlug(params.slug);

  if (!adventure) {
    notFound();
  }

  const backgroundImage =
    adventure.slug === 'bhutan-overland'
      ? "url('https://images.unsplash.com/photo-1609156842547-5f86d49711e0?q=80&w=2070')"
      : adventure.slug === 'nepal-himalayan-trail'
      ? "url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071')"
      : "url('https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070')";

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage }}
        />
        <Container className="relative z-20">
          <Link href="/adventures" className="inline-flex items-center text-white hover:text-orange-400 mb-6 transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Adventures
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            {adventure.title}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            {adventure.description}
          </p>
        </Container>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-white shadow-md sticky top-16 z-40">
        <Container>
          <div className="flex flex-wrap items-center justify-between py-4 gap-4">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-orange-600" />
                <span className="font-semibold">{adventure.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-orange-600" />
                <span className="font-semibold">{adventure.difficulty}</span>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign className="h-5 w-5 text-orange-600" />
                <span className="font-semibold text-orange-600 text-xl">{adventure.price}</span>
              </div>
            </div>
            <Link href="/contact">
              <Button>Book Now</Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {adventure.longDescription}
            </p>
          </div>
        </Container>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {adventure.highlights.map((highlight, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{highlight}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What's Included Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {adventure.included.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Check className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Itinerary Section */}
      <section className="py-16 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Detailed Itinerary</h2>
          <div className="space-y-6">
            {adventure.itinerary.map((day) => (
              <div key={day.day} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                    {day.day}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{day.title}</h3>
                    <p className="text-gray-700">{day.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700">
        <Container>
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready for This Adventure?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get in touch with us to book your spot or customize this adventure to your preferences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
                  Book This Adventure
                </Button>
              </Link>
              <Link href="/adventures">
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-orange-600">
                  View More Adventures
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
