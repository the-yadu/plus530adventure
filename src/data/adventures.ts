export interface Adventure {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Difficult';
  price: string;
  image: string;
  backgroundImage: string;
  highlights: string[];
  included: string[];
  gallery?: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  featured?: boolean;
}

export const adventures: Adventure[] = [
  {
    id: '1',
    slug: 'bhutan-overland',
    title: 'Bhutan Overland Adventure',
    description: 'Experience the magic of the Thunder Dragon Kingdom on this incredible self-drive journey through Bhutan.',
    longDescription: 'Embark on an unforgettable journey through the mystical Kingdom of Bhutan. This overland adventure takes you through pristine valleys, ancient monasteries, and stunning mountain passes. Experience the unique Bhutanese culture, witness the iconic Tiger\'s Nest Monastery, and drive through some of the most scenic landscapes in the Himalayas.',
    duration: '10 Days',
    difficulty: 'Moderate',
    price: '₹2,90,500',
    image: '/images/adventures/bhutan-1.jpg',
    backgroundImage: '/images/adventures/bhutan-1.jpg',
    featured: true,
    gallery: [
      '/images/adventures/bhutan-1.jpg',
      '/images/adventures/bhutan-2.jpg',
      '/images/adventures/bhutan-3.jpg',
      '/images/adventures/bhutan-4.jpg',
    ],
    highlights: [
      'Visit the iconic Tiger\'s Nest Monastery',
      'Explore Punakha Dzong and Paro Valley',
      'Drive through Dochula Pass with panoramic Himalayan views',
      'Experience authentic Bhutanese culture and cuisine',
      'Self-drive through stunning mountain landscapes',
      'Visit ancient fortresses and monasteries',
    ],
    included: [
      'Professional guide and support vehicle',
      'Accommodation in boutique hotels',
      'All meals and permits',
      '4x4 vehicle rental',
      'Entry fees to all attractions',
      'Cultural experiences and activities',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Paro',
        description: 'Arrive in Paro, pick up your 4x4 vehicle, and acclimatize. Evening orientation and welcome dinner.',
      },
      {
        day: 2,
        title: 'Paro to Thimphu',
        description: 'Drive to Thimphu, visit the National Memorial Chorten, and explore the capital city.',
      },
      {
        day: 3,
        title: 'Thimphu Exploration',
        description: 'Visit Buddha Dordenma, Tashichho Dzong, and local markets. Experience Bhutanese culture.',
      },
      {
        day: 4,
        title: 'Thimphu to Punakha',
        description: 'Cross Dochula Pass and drive to Punakha. Visit the magnificent Punakha Dzong.',
      },
      {
        day: 5,
        title: 'Punakha Valley',
        description: 'Explore Punakha Valley, visit Chimi Lhakhang, and enjoy riverside activities.',
      },
      {
        day: 6,
        title: 'Punakha to Paro',
        description: 'Drive back to Paro via scenic mountain roads. Free evening in Paro town.',
      },
      {
        day: 7,
        title: 'Tiger\'s Nest Monastery',
        description: 'Hike to the iconic Tiger\'s Nest Monastery (Taktsang). Afternoon at leisure.',
      },
      {
        day: 8,
        title: 'Paro Valley Exploration',
        description: 'Visit Rinpung Dzong, National Museum, and explore Paro Valley.',
      },
      {
        day: 9,
        title: 'Haa Valley Day Trip',
        description: 'Day trip to the beautiful Haa Valley, one of Bhutan\'s hidden gems.',
      },
      {
        day: 10,
        title: 'Departure',
        description: 'Final breakfast and departure from Paro International Airport.',
      },
    ],
  },
  {
    id: '2',
    slug: 'nepal-himalayan-trail',
    title: 'Nepal Himalayan Trail',
    description: 'Drive through the heart of Nepal, from Kathmandu to Pokhara, exploring the majestic Himalayas.',
    longDescription: 'Experience the diverse landscapes of Nepal on this epic overland journey. From the bustling streets of Kathmandu to the serene lakeside of Pokhara, this adventure combines cultural immersion with stunning mountain scenery. Drive through traditional villages, terraced farmlands, and alongside roaring rivers, all while being surrounded by some of the world\'s highest peaks.',
    duration: '12 Days',
    difficulty: 'Moderate',
    price: '₹2,32,400',
    image: '/images/adventures/nepal-1.jpg',
    backgroundImage: '/images/adventures/nepal-1.jpg',
    featured: true,
    gallery: [
      '/images/adventures/nepal-1.jpg',
      '/images/adventures/nepal-2.jpg',
      '/images/adventures/nepal-3.jpg',
      '/images/adventures/nepal-4.jpg',
    ],
    highlights: [
      'Explore Kathmandu\'s UNESCO World Heritage Sites',
      'Drive the scenic Prithvi Highway',
      'Sunrise views of Annapurna range from Sarangkot',
      'Visit Chitwan National Park for wildlife safari',
      'Boat ride on Phewa Lake in Pokhara',
      'Experience Newari culture in Bhaktapur',
    ],
    included: [
      'Experienced driver-guide',
      '4x4 vehicle with fuel',
      'Hotel accommodations',
      'Daily breakfast and select meals',
      'National park permits',
      'All entrance fees',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kathmandu',
        description: 'Arrive in Kathmandu, meet the team, vehicle briefing, and evening welcome dinner.',
      },
      {
        day: 2,
        title: 'Kathmandu Valley Tour',
        description: 'Visit Swayambhunath, Pashupatinath, and Boudhanath. Evening in Thamel.',
      },
      {
        day: 3,
        title: 'Kathmandu to Bhaktapur to Nagarkot',
        description: 'Explore ancient Bhaktapur Durbar Square, drive to Nagarkot for sunset views.',
      },
      {
        day: 4,
        title: 'Nagarkot to Chitwan',
        description: 'Early morning Himalayan sunrise, then drive to Chitwan National Park.',
      },
      {
        day: 5,
        title: 'Chitwan National Park',
        description: 'Full day wildlife safari - elephant ride, jungle walk, and cultural program.',
      },
      {
        day: 6,
        title: 'Chitwan to Pokhara',
        description: 'Scenic drive along Prithvi Highway to Pokhara. Evening lakeside stroll.',
      },
      {
        day: 7,
        title: 'Pokhara Exploration',
        description: 'Visit Davis Falls, Gupteshwor Cave, and International Mountain Museum.',
      },
      {
        day: 8,
        title: 'Sarangkot Sunrise',
        description: 'Early morning drive to Sarangkot for Annapurna sunrise. Afternoon boating on Phewa Lake.',
      },
      {
        day: 9,
        title: 'Pokhara to Bandipur',
        description: 'Drive to the hilltop village of Bandipur, explore preserved Newari culture.',
      },
      {
        day: 10,
        title: 'Bandipur to Kathmandu',
        description: 'Return drive to Kathmandu with stops at scenic viewpoints. Free evening.',
      },
      {
        day: 11,
        title: 'Kathmandu Free Day',
        description: 'Leisure day for shopping, additional sightseeing, or rest. Farewell dinner.',
      },
      {
        day: 12,
        title: 'Departure',
        description: 'Transfer to Tribhuvan International Airport for departure.',
      },
    ],
  },
  {
    id: '3',
    slug: 'ladakh-expedition',
    title: 'Ladakh High Altitude Expedition',
    description: 'Conquer the world\'s highest motorable passes in the stunning Ladakh region of India.',
    longDescription: 'This challenging expedition takes you through the remote and breathtaking landscapes of Ladakh. Drive across some of the world\'s highest motorable passes, visit ancient monasteries perched on mountain cliffs, and experience the unique Indo-Tibetan culture. This is the ultimate high-altitude adventure for experienced overlanders.',
    duration: '14 Days',
    difficulty: 'Challenging',
    price: '₹3,48,600',
    image: '/images/adventures/ladakh-1.jpg',
    backgroundImage: '/images/adventures/ladakh-1.jpg',
    featured: false,
    gallery: [
      '/images/adventures/ladakh-1.jpg',
      '/images/adventures/ladakh-2.jpg',
      '/images/adventures/ladakh-3.jpg',
      '/images/adventures/ladakh-4.jpg',
    ],
    highlights: [
      'Cross Khardung La and Chang La passes',
      'Visit Pangong Tso and Tso Moriri lakes',
      'Explore Leh, Nubra Valley, and Zanskar',
      'Ancient monasteries including Thiksey and Hemis',
      'Experience Tibetan Buddhist culture',
      'Camp under the stars at 14,000+ feet',
    ],
    included: [
      'Expert mountain guide',
      'Modified 4x4 vehicles',
      'Camping and hotel accommodations',
      'All meals during the expedition',
      'Inner line permits',
      'Emergency oxygen and medical kit',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Leh',
        description: 'Arrive in Leh, rest for acclimatization. Light walk in the evening.',
      },
      {
        day: 2,
        title: 'Leh Acclimatization',
        description: 'Visit Shanti Stupa, Leh Palace, and local market. Continue acclimatization.',
      },
      {
        day: 3,
        title: 'Leh to Sham Valley',
        description: 'Day trip to Magnetic Hill, Gurudwara Pathar Sahib, and Alchi Monastery.',
      },
      {
        day: 4,
        title: 'Leh to Nubra Valley',
        description: 'Cross Khardung La (18,380 ft), drive to Nubra Valley. Visit sand dunes.',
      },
      {
        day: 5,
        title: 'Nubra Valley Exploration',
        description: 'Visit Diskit Monastery, double-humped camels, hot springs at Panamik.',
      },
      {
        day: 6,
        title: 'Nubra to Pangong via Shyok',
        description: 'Scenic drive through Shyok Valley to the stunning Pangong Tso lake.',
      },
      {
        day: 7,
        title: 'Pangong Lake',
        description: 'Full day at Pangong Lake, photography, and relaxation. Overnight camping.',
      },
      {
        day: 8,
        title: 'Pangong to Leh via Chang La',
        description: 'Return to Leh crossing Chang La pass. Visit Hemis Monastery en route.',
      },
      {
        day: 9,
        title: 'Leh to Tso Moriri',
        description: 'Long drive to Tso Moriri lake through Chumathang. Overnight at lake.',
      },
      {
        day: 10,
        title: 'Tso Moriri to Sarchu',
        description: 'Drive through remote landscapes to Sarchu. Camp on the plains.',
      },
      {
        day: 11,
        title: 'Sarchu to Jispa',
        description: 'Cross high passes and drive to Jispa in Lahaul Valley.',
      },
      {
        day: 12,
        title: 'Jispa to Manali',
        description: 'Drive to Manali, cross Rohtang Pass. Evening in Manali town.',
      },
      {
        day: 13,
        title: 'Manali Leisure Day',
        description: 'Rest day in Manali. Optional activities or shopping.',
      },
      {
        day: 14,
        title: 'Departure from Manali',
        description: 'Transfer to airport or continue your onward journey.',
      },
    ],
  },
  {
    id: '4',
    slug: 'sakleshpur-chikmagalur-luxury-overland',
    title: 'Sakleshpur & Chikmagalur Western Ghats Luxury Overland',
    description: 'A 3-Day / 2-Night luxury self-drive convoy through tea estates, misty peaks, and off-road trails of Sakleshpur & Chikmagalur with 4-star resort stays.',
    longDescription: 'Embark on a premium 3-Day / 2-Night Western Ghats overland expedition from Bangalore to Sakleshpur and Chikmagalur (Oct 2 – Oct 4, 2026). Drive your own 4x4 or AWD SUV behind our expert lead support vehicle, exploring private coffee plantations, mountain passes, and waterfalls, while unwinding each evening in handpicked 4-star luxury resorts.',
    duration: '3 Days / 2 Nights',
    difficulty: 'Moderate',
    price: '₹38,500',
    image: '/images/adventures/sakleshpur-chikmagalur.jpg',
    backgroundImage: '/images/adventures/sakleshpur-chikmagalur.jpg',
    featured: true,
    gallery: [
      '/images/adventures/sakleshpur-chikmagalur.jpg',
    ],
    highlights: [
      '4-Star Luxury Resort stays in Sakleshpur & Chikmagalur',
      'Self-drive convoy led by Plus530 professional 4x4 support team',
      'Private coffee & tea estate off-road trail drive',
      'Sunset drive to Mullayanagiri Peak (Karnataka\'s highest peak)',
      'Explore Baba Budangiri & estate waterfalls',
      'Walkie-talkie communication sets & full recovery support',
    ],
    included: [
      '2 Nights stay in 4-Star Luxury Resorts (Double Occupancy)',
      'All meals (Breakfasts, Highway & Estate Lunches, Gourmet Dinners)',
      'Plus530 Lead 4x4 Support Vehicle & Experienced Expedition Leader',
      'Off-road spotters & recovery equipment on standby',
      'Vehicle walkie-talkie radio setup for convoy communication',
      'All trail permits, estate access fees, and taxes',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Bangalore to Sakleshpur: Highway Cruise & Estate Off-Road Trail',
        description: 'Convoy assembly in Bangalore at 6:00 AM. Scenic highway drive to Sakleshpur. Check-in at 4-star luxury estate resort. Afternoon off-road 4x4 trail through private coffee plantations and hidden stream crossings. Evening welcome dinner & briefing.',
      },
      {
        day: 2,
        title: 'Sakleshpur to Chikmagalur: Ghats Ridge Drive & Mullayanagiri Peak',
        description: 'Morning ridge road drive from Sakleshpur to Chikmagalur. Check-in at luxury hill resort. Afternoon ascent up Mullayanagiri Peak and Baba Budangiri. High-altitude tea tasting and estate dinner under the stars.',
      },
      {
        day: 3,
        title: 'Chikmagalur Coffee Trails & Return to Bangalore',
        description: 'Morning coffee estate walk and tea plantation trail. Farewell convoy lunch in Chikmagalur. Scenic return drive to Bangalore, arriving by 8:00 PM.',
      },
    ],
  },
];

export function getAdventureBySlug(slug: string): Adventure | undefined {
  return adventures.find((adventure) => adventure.slug === slug);
}

export function getFeaturedAdventures(): Adventure[] {
  return adventures.filter((adventure) => adventure.featured);
}
