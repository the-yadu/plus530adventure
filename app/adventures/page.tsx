import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { adventures } from '@/data/adventures';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Adventures',
  description: 'Explore our premium overlanding and self-drive adventures across the Himalayas. Discover Bhutan, Nepal, Ladakh, and more.',
};

export default function AdventuresPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-orange-600 to-orange-700">
        <Container>
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Adventures
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Choose from our curated selection of premium overlanding experiences
            </p>
          </div>
        </Container>
      </section>

      {/* Adventures Grid */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adventures.map((adventure) => (
              <Link key={adventure.id} href={`/adventures/${adventure.slug}`}>
                <Card hover className="h-full flex flex-col">
                  <div className="relative h-64">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage:
                          adventure.slug === 'bhutan-overland'
                            ? "url('https://images.unsplash.com/photo-1609156842547-5f86d49711e0?q=80&w=2070')"
                            : adventure.slug === 'nepal-himalayan-trail'
                            ? "url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071')"
                            : "url('https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070')",
                      }}
                    />
                    <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {adventure.duration}
                    </div>
                    {adventure.featured && (
                      <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{adventure.title}</h3>
                    <p className="text-gray-600 mb-4 flex-1">{adventure.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-orange-600">{adventure.price}</span>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {adventure.difficulty}
                      </span>
                    </div>
                    <Button className="w-full">
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We specialize in custom adventures tailored to your preferences and schedule
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
                Contact Us for Custom Trips
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
