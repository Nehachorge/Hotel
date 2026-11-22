# Image Directory Guide - Tamhini Valley Retreat

This directory structure is prepared for your real property photos:

```
images/
├── hero/        <- Main hero panoramic photograph (recommended: 1920x1080px, landscape, misty valley)
├── rooms/       <- Room photos (recommended: 800x600px, cozy natural lighting, clean beds)
│   ├── standard.jpg
│   ├── deluxe.jpg
│   ├── valley-view.jpg
│   ├── family.jpg
│   └── cottage.jpg
├── restaurant/  <- Dining room, thali, snacks, tea, garden seating (recommended: 800x600px)
├── nature/      <- Waterfalls, monsoon roads, hills, viewpoints, bonfire (recommended: 800x600px)
└── gallery/     <- Masonry gallery images (800x600px or 1200x800px)
```

## How to use local photos instead of temporary Unsplash links:
1. Copy your photos into the appropriate folders above.
2. Open any `.html` file (e.g. `index.html`, `rooms.html`).
3. Find the comment:
   `<!-- TEMPORARY IMAGE - REPLACE WITH PROPERTY PHOTO -->`
4. Replace the `src="..."` attribute with the local path, e.g.:
   `src="images/rooms/deluxe.jpg"`
