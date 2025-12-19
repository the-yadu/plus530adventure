import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  metadataBase: new URL('https://plus530adventure.vercel.app'),
  title: {
    default: 'Plus530 Adventure | Premium Overlanding & Self-Drive Travel',
    template: '%s | Plus530 Adventure',
  },
  description:
    'Experience premium overlanding and self-drive adventures across the Himalayas. Explore Bhutan, Nepal, and Ladakh with expert-guided expeditions.',
  keywords: [
    'overlanding',
    'self-drive adventure',
    'Bhutan travel',
    'Nepal tours',
    'Ladakh expedition',
    'Himalayan adventure',
    'adventure travel',
    '4x4 tours',
  ],
  authors: [{ name: 'Plus530 Adventure' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://plus530adventure.vercel.app',
    siteName: 'Plus530 Adventure',
    title: 'Plus530 Adventure | Premium Overlanding & Self-Drive Travel',
    description:
      'Experience premium overlanding and self-drive adventures across the Himalayas. Explore Bhutan, Nepal, and Ladakh with expert-guided expeditions.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Plus530 Adventure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plus530 Adventure | Premium Overlanding & Self-Drive Travel',
    description:
      'Experience premium overlanding and self-drive adventures across the Himalayas.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};
