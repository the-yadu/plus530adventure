export type AdventureType = 'car' | 'motorcycle' | 'hiking';

export interface Adventure {
  id: string;
  slug: string;
  type: AdventureType;
  title: string;
  description: string;
  longDescription: string;
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Difficult';
  price: string;
  image: string;
  backgroundImage: string;
  nextBatchDates?: string[];
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

export function getRoutePrefix(type: AdventureType): string {
  switch (type) {
    case 'car': return '/car-tours';
    case 'motorcycle': return '/motorcycle-tours';
    case 'hiking': return '/hiking';
  }
}

export function getAdventureUrl(adventure: Adventure): string {
  return `${getRoutePrefix(adventure.type)}/${adventure.slug}`;
}

export function getTypeLabel(type: AdventureType): string {
  switch (type) {
    case 'car': return 'Car Convoy';
    case 'motorcycle': return 'Motorcycle Tour';
    case 'hiking': return 'Hiking';
  }
}


export const adventures: Adventure[] = [
  {
    id: '1',
    slug: 'bhutan-overland',
    type: 'car',
    title: 'Bhutan Overland Adventure',
    description: 'Experience the magic of the Thunder Dragon Kingdom on this incredible self-drive journey through Bhutan.',
    longDescription: 'Embark on an unforgettable journey through the mystical Kingdom of Bhutan. This overland adventure takes you through pristine valleys, ancient monasteries, and stunning mountain passes. Experience the unique Bhutanese culture, witness the iconic Tiger\'s Nest Monastery, and drive through some of the most scenic landscapes in the Himalayas.',
    duration: '10 Days',
    difficulty: 'Moderate',
    price: '₹1,45,250',
    image: '/images/adventures/bhutan-card.jpg',
    backgroundImage: '/images/adventures/bhutan-1.jpg',
    nextBatchDates: ['15th Oct 2026', '05th Nov 2026'],
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
    type: 'car',
    title: 'Nepal Himalayan Trail',
    description: 'Drive through the heart of Nepal, from Kathmandu to Pokhara, exploring the majestic Himalayas.',
    longDescription: 'Experience the diverse landscapes of Nepal on this epic overland journey. From the bustling streets of Kathmandu to the serene lakeside of Pokhara, this adventure combines cultural immersion with stunning mountain scenery. Drive through traditional villages, terraced farmlands, and alongside roaring rivers, all while being surrounded by some of the world\'s highest peaks.',
    duration: '12 Days',
    difficulty: 'Moderate',
    price: '₹1,16,200',
    image: '/images/adventures/nepal-card.jpg',
    backgroundImage: '/images/adventures/nepal-1.jpg',
    nextBatchDates: ['10th Nov 2026', '01st Dec 2026'],
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
    type: 'car',
    title: 'Ladakh High Altitude Expedition',
    description: 'Conquer the world\'s highest motorable passes in the stunning Ladakh region of India.',
    longDescription: 'This challenging expedition takes you through the remote and breathtaking landscapes of Ladakh. Drive across some of the world\'s highest motorable passes, visit ancient monasteries perched on mountain cliffs, and experience the unique Indo-Tibetan culture. This is the ultimate high-altitude adventure for experienced overlanders.',
    duration: '14 Days',
    difficulty: 'Challenging',
    price: '₹1,74,300',
    image: '/images/adventures/ladakh-card.jpg',
    backgroundImage: '/images/adventures/ladakh-1.jpg',
    nextBatchDates: ['15th Jun 2026', '10th Jul 2026'],
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
    type: 'car',
    title: 'Sakleshpur & Chikmagalur Western Ghats Luxury Overland',
    description: 'A 3-Day / 2-Night luxury self-drive convoy through tea estates, misty peaks, and off-road trails of Sakleshpur & Chikmagalur with 4-star resort stays.',
    longDescription: 'Embark on a premium 3-Day / 2-Night Western Ghats overland expedition from Bangalore to Sakleshpur and Chikmagalur (Oct 2 – Oct 4, 2026). Drive your own 4x4 or AWD SUV behind our expert lead support vehicle, exploring private coffee plantations, mountain passes, and waterfalls, while unwinding each evening in handpicked 4-star luxury resorts.',
    duration: '3 Days / 2 Nights',
    difficulty: 'Moderate',
    price: '₹38,500',
    image: '/images/adventures/sakleshpur-card.jpg',
    backgroundImage: '/images/adventures/sakleshpur-chikmagalur.jpg',
    nextBatchDates: ['02nd Oct 2026', '20th Nov 2026'],
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
  {
    id: '5',
    slug: 'northeast-expedition-2027',
    type: 'car',
    title: 'Northeast India Grand Overland Expedition 2027',
    description: 'An epic 28-Day luxury self-drive overland expedition across Meghalaya, Kaziranga, Arunachal Pradesh, Mechuka, Tawang & Sikkim.',
    longDescription: 'Get ready for an epic luxury self-drive overland expedition to Northeast India with Plus530 Adventure! Spanning 28 days and 27 nights, this cross-country journey takes you from Bangalore through the lush hills of Meghalaya, wildlife safaris in Kaziranga, remote valleys of Mechuka, high-altitude passes of Tawang in Arunachal Pradesh, and the serene peaks of Sikkim. Accompanied by our lead 4x4 support vehicle, expert expedition leaders, walkie-talkie communication, and handpicked 4-star boutique stays.',
    duration: '28 Days / 27 Nights',
    difficulty: 'Challenging',
    price: '₹2,85,000',
    image: '/images/adventures/northeast-card.jpg',
    backgroundImage: '/images/adventures/northeast-hero.jpg',
    nextBatchDates: ['15th Jan 2027', '20th Feb 2027'],
    featured: true,
    gallery: [
      '/images/adventures/northeast-hero.jpg',
      '/images/adventures/northeast-mechuka.jpg',
      '/images/adventures/northeast-tawang.jpg',
      '/images/adventures/northeast-dawki.jpg',
    ],
    highlights: [
      '2 Nights in remote Mechuka Valley (Boutique homestays & luxury eco-lodges)',
      '2 Nights in high-altitude Tawang & Sela Pass',
      '2 Nights in Gangtok, Sikkim',
      'Kaziranga National Park Wildlife Safari',
      'Cherrapunji waterfalls, Dawki crystal river & Shillong hills',
      'Self-drive convoy led by Plus530 professional 4x4 support team',
      'Walkie-talkie radio setup for convoy communication & recovery support',
      'All inland permits (ILP/RAP), luxury stays & selected activities included',
    ],
    included: [
      '27 Nights stay in 4-Star Luxury Resorts & Boutique Lodges (Double Occupancy)',
      'All Breakfasts & Gourmet Convoy Dinners',
      'Plus530 Lead 4x4 Support Vehicle & Certified Expedition Leader',
      'Off-road spotters & stand-by recovery equipment',
      'Vehicle walkie-talkie radio setup for convoy communication',
      'All Inner Line Permits (ILP), Protected Area Permits & entry fees',
    ],
    itinerary: [
      { day: 1, title: 'Bangalore Convoy Flag-Off & Transit', description: 'Assembly in Bangalore, vehicle briefing, walkie-talkie setup, and convoy departure.' },
      { day: 2, title: 'Highway Transit to East India', description: 'Cross-state highway convoy drive with scheduled refuel and rest stops.' },
      { day: 3, title: 'Arrival in Siliguri Gateway', description: 'Convoy regroup in Siliguri. Evening expedition briefing and welcome dinner.' },
      { day: 4, title: 'Siliguri to Shillong (Meghalaya)', description: 'Ascent into the Abode of Clouds. Check-in at 4-star hill resort in Shillong.' },
      { day: 5, title: 'Shillong & Cherrapunji Waterfalls', description: 'Explore Nohkalikai Falls, Mawsmai Cave, and scenic canyon roads.' },
      { day: 6, title: 'Dawki Crystal River & Mawlynnong', description: 'Drive to Dawki clear waters and Asia\'s cleanest village Mawlynnong.' },
      { day: 7, title: 'Shillong to Kaziranga National Park', description: 'Scenic drive down to Assam plains and Kaziranga Wildlife Sanctuary.' },
      { day: 8, title: 'Kaziranga Wildlife Safari Day', description: 'Morning elephant safari & afternoon 4x4 jeep safari tracking the One-Horned Rhino.' },
      { day: 9, title: 'Kaziranga to Dirang (Arunachal Pradesh)', description: 'Cross into Arunachal Pradesh via Bhalukpong. Scenic mountain drive to Dirang.' },
      { day: 10, title: 'Dirang to Tawang via Sela Pass (13,700 ft)', description: 'Drive over snow-clad Sela Pass and Sela Lake into historic Tawang.' },
      { day: 11, title: 'Tawang Monastery & Bum La Pass Trail', description: 'Explore Asia\'s 2nd largest monastery & high-altitude border lakes.' },
      { day: 12, title: 'Tawang Exploration & Local Culture', description: 'Visit War Memorial, Craft Center, and local Monpa cultural immersion.' },
      { day: 13, title: 'Tawang to Bomdila', description: 'Scenic descent through apple orchards and Bomdila Monastery.' },
      { day: 14, title: 'Bomdila to Itanagar / Ziro Valley Transit', description: 'Convoy drive through central Arunachal Pradesh river valleys.' },
      { day: 15, title: 'Transit to Along / Aalo', description: 'Drive along the Siang River valley towards Mechuka.' },
      { day: 16, title: 'Aalo to Remote Mechuka Valley', description: 'Drive through pristine forest trails to Mechuka Valley near Tibet border.' },
      { day: 17, title: 'Mechuka Valley Off-Road & Sacred Sites', description: 'Explore Yarlung camp, Gurudwara Taposthan, and Mechuka river trails.' },
      { day: 18, title: 'Mechuka Valley Leisure & Exploration', description: 'Second day in Mechuka for photography, off-roading, and local hospitality.' },
      { day: 19, title: 'Mechuka to Pasighat', description: 'Descent along Brahmaputra tributaries to historic Pasighat town.' },
      { day: 20, title: 'Pasighat to Dibrugarh (Assam)', description: 'Cross the iconic Bogibeel Bridge over Brahmaputra river to Dibrugarh tea estates.' },
      { day: 21, title: 'Dibrugarh to Guwahati', description: 'Drive across Assam valley to Guwahati city.' },
      { day: 22, title: 'Guwahati to Gangtok (Sikkim)', description: 'Ascent into Sikkim Himalayas to capital city Gangtok.' },
      { day: 23, title: 'Gangtok & Tsomgo Lake', description: 'High-altitude drive to glacial Tsomgo Lake (12,400 ft) & Baba Mandir.' },
      { day: 24, title: 'Gangtok Leisure & Organic Cuisine', description: 'Explore MG Marg, Rumtek Monastery, and local Sikkim delicacies.' },
      { day: 25, title: 'Gangtok to Siliguri Return Convoy', description: 'Descend along Teesta river valley back to Siliguri.' },
      { day: 26, title: 'Siliguri to Southbound Transit', description: 'Begin return highway convoy route towards South India.' },
      { day: 27, title: 'Highway Convoy Drive', description: 'Smooth highway cruising with team debrief and celebration dinner.' },
      { day: 28, title: 'Return Convoy Arrival in Bangalore', description: 'Final convoy leg arriving back in Bangalore. Expedition completion ceremony.' },
    ],
  },
  {
    id: '6',
    slug: 'spiti-valley-circuit',
    type: 'car',
    title: 'Spiti Valley High Altitude Circuit Expedition',
    description: 'Drive through the Middle Land: cross Chicham Bridge, visit the world\'s highest post office at Hikkim, and camp near Chandratal Lake.',
    longDescription: 'Conquer the rugged and remote terrains of Spiti Valley on this 9-Day / 8-Night high-altitude self-drive overland expedition. Journey across dramatic river gorges, ancient 1,000-year-old monasteries, high mountain passes like Kunzum Pass (14,931 ft), and the iconic Chicham Bridge. Drive your 4x4 behind our expert lead support vehicle, equipped with walkie-talkie communication, emergency oxygen, and standby recovery, while unwinding each evening in boutique mountain lodges.',
    duration: '9 Days / 8 Nights',
    difficulty: 'Challenging',
    price: '₹98,500',
    image: '/images/adventures/spiti-card.jpg',
    backgroundImage: '/images/adventures/spiti-hero.jpg',
    nextBatchDates: ['10th Sep 2026', '05th Oct 2026'],
    featured: true,
    gallery: [
      '/images/adventures/spiti-hero.jpg',
      '/images/adventures/spiti-card.jpg',
      '/images/adventures/ladakh-1.jpg',
      '/images/adventures/bhutan-1.jpg',
    ],
    highlights: [
      'Cross Chicham Bridge (Asia\'s highest bridge suspension gorge)',
      'Visit Hikkim (World\'s highest post office) & Langza (Fossil village)',
      'Drive over Kunzum Pass (14,931 ft) to Chandratal Lake ("Moon Lake")',
      'Explore Key Monastery & 1,000-year-old Tabo Monastery',
      'Self-drive 4x4 convoy led by Plus530 professional support team',
      'Walkie-talkie radio setup, emergency oxygen & standby recovery',
    ],
    included: [
      '8 Nights accommodation in handpicked 4-star boutique stays & eco-lodges (Double Occupancy)',
      'All Breakfasts & Gourmet Convoy Dinners',
      'Plus530 Lead 4x4 Support Vehicle & Certified Expedition Leader',
      'Off-road spotters & recovery equipment on standby',
      'Vehicle walkie-talkie radio setup for convoy communication',
      'Inner Line Permits (ILP) & green tax permits',
    ],
    itinerary: [
      { day: 1, title: 'Chandigarh Assembly & Drive to Narkanda', description: 'Assembly in Chandigarh, vehicle briefing, walkie-talkie setup, and drive through foothills to Narkanda.' },
      { day: 2, title: 'Narkanda to Sangla / Chitkul', description: 'Drive along Sutlej river canyon into Chitkul near the Tibet border.' },
      { day: 3, title: 'Chitkul to Kalpa', description: 'Morning walk in Chitkul, scenic drive to Kalpa overlooking Kinnaur Kailash.' },
      { day: 4, title: 'Kalpa to Tabo via Nako Lake', description: 'Cross into Spiti valley, visit Nako Lake and 1,000-year-old Tabo Monastery.' },
      { day: 5, title: 'Tabo to Kaza via Dhankar Monastery', description: 'Explore cliffside Dhankar Monastery, drive to Spiti capital Kaza.' },
      { day: 6, title: 'Kaza to Highest Villages (Hikkim, Komic, Langza)', description: 'High-altitude loop to Hikkim post office, Komic monastery, and Langza fossil valley.' },
      { day: 7, title: 'Kaza to Key Monastery, Chicham Bridge & Chandratal Lake', description: 'Cross Chicham Bridge, drive over Kunzum Pass (14,931 ft) to Chandratal Lake.' },
      { day: 8, title: 'Chandratal to Manali via Atal Tunnel', description: 'Off-road water crossings through Batal and Gramphu, cross Atal Tunnel to Manali.' },
      { day: 9, title: 'Manali to Chandigarh Return Convoy', description: 'Farewell breakfast and return convoy drive back to Chandigarh.' },
    ],
  },
  {
    id: '7',
    slug: 'rajasthan-royal-desert-dune',
    type: 'car',
    title: 'Rajasthan Royal Desert & Dune Overland Expedition',
    description: 'Explore the Thar Desert: 4x4 sand dune bashing in Sam Sand Dunes, heritage fort stays, and luxury desert glamping.',
    longDescription: 'Embark on a grand 7-Day / 6-Night winter overland expedition across Rajasthan. Drive your 4x4 vehicle through historic forts, vibrant bazaars, and into the deep Thar Desert. Experience private sand dune bashing at Sam Sand Dunes, unwind in 4-star heritage havelis and luxury desert glamping camps under starry nights, backed by Plus530 lead 4x4 support, sand recovery gear, and walkie-talkie communication.',
    duration: '7 Days / 6 Nights',
    difficulty: 'Moderate',
    price: '₹85,000',
    image: '/images/adventures/rajasthan-card.jpg',
    backgroundImage: '/images/adventures/rajasthan-hero.jpg',
    nextBatchDates: ['15th Dec 2026', '10th Jan 2027'],
    featured: true,
    gallery: [
      '/images/adventures/rajasthan-hero.jpg',
      '/images/adventures/rajasthan-card.jpg',
      '/images/adventures/bhutan-1.jpg',
      '/images/adventures/ladakh-1.jpg',
    ],
    highlights: [
      'Private Sam Sand Dunes 4x4 trail drive & dune bashing',
      'Stays in 4-star heritage palaces & luxury desert safari glamping',
      'Convoy drive through Jaipur, Jodhpur, Jaisalmer & Bikaner forts',
      'Sunset desert tea tasting & traditional Rajasthani folk music under the stars',
      'Self-drive 4x4 convoy led by Plus530 professional support team',
      'Walkie-talkie radio setup, sand recovery traction boards & standby spotters',
    ],
    included: [
      '6 Nights accommodation in heritage palaces & 4-star desert glamping camps (Double Occupancy)',
      'All Breakfasts, Royal Fort Dinners & Desert Camp Barbecues',
      'Plus530 Lead 4x4 Support Vehicle & Certified Expedition Leader',
      'Off-road sand recovery gear, compressors & spotters',
      'Vehicle walkie-talkie radio setup for convoy communication',
      'All fort entrance fees, desert safari access permits & taxes',
    ],
    itinerary: [
      { day: 1, title: 'Jaipur Royal Assembly & Pink City Convoy Drive', description: 'Assembly in Jaipur, vehicle briefing, walkie-talkie setup, and welcome haveli dinner.' },
      { day: 2, title: 'Jaipur to Jodhpur (The Blue City)', description: 'Drive via Sambhar Salt Lake highway to Jodhpur, check-in near Mehrangarh Fort.' },
      { day: 3, title: 'Jodhpur to Jaisalmer (The Golden City)', description: 'Morning tour of Mehrangarh Fort, convoy drive across Thar Desert to Jaisalmer.' },
      { day: 4, title: 'Jaisalmer Fort & Sam Sand Dunes Off-Road Trail', description: 'Explore Jaisalmer Fort, afternoon convoy drive to Sam Sand Dunes for 4x4 dune bashing and luxury glamping.' },
      { day: 5, title: 'Jaisalmer to Bikaner via Pokhran', description: 'Highway drive across desert scrubland to Bikaner, visit Junagarh Fort.' },
      { day: 6, title: 'Bikaner to Shekhawati Haveli Region', description: 'Drive to Mandawa in Shekhawati region, explore open-air painted havelis. Gala farewell dinner.' },
      { day: 7, title: 'Shekhawati to Jaipur Return Convoy', description: 'Morning heritage walk and return convoy drive to Jaipur. Expedition flag-in.' },
    ],
  },
  {
    id: '8',
    slug: 'coastal-western-ghats-trail',
    type: 'car',
    title: 'Coastal & Western Ghats Luxury 4x4 Trail',
    description: 'A 5-Day / 4-Night luxury getaway driving through Amboli & Chorla Ghat passes, private estate off-road trails, secret waterfalls, and beachfront resorts.',
    longDescription: 'Experience the ultimate 5-Day / 4-Night Western Ghats to Goa overland journey. Drive your 4x4 or AWD SUV through rainforest mountain ridge roads (Amboli & Chorla Ghats), private tea/spice estate trails, and hidden waterfall stream crossings. Unwind each evening in handpicked 4-star beachfront resorts and luxury hill lodges, backed by Plus530 lead 4x4 support, water crossing spotters, and walkie-talkie communication.',
    duration: '5 Days / 4 Nights',
    difficulty: 'Moderate',
    price: '₹52,500',
    image: '/images/adventures/coastal-card.jpg',
    backgroundImage: '/images/adventures/coastal-hero.jpg',
    nextBatchDates: ['12th Aug 2026', '25th Sep 2026'],
    featured: true,
    gallery: [
      '/images/adventures/coastal-hero.jpg',
      '/images/adventures/coastal-card.jpg',
      '/images/adventures/sakleshpur-card.jpg',
      '/images/adventures/sakleshpur-chikmagalur.jpg',
    ],
    highlights: [
      'Private estate off-road trail driving through monsoon rainforests & tea gardens',
      'Scenic mountain ridge road drive along Amboli Ghat & Chorla Ghat passes',
      'Off-road stream crossings & hidden waterfall trail discovery',
      'Luxury 4-star beachfront resort stays in North/South Goa hinterlands',
      'Self-drive 4x4 convoy led by Plus530 professional support team',
      'Walkie-talkie radio setup, water crossing spotters & standby recovery',
    ],
    included: [
      '4 Nights accommodation in luxury estate lodges & 4-star beachfront resorts (Double Occupancy)',
      'All Breakfasts, Estate Trail Lunches & Seafood Dinner Barbecues',
      'Plus530 Lead 4x4 Support Vehicle & Certified Expedition Leader',
      'Water crossing spotters & standby recovery equipment',
      'Vehicle walkie-talkie radio setup for convoy communication',
      'All private estate trail access permits & taxes',
    ],
    itinerary: [
      { day: 1, title: 'Bangalore / Mumbai Assembly & Drive to Belgaum Foothills', description: 'Convoy assembly, vehicle briefing, walkie-talkie setup, drive to Western Ghats foothills hotel.' },
      { day: 2, title: 'Belgaum to Amboli Ghat & Private Estate Trail', description: 'Drive up misty Amboli Ghat pass, 4x4 estate trail driving through private tea and spice plantations.' },
      { day: 3, title: 'Amboli to North Goa Coastal Resort via Chorla Ghat', description: 'Scenic mountain ridge drive through Chorla Ghat rainforest down to North Goa beachfront resort.' },
      { day: 4, title: 'South Goa Coastal Trails & Secret Waterfalls', description: 'Off-road trail drive through South Goa hinterland forests and hidden natural pool waterfalls. Seafood beach dinner.' },
      { day: 5, title: 'Goa Beach Breakfast & Convoy Return', description: 'Farewell breakfast on the beach and return convoy drive back. Expedition flag-in.' },
    ],
  },
  {
    id: '9',
    slug: 'upper-mustang-expedition',
    type: 'car',
    title: 'Upper Mustang Forbidden Kingdom 4x4 Expedition',
    description: 'An epic 10-Day / 9-Night high-altitude expedition into the once-forbidden walled city of Lo Manthang near the Tibet border.',
    longDescription: 'Embark on an extraordinary 10-Day / 9-Night international 4x4 overland expedition into Nepal’s once-forbidden walled kingdom of Upper Mustang. Drive your 4x4 across Kali Gandaki river canyon (world\'s deepest gorge), ancient red cliff passes, 2,500-year-old Chhoser Sky Caves, and the historic walled capital of Lo Manthang (12,600 ft). Accompanied by Plus530 lead 4x4 support, high-altitude medical oxygen, Restricted Area Permits (RAP), and luxury mountain lodges.',
    duration: '10 Days / 9 Nights',
    difficulty: 'Difficult',
    price: '₹1,95,000',
    image: '/images/adventures/mustang-card.jpg',
    backgroundImage: '/images/adventures/mustang-hero.jpg',
    nextBatchDates: ['05th Oct 2026', '01st Nov 2026'],
    featured: true,
    gallery: [
      '/images/adventures/mustang-hero.jpg',
      '/images/adventures/mustang-card.jpg',
      '/images/adventures/nepal-card.jpg',
      '/images/adventures/nepal-2.jpg',
    ],
    highlights: [
      'Overland 4x4 drive into the walled city of Lo Manthang (12,600 ft)',
      'Cross Kali Gandaki River canyon (world\'s deepest gorge) & Muktinath temple',
      'Explore ancient cliffside cave monasteries & Sky Tombs of Chhoser',
      'Panoramas of Annapurna, Dhaulagiri & Nilgiri Himalayan ranges',
      'Self-drive 4x4 convoy led by Plus530 professional support team',
      'Walkie-talkie radio setup, high-altitude medical oxygen & standby recovery',
    ],
    included: [
      '9 Nights accommodation in luxury mountain lodges & boutique heritage resorts (Double Occupancy)',
      'All Breakfasts, Mountain Lodge Lunches & Gourmet Dinners',
      'Plus530 Lead 4x4 Support Vehicle & Certified Expedition Leader',
      'High-altitude medical oxygen & standby off-road recovery gear',
      'Vehicle walkie-talkie radio setup for convoy communication',
      'Special Restricted Area Permit (RAP) for Upper Mustang ($500 value) & ACAP permits',
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Kathmandu & Vehicle Briefing', description: 'Arrival in Kathmandu, 4x4 vehicle pickup, walkie-talkie setup, and welcome dinner in Thamel.' },
      { day: 2, title: 'Kathmandu to Pokhara (Lakeside Valley)', description: 'Drive along Prithvi highway to Pokhara lakeside city. Evening expedition briefing.' },
      { day: 3, title: 'Pokhara to Tatopani Hot Springs', description: 'Ascend into Myagdi valley along roaring Kali Gandaki river. Unwind in natural hot springs.' },
      { day: 4, title: 'Tatopani to Jomsom & Kagbeni', description: 'Drive through world\'s deepest gorge between Annapurna & Dhaulagiri into Kagbeni checkpost.' },
      { day: 5, title: 'Kagbeni to Ghami via Syangboche Pass (12,500 ft)', description: 'Enter Restricted Upper Mustang area, cross high passes and red cliff canyons to Ghami village.' },
      { day: 6, title: 'Ghami to Walled City of Lo Manthang (12,600 ft)', description: 'Drive past longest Mani wall in Nepal into historic walled capital of Lo Manthang.' },
      { day: 7, title: 'Lo Manthang & Chhoser Sky Caves (Tibet Border)', description: 'Off-road drive to 2,500-year-old Jhong Sky Caves of Chhoser and Kora La border pass.' },
      { day: 8, title: 'Lo Manthang to Muktinath & Marpha', description: 'Return drive via Muktinath sacred temple (12,172 ft) to apple orchard village of Marpha.' },
      { day: 9, title: 'Marpha to Pokhara Return Convoy', description: 'Descend back to Pokhara lakeside. Celebration dinner.' },
      { day: 10, title: 'Pokhara to Kathmandu Departure', description: 'Final highway drive back to Kathmandu for departure.' },
    ],
  },
  {
    id: '10',
    slug: 'ladakh-motorcycle-expedition',
    title: 'Ladakh Motorcycle Expedition',
    type: 'motorcycle',
    description: 'Ride through the world\'s highest motorable passes on two wheels across the stunning Ladakh region.',
    longDescription: 'Experience the raw thrill of riding through Ladakh on a powerful motorcycle. This 12-day expedition takes you across Khardung La, Chang La, and through the mesmerizing Nubra and Pangong landscapes. Ride alongside fellow bikers in a supported convoy with chase vehicle, mechanic, and medical support.',
    duration: '12 Days',
    difficulty: 'Challenging',
    price: '₹1,35,000',
    image: '/images/adventures/ladakh-card.jpg',
    backgroundImage: '/images/adventures/ladakh-1.jpg',
    nextBatchDates: ['01st Sep 2026', '20th Sep 2026'],
    featured: true,
    highlights: [
      'Ride over Khardung La (18,380 ft) and Chang La passes',
      'Motorcycle convoy with chase vehicle and mechanic support',
      'Camp under stars at Pangong Tso lakeside',
      'Ride through Nubra Valley sand dunes',
      'Experience Tibetan Buddhist culture in ancient monasteries',
      'Professional riding briefing and safety gear provided',
    ],
    included: [
      'Royal Enfield Himalayan 450 motorcycle (or equivalent)',
      'Fuel for entire expedition',
      'Chase vehicle with mechanic and spare parts',
      'Hotel and camping accommodations',
      'All meals during the expedition',
      'Inner line permits and medical oxygen kit',
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Leh & Bike Handover', description: 'Arrive in Leh, rest for acclimatization. Evening bike handover, safety briefing, and gear check.' },
      { day: 2, title: 'Leh Acclimatization Ride', description: 'Short acclimatization ride to Shanti Stupa and Magnetic Hill. Bike familiarization.' },
      { day: 3, title: 'Leh to Nubra Valley via Khardung La', description: 'Ride over Khardung La (18,380 ft) into Nubra Valley. Visit Diskit Monastery.' },
      { day: 4, title: 'Nubra Valley Exploration', description: 'Ride through sand dunes, visit hot springs at Panamik. Chase vehicle support on standby.' },
      { day: 5, title: 'Nubra to Pangong via Shyok Route', description: 'Epic riding day through Shyok Valley to the stunning Pangong Tso lake.' },
      { day: 6, title: 'Pangong Lake Rest Day', description: 'Full day at Pangong Lake. Bike maintenance and photography.' },
      { day: 7, title: 'Pangong to Leh via Chang La', description: 'Return ride crossing Chang La pass. Visit Hemis Monastery en route.' },
      { day: 8, title: 'Leh to Tso Moriri', description: 'Long ride to the remote Tso Moriri lake through Chumathang.' },
      { day: 9, title: 'Tso Moriri to Sarchu', description: 'Ride through high-altitude plains to Sarchu campsite.' },
      { day: 10, title: 'Sarchu to Manali via Rohtang', description: 'Ride through Baralacha La and cross Rohtang Pass into Manali.' },
      { day: 11, title: 'Manali Rest Day', description: 'Rest day in Manali. Optional activities, bike return, farewell dinner.' },
      { day: 12, title: 'Departure from Manali', description: 'Transfer to airport or continue onward journey.' },
    ],
  },
  {
    id: '11',
    slug: 'rajasthan-royal-motorcycle-tour',
    title: 'Rajasthan Royal Motorcycle Tour',
    type: 'motorcycle',
    description: 'Ride through the royal desert state of Rajasthan — historic forts, vibrant bazaars, and golden sand dunes on two wheels.',
    longDescription: 'Cruise through Rajasthan on a motorcycle convoy, exploring majestic forts of Jaipur, Jodhpur, and Jaisalmer, and riding across the Thar Desert to Sam Sand Dunes. This 8-day tour combines heritage palace stays with thrilling desert riding, supported by a chase vehicle and experienced ride captain.',
    duration: '8 Days',
    difficulty: 'Moderate',
    price: '₹78,000',
    image: '/images/adventures/rajasthan-card.jpg',
    backgroundImage: '/images/adventures/rajasthan-hero.jpg',
    nextBatchDates: ['01st Dec 2026', '15th Jan 2027'],
    featured: false,
    highlights: [
      'Ride through Jaipur, Jodhpur, and Jaisalmer historic fort cities',
      'Desert riding to Sam Sand Dunes with chase vehicle support',
      'Heritage palace and haveli accommodation',
      'Sunset desert ride and overnight glamping under the stars',
      'Professional ride captain leading the convoy',
      'Royal Rajasthani cuisine and cultural experiences',
    ],
    included: [
      'Royal Enfield Classic 350 motorcycle (or equivalent)',
      'Fuel for entire tour',
      'Chase vehicle with mechanic and luggage carrier',
      'Heritage hotel and desert glamping accommodations',
      'All breakfasts and select meals',
      'Fort entrance fees and desert safari permits',
    ],
    itinerary: [
      { day: 1, title: 'Jaipur Assembly & Bike Handover', description: 'Arrive in Jaipur, bike handover, safety briefing, and welcome dinner at heritage haveli.' },
      { day: 2, title: 'Jaipur to Pushkar', description: 'Ride through Ajmer hills to the sacred lakeside town of Pushkar.' },
      { day: 3, title: 'Pushkar to Jodhpur', description: 'Scenic ride across Aravalli foothills to the Blue City. Evening Mehrangarh Fort visit.' },
      { day: 4, title: 'Jodhpur to Jaisalmer', description: 'Long desert ride across the Thar to the Golden City of Jaisalmer.' },
      { day: 5, title: 'Jaisalmer Fort & Sam Sand Dunes Ride', description: 'Morning fort exploration. Afternoon convoy ride to Sam Sand Dunes for desert glamping.' },
      { day: 6, title: 'Jaisalmer to Bikaner', description: 'Desert highway ride to Bikaner, visit Junagarh Fort.' },
      { day: 7, title: 'Bikaner to Mandawa (Shekhawati)', description: 'Ride to the painted haveli region of Shekhawati. Farewell group dinner.' },
      { day: 8, title: 'Mandawa to Jaipur Return', description: 'Final ride back to Jaipur. Bike return and expedition flag-in.' },
    ],
  },
];

export function getAdventureBySlug(slug: string): Adventure | undefined {
  return adventures.find((adventure) => adventure.slug === slug);
}

export function getFeaturedAdventures(): Adventure[] {
  return adventures.filter((adventure) => adventure.featured);
}
