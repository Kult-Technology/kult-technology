

## Version C — Dark Mode Landing Page

A sleek, premium dark theme that gives Kult Technology a sophisticated tech-forward presence while maintaining the centered, minimal layout you prefer from Version A.

---

### Version Comparison

| Aspect | Version A | Version C (New) |
|--------|-----------|-----------------|
| Background | White/light gray | Near-black (#0A0A0A) |
| Typography | Black text | White/gray text |
| Logo treatment | Standard | Inverted or white version |
| Accents | None | Subtle glow effects |
| Animation | Fade-in up | Fade-in with soft glow pulse |
| Overall feel | Clean, airy | Premium, mysterious |

---

### Design Details

**Color Palette:**
- Deep black background (#0A0A0A or #0D0D0D)
- Pure white for headings
- Soft gray (#9A9A9A) for body text
- Optional: subtle accent color for the email link hover

**Visual Elements:**
- Same centered layout as Version A
- Subtle gradient overlay or vignette for depth
- Email link with a soft glow on hover
- Optional: very subtle grid pattern or noise texture

**Animation Enhancements:**
- Same staggered fade-in timing as Version A
- Add a subtle glow/pulse effect on the logo
- Email link with smooth color transition on hover

---

### Technical Implementation

1. **Create new page component** (`src/pages/IndexV3.tsx`)
   - Dark background with white/gray typography
   - Same layout structure as Version A
   - Refined hover states for dark theme

2. **Add new animation** to Tailwind config:
   - `glow-pulse`: Subtle pulsing glow effect for premium feel

3. **Update version toggle** to include Version C option
   - Modify `VersionToggle.tsx` to support three versions

4. **Handle logo visibility:**
   - If current logo works on dark background, use as-is
   - If not, apply CSS filter to invert/brighten it

---

### What You'll Get

The toggle will now show three options:
- **Version A**: Light, centered, minimal
- **Version B**: Light, asymmetric, editorial  
- **Version C**: Dark, centered, premium

You can compare all three and pick your favorite.

