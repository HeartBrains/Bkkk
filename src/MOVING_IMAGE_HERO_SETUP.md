# Moving Image Hero Image Setup Guide

## What Changed

The **MovingImageDetailPage** has been updated to use a **single static hero image** instead of an image carousel.

### Before (Carousel)
- Used `Carousel` component with multiple images
- Had thumbnail navigation dots
- Required carousel state management
- Images from `movingImageGalleries` data

### After (Single Image)
- Single static hero image
- No carousel/slider functionality
- Cleaner, simpler code
- Uses Figma virtual asset import

---

## File Changes

### 1. MovingImageDetailPage.tsx

**Removed:**
```tsx
// ❌ Removed imports
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '../ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { movingImageGalleries } from '../../utils/movingImageGalleryData';

// ❌ Removed state
const [api, setApi] = useState<CarouselApi>()
const [current, setCurrent] = useState(0)
const thumbnailsRef = useRef<HTMLDivElement>(null);

// ❌ Removed carousel logic
useEffect(() => {
  if (!api) return
  setCurrent(api.selectedScrollSnap())
  api.on("select", () => setCurrent(api.selectedScrollSnap()))
}, [api])

// ❌ Removed gallery images
const galleryImages = gallery && gallery.length > 0 ? gallery.slice(0, 5) : [];
```

**Added:**
```tsx
// ✅ Added import for static hero image (using Figma virtual asset)
import movingImageHero from 'figma:asset/429c8ad61cdb4d502462d129e377fe4faf35abf2.png';

// ✅ Simplified hero section
<div className="h-[35vh] md:h-[80vh] w-full relative overflow-hidden bg-black">
  <img
    src={movingImageHero}
    alt="Moving Image Program"
    className="w-full h-full object-cover opacity-90"
    loading="eager"
  />
  
  {/* Back Button */}
  <div className="absolute bottom-8 left-6 md:left-12 z-20">
    <button onClick={() => onNavigate?.('moving-image')}>
      {/* ... back button content ... */}
    </button>
  </div>
</div>
```

---

## Figma Virtual Asset Import

**Current Implementation:**
```tsx
import movingImageHero from 'figma:asset/429c8ad61cdb4d502462d129e377fe4faf35abf2.png';
```

**Important Notes:**
- ⚠️ `figma:asset` is a **virtual module scheme** provided by Figma Make
- **NOT a file path** - no need to create a physical file
- The asset is served by Figma's infrastructure
- This approach works seamlessly in the Figma Make environment

### Virtual Module Scheme Explanation

```tsx
// ✅ CORRECT: Virtual module (no path prefix needed)
import img from "figma:asset/abc123.png"

// ❌ WRONG: Don't add relative paths to virtual modules
import img from "./figma:asset/abc123.png"
import img from "../../assets/figma:asset/abc123.png"
```

The `figma:asset` scheme is special - it's handled by Figma Make's build system and doesn't refer to a file in your project directory.

---

## No Setup Required! ✅

Unlike traditional static assets, **you don't need to:**
- ❌ Download the image file
- ❌ Create an `/assets` directory
- ❌ Manually save any files
- ❌ Configure import paths

The image is **automatically available** through the `figma:asset` virtual module.

---

## Benefits of Single Image Approach

✅ **Simplicity**: No carousel state management  
✅ **Performance**: Single image loads faster  
✅ **Maintenance**: Easier to update one image  
✅ **Consistency**: Same hero across all Moving Image programs  
✅ **Mobile-Friendly**: No complex touch interactions needed  
✅ **Accessibility**: Simpler structure for screen readers  

---

## Reverting to Carousel (If Needed)

If you need to restore the carousel functionality:

1. Restore the old `MovingImageDetailPage.tsx` from git history
2. Or manually add back:
   - Carousel imports
   - State management (`useState`, `useEffect`)
   - Carousel JSX structure
   - Thumbnail navigation

---

## Related Files

- `/components/pages/MovingImageDetailPage.tsx` - Updated component
- `/assets/images/README.md` - Assets documentation
- `/utils/movingImageData.ts` - Program metadata (unchanged)

---

## Next Steps

1. ✅ Test all Moving Image detail pages
2. ✅ Optimize image if needed (compression, format)
3. ✅ Consider adding more hero images for variety (optional)

---

**Ready to use!** Once you save the image file, the Moving Image Program detail pages will display the single hero image instead of the carousel.