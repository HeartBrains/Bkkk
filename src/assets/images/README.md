# Assets Directory

This directory contains static image assets for the Bangkok Kunsthalle website.

## Images

### moving-image-hero.png
- **Usage**: Hero image for Moving Image Program detail pages
- **Dimensions**: Original aspect ratio maintained
- **Source**: Figma asset ID: 429c8ad61cdb4d502462d129e377fe4faf35abf2
- **Description**: Black and white image of a screening room with silhouettes of people sitting and watching projected images

## Directory Structure

```
/assets
  /images
    - moving-image-hero.png  (Main hero image for Moving Image programs)
    - README.md              (This file)
```

## Usage in Code

```tsx
import movingImageHero from '../../assets/images/moving-image-hero.png';

<img src={movingImageHero} alt="Moving Image Program" />
```
