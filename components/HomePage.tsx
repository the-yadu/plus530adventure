import React from 'react';
import Link from 'next/link';
import { ArrowRight, Mountain, Users, Shield, Calendar } from 'lucide-react';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { getFeaturedAdventures } from '@/data/adventures';

export default function HomePage() {
  const featuredAdventures = getFeaturedAdventures();

  return (
    <div>
      {/* Top Banner - Trip to Bhutan is Live */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 animate-pulse"></div>
        <div className="relative z-10 flex items-center justify-center gap-3">
          <span className="inline-block w-2 h-2 bg-white rounded-full animate-bounce"></span>
          <span className="font-bold text-sm sm:text-base tracking-wide">
            🇧🇹 TRIP TO BHUTAN 2025 IS LIVE
          </span>
          <span className="inline-block w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
        </div>
        <Link href="/adventures/bhutan-overland" className="absolute inset-0 z-20" aria-label="View Bhutan adventure"></Link>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/home-banner-video.mp4" type="video/mp4" />
          {/* Fallback background image for browsers that don't support video */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070')",
            }}
          />
        </video>
        <Container className="relative z-20 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Discover the Adventure of a Lifetime
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Premium overlanding and self-drive expeditions across the Himalayas and beyond
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/adventures">
              <Button size="lg">
                Explore Adventures <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-orange-600">
                Get in Touch
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Featured Adventures */}
      <section className="py-20 bg-cream-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Adventures</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Embark on extraordinary journeys to the world's most stunning destinations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredAdventures.map((adventure) => (
              <Link key={adventure.id} href={`/adventures/${adventure.slug}`}>
                <Card hover className="h-full">
                  <div className="relative h-64">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage:
                          adventure.slug === 'bhutan-overland'
                            ? "url('https://images.unsplash.com/photo-1609156842547-5f86d49711e0?q=80&w=2070')"
                            : "url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071')",
                      }}
                    />
                    <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {adventure.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{adventure.title}</h3>
                    <p className="text-gray-600 mb-4">{adventure.description}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-orange-600">{adventure.price}</span>
                        <span className="text-xs text-gray-500 block">per person (Double Sharing)</span>
                      </div>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {adventure.difficulty}
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/adventures">
              <Button size="lg">
                View All Adventures <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-cream-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Plus530 Adventure</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive support for unforgettable overlanding experiences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Mountain className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Guides</h3>
              <p className="text-gray-600">
                Experienced local guides with deep knowledge of terrain and culture
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Shield className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Safety First</h3>
              <p className="text-gray-600">
                Top-notch safety equipment and comprehensive insurance coverage
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Small Groups</h3>
              <p className="text-gray-600">
                Intimate group sizes ensure personalized attention and flexibility
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Calendar className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Trips</h3>
              <p className="text-gray-600">
                Tailored itineraries designed to match your preferences and schedule
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-cream-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Witness the beauty of our adventures through stunning photography
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=500',
              'https://images.unsplash.com/photo-1609156842547-5f86d49711e0?q=80&w=500',
              'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=500',
              'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=500',
              'https://images.unsplash.com/photo-1605649487212-47f9e476d6b9?q=80&w=500',
              'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=500',
              'https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?q=80&w=500',
              'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=500',
            ].map((src, index) => (
              <div
                key={index}
                className="relative h-48 overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${src}')` }}
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-orange-600">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Stay Updated with Our Adventures
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Subscribe to our newsletter for exclusive offers, travel tips, and adventure stories
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-800"
                required
              />
              <Button
                type="submit"
                variant="secondary"
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </Container>
      </section>
    </div>
  );
}
