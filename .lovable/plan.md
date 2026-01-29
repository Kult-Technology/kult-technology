

## Alternative Landing Page — Version B

A different take on the Kult Technology landing page with a more editorial, asymmetric layout and refined visual touches.

---

### Current Version (A) vs New Version (B)

| Aspect | Version A (Current) | Version B (Alternative) |
|--------|---------------------|------------------------|
| Layout | Centered, vertical stack | Asymmetric, editorial grid |
| Logo position | Top center | Left-aligned, larger |
| Animation | Staggered fade-in up | Slide-in from sides + blur reveal |
| Typography | Single weight | Mixed weights, larger contrast |
| Whitespace | Generous, balanced | Dramatic, intentional gaps |
| Footer | Bottom center | Integrated with content |

---

### Version B Design Details

**Layout Approach:**
- Split-screen aesthetic with logo on the left side
- Tagline and intro text on the right, creating visual tension
- More dramatic use of negative space
- Content positioned toward the upper-third (less perfectly centered)

**Visual Elements:**
- Larger logo (takes up more visual real estate)
- Bolder tagline with tighter letter-spacing
- A subtle horizontal line or geometric divider
- Email link styled as a minimal button or pill

**Animation Style:**
- Logo slides in from left with a blur-to-sharp effect
- Text elements slide in from right
- Creates a "meeting in the middle" dynamic
- Slightly faster, more energetic feel

**Color Enhancement:**
- Same light theme base
- Add a subtle warm gray (#F8F8F6) background tint
- Slightly softer black for text (charcoal tone)

---

### Technical Implementation

1. **Create a new page component** (`src/pages/IndexV2.tsx`) with the alternative design

2. **Add new animations** to Tailwind config:
   - `slide-in-left`: Elements entering from the left
   - `slide-in-right`: Elements entering from the right  
   - `blur-in`: Blur-to-focus reveal effect

3. **Add a version toggle** in the current page so you can switch between Version A and Version B to compare them side-by-side

4. **Layout structure:**
   - Desktop: Two-column grid layout
   - Mobile: Stacked layout (logo top, content below) with left-aligned text

---

### What You'll Get

After implementation, you'll see a toggle button in the corner of the page that lets you switch between:
- **Version A**: The current centered, minimal design
- **Version B**: The new asymmetric, editorial design

This way you can compare both in real-time and choose your favorite.

