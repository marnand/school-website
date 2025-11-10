# Design Guidelines — Colégio Sagrado Coração de Jesus

## Design Approach
**Reference-Based Approach**: Draw inspiration from modern educational institutions and welcoming service brands that balance professionalism with warmth. The design should feel human-centered, accessible, and trustworthy while incorporating contemporary digital education aesthetics.

## Visual Identity

### Color Palette
- **Primary**: Blue tones (confidence and trust)
- **Secondary**: White (clarity and cleanliness)
- **Accent**: Soft gold (excellence and spirituality)
- Use colors to convey warmth, faith, and educational excellence

### Typography
- **Headings**: Elegant, modern serif or refined sans-serif
- **Body**: Clean, highly legible sans-serif
- **Hierarchy**: Clear distinction between heading levels
- Font sizes should scale appropriately for mobile-first experience

### Tone & Style
- Welcoming, modern, light, and human
- Inspirational and empathetic language
- Avoid technical jargon
- Focus on emotional connection with families

## Layout System

### Spacing
Use Tailwind units: **2, 4, 6, 8, 12, 16** for consistent rhythm
- Section padding: py-16 to py-24 (desktop), py-12 (mobile)
- Card spacing: p-6 to p-8
- Element gaps: gap-4, gap-6, gap-8

### Grid Strategy
- Hero: Full-width with centered content, max-w-6xl container
- Features: 3-column grid (lg:grid-cols-3, md:grid-cols-2, grid-cols-1)
- Testimonials: 2-column layout (md:grid-cols-2)
- Content sections: max-w-5xl for optimal readability

## Page Structure & Components

### Header
- School logo (left)
- Navigation menu (center/right)
- Prominent CTA button: "Agende uma Visita" (right)
- Sticky navigation on scroll
- Mobile: Hamburger menu

### Hero Section (Home)
- **Large, impactful image**: Happy students, teachers interacting, or school campus
- **Headline**: "Educar com amor, formar para a vida"
- **Subheadline**: Brief value proposition
- **Primary CTA**: "Agende uma Visita"
- Height: 80vh to 90vh for impact

### Key Sections

**Differentials Section** (4-column grid on desktop)
- Icon + Title + Short description cards
- Highlights: Individual attention, human values, technology, committed teachers
- Use soft shadow cards with hover lift effect

**Testimonials**
- Parent and student quotes with photos
- 2-column grid with authentic imagery
- Include name and relationship (e.g., "Mãe de aluno do 5º ano")

**Courses/Segments**
- Visual cards for each level: Educação Infantil, Fundamental I/II, Ensino Médio
- Age-appropriate imagery
- Brief description + "Saiba mais" link

**Innovation & Technology**
- Icons for Google for Education, robotics, sustainability
- Split layout: content on one side, supporting image on other
- Emphasize modern pedagogy while maintaining warmth

**Contact & Visit**
- Form: Name, Email, Phone, Message, Child's Age
- Google Maps integration
- WhatsApp button (floating or inline)
- Office hours and response time

### Footer
- Multi-column layout (4 columns desktop, stack on mobile)
- Quick links, contact info, social media
- Newsletter signup form
- Privacy policy and institutional links

## Images Strategy

### Required Images
1. **Hero**: Large, high-quality photo of students in classroom or school environment
2. **About Us**: Team photos, campus facilities
3. **Testimonials**: Parent and student headshots
4. **Segments**: Age-appropriate student photos for each education level
5. **Gallery**: Authentic school photos (classrooms, activities, events)

### Image Treatment
- Professional quality with natural lighting
- Real students and teachers (no stock photos if possible)
- Warm color grading to match brand
- Images should show interaction, smiling faces, active learning

## Interactions

### Buttons
- Primary CTA: Solid background with subtle hover scale (1.02)
- Buttons on images: Blurred background (backdrop-blur-sm) with white/light text
- No complex hover states on image overlays
- All buttons have consistent padding (px-6 to px-8, py-3 to py-4)

### Cards
- Subtle shadow: shadow-md
- Hover: Slight lift with increased shadow
- Rounded corners: rounded-lg or rounded-xl
- Smooth transitions (transition-all duration-300)

### Minimal Animations
- Fade-in on scroll (very subtle)
- Smooth transitions between states
- Avoid distracting motion

## Accessibility
- High contrast text on all backgrounds
- Focus states clearly visible
- Form labels always present
- Touch targets minimum 44x44px
- Alt text for all images

## Mobile-First Considerations
- Stack all multi-column layouts on mobile
- Navigation collapses to hamburger menu
- Form fields full-width on mobile
- Touch-friendly button sizes
- Optimized image sizes for mobile bandwidth

## CTAs & Messaging
- "Agende uma visita e descubra uma escola onde cada aluno é único"
- "Aprender com afeto, crescer com propósito"
- "Tradição, fé e inovação educando juntos"
- "Venha fazer parte da nossa família!"

## Key Success Metrics
- Clear path to "Agendar Visita" on every page
- Maximum 2 clicks to contact form
- Emotional connection through authentic imagery
- Trust-building through testimonials and transparency