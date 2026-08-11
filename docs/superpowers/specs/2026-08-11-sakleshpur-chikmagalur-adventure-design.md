# Design Specification: Sakleshpur & Chikmagalur 3D2N Luxury Overland Expedition

**Date**: 2026-08-11
**Status**: Approved by User

## Overview
Add a new 3-Day / 2-Night luxury overland expedition from Bangalore to Sakleshpur & Chikmagalur (Scheduled travel dates: Oct 2 – Oct 4, 2026) to the Plus530 Adventure website catalog.

The trip features 4-star resort accommodation, a participant BYO 4x4 / AWD vehicle convoy led by Plus530's lead support vehicle, off-road coffee estate trails, high-altitude peak drives, and gourmet dining.

## Data Structure Changes (`data/adventures.ts`)
Add a new `Adventure` entry to the `adventures` array in `data/adventures.ts`:

- **id**: `'4'`
- **slug**: `'sakleshpur-chikmagalur-luxury-overland'`
- **title**: `'Sakleshpur & Chikmagalur Western Ghats Luxury Overland'`
- **description**: `'A 3-Day / 2-Night luxury self-drive convoy through tea estates, misty peaks, and off-road trails of Sakleshpur & Chikmagalur with 4-star resort stays.'`
- **longDescription**: `'Embark on a premium 3-Day / 2-Night Western Ghats overland expedition from Bangalore to Sakleshpur and Chikmagalur (Oct 2 – Oct 4, 2026). Drive your own 4x4 or AWD SUV behind our expert lead support vehicle, exploring private coffee plantations, mountain passes, and waterfalls, while unwinding each evening in handpicked 4-star luxury resorts.'`
- **duration**: `'3 Days / 2 Nights'`
- **difficulty**: `'Moderate'`
- **price**: `'₹38,500'`
- **image**: `'/images/adventures/sakleshpur-chikmagalur.jpg'`
- **backgroundImage**: `'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070'`
- **featured**: `true`
- **highlights**:
  - `'4-Star Luxury Resort stays in Sakleshpur & Chikmagalur'`
  - `'Self-drive convoy led by Plus530 professional 4x4 support team'`
  - `'Private coffee & tea estate off-road trail drive'`
  - `'Sunset drive to Mullayanagiri Peak (Karnataka\'s highest peak)'`
  - `'Explore Baba Budangiri & estate waterfalls'`
  - `'Walkie-talkie communication sets & full recovery support'`
- **included**:
  - `'2 Nights stay in 4-Star Luxury Resorts (Double Occupancy)'`
  - `'All meals (Breakfasts, Highway & Estate Lunches, Gourmet Dinners)'`
  - `'Plus530 Lead 4x4 Support Vehicle & Experienced Expedition Leader'`
  - `'Off-road spotters & recovery equipment on standby'`
  - `'Vehicle walkie-talkie radio setup for convoy communication'`
  - `'All trail permits, estate access fees, and taxes'`
- **itinerary**:
  - **Day 1 (Oct 2)**:
    - *title*: `'Bangalore to Sakleshpur: Highway Cruise & Estate Off-Road Trail'`
    - *description*: `'Convoy assembly in Bangalore at 6:00 AM. Scenic highway drive to Sakleshpur. Check-in at 4-star luxury estate resort. Afternoon off-road 4x4 trail through private coffee plantations and hidden stream crossings. Evening welcome dinner & briefing.'`
  - **Day 2 (Oct 3)**:
    - *title*: `'Sakleshpur to Chikmagalur: Ghats Ridge Drive & Mullayanagiri Peak'`
    - *description*: `'Morning ridge road drive from Sakleshpur to Chikmagalur. Check-in at luxury hill resort. Afternoon ascent up Mullayanagiri Peak and Baba Budangiri. High-altitude tea tasting and estate dinner under the stars.'`
  - **Day 3 (Oct 4)**:
    - *title*: `'Chikmagalur Coffee Trails & Return to Bangalore'`
    - *description*: `'Morning coffee estate walk and tea plantation trail. Farewell convoy lunch in Chikmagalur. Scenic return drive to Bangalore, arriving by 8:00 PM.'`

## Static Assets
- Store generated trip cover image at `public/images/adventures/sakleshpur-chikmagalur.jpg`.

## Verification Criteria
- `pnpm dev` serves `/adventures/sakleshpur-chikmagalur-luxury-overland` with full details, itinerary, inclusions, highlights, and cover image.
- Homepage (`/`) and Adventures catalog (`/adventures`) display the new trip in featured grid.
- `pnpm build` succeeds with zero TypeScript errors or lint issues.
