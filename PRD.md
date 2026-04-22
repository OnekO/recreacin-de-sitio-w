# Planning Guide

A comprehensive multi-page website for XARELA Asociación, a social organization focused on creating networks of opportunity for vulnerable populations through training, guidance, and support.

**Experience Qualities**:
1. **Professional** - Clean, structured layout that communicates credibility and organizational maturity
2. **Welcoming** - Warm color palette and approachable typography that invites engagement
3. **Dynamic** - Animated decorative elements that add visual interest without overwhelming content

**Complexity Level**: Light Application (multiple features with basic state) - This is a multi-page website with client-side routing, featuring comprehensive information about the organization across 9 distinct pages including home, about, areas, opportunities, notices, events, resources, membership, and contact.

## Essential Features

**Multi-Page Navigation System**
- Functionality: React Router-based navigation with 9 pages (Home, About, Areas, Convocatorias, Avisos, Eventos, Recursos, Hazte socia, Contacto)
- Purpose: Enable users to explore comprehensive organization information
- Trigger: User clicks navigation links
- Progression: Click nav item → route changes → new page loads → active state updates
- Success criteria: Smooth page transitions, active link highlighting, mobile-responsive hamburger menu

**Home Page - Hero Section**
- Functionality: Full-width hero with animated decorative bars, headline, description, and CTAs
- Purpose: Immediately communicate organizational mission and drive action
- Trigger: Page load
- Progression: User views headline → reads description → clicks CTA to navigate
- Success criteria: Clear value proposition, animated bars, functional navigation to Convocatorias and Areas

**About Page**
- Functionality: Organization history, mission, values, and community commitment
- Purpose: Build trust and communicate organizational credibility
- Trigger: Navigation from menu
- Progression: User reads history → explores value cards → understands commitment
- Success criteria: Clear information hierarchy, engaging value proposition cards

**Areas Page**
- Functionality: 6 service areas with detailed descriptions and service lists
- Purpose: Communicate comprehensive support offerings
- Trigger: Navigation from menu or home page CTA
- Progression: User browses area cards → understands services → identifies relevant support
- Success criteria: Clear categorization, visual distinction between areas, comprehensive service details

**Convocatorias Page**
- Functionality: Listing of open and upcoming opportunities with filtering by status
- Purpose: Drive engagement with available programs
- Trigger: Navigation from menu or home page CTA
- Progression: User views opportunities → reads details → clicks to register
- Success criteria: Clear status badges, detailed requirements, prominent registration CTAs

**Avisos Page**
- Functionality: Important notices categorized by type (important, news, information)
- Purpose: Keep community informed about updates
- Trigger: Navigation from menu
- Progression: User scans notices → reads relevant updates → stays informed
- Success criteria: Visual type distinction, chronological ordering, clear notification subscription CTA

**Eventos Page**
- Functionality: Upcoming events with full details and registration
- Purpose: Build community engagement and participation
- Trigger: Navigation from menu
- Progression: User browses events → finds relevant activity → registers
- Success criteria: Visual event cards, comprehensive event details, registration CTAs

**Recursos Page**
- Functionality: Downloadable resources organized by category and external links
- Purpose: Provide valuable tools and information access
- Trigger: Navigation from menu
- Progression: User finds resource → downloads or accesses link → utilizes material
- Success criteria: Clear categorization, download buttons, working external links

**Hazte Socia Page**
- Functionality: Membership benefits display and registration form
- Purpose: Drive membership growth and community building
- Trigger: Navigation from menu
- Progression: User learns benefits → fills form → submits membership request
- Success criteria: Compelling benefits list, complete form fields, clear pricing, submission functionality

**Contacto Page**
- Functionality: Contact form, organization information, and location
- Purpose: Enable direct communication with organization
- Trigger: Navigation from menu
- Progression: User fills contact form → submits inquiry → receives confirmation
- Success criteria: Complete contact information, functional form, location display

## Edge Case Handling
- **Mobile responsiveness**: Navigation collapses to hamburger menu, bars scale appropriately
- **Long text content**: Typography scales properly, maintains readability
- **Reduced motion preferences**: Decorative animations respect user preferences
- **Small screens**: Content stacks vertically, maintains visual hierarchy

## Design Direction
The design should evoke trust, warmth, and forward momentum - balancing professional credibility with approachable humanity.

## Color Selection
The design uses a bold combination of deep navy blue and vibrant orange to create strong contrast and energy.

- **Primary Color**: Deep Navy Blue (oklch(0.32 0.08 255)) - Communicates professionalism, stability, and trust
- **Secondary Colors**: 
  - Vibrant Orange (oklch(0.68 0.18 50)) - Energy, optimism, and action
  - Light background (oklch(0.98 0.01 85)) - Clean, spacious feel
- **Accent Color**: Vibrant Orange (oklch(0.68 0.18 50)) - High contrast for CTAs and important elements
- **Foreground/Background Pairings**: 
  - Navy background (oklch(0.32 0.08 255)): White text (oklch(0.98 0 0)) - Ratio 9.2:1 ✓
  - Orange accent (oklch(0.68 0.18 50)): Navy text (oklch(0.32 0.08 255)) - Ratio 4.9:1 ✓
  - White background (oklch(0.98 0.01 85)): Navy text (oklch(0.32 0.08 255)) - Ratio 10.8:1 ✓

## Font Selection
Typography should balance modern professionalism with approachable warmth, using bold weights for impact and clean sans-serif for readability.

- **Primary Font**: Montserrat - Bold geometric sans-serif that communicates strength and modernity
- **Typographic Hierarchy**: 
  - H1 (Hero Headline): Montserrat ExtraBold/72px/tight letter spacing (-0.02em)/uppercase for key words
  - Subtitle: Montserrat Medium/14px/wide letter spacing (0.15em)/uppercase
  - Body (Description): Montserrat Regular/18px/relaxed line height (1.6)
  - Buttons: Montserrat SemiBold/16px/normal letter spacing

## Animations
Animations should create a sense of weaving connections - decorative bars float and drift to suggest networks being built, while maintaining subtlety to keep focus on content.

- Decorative bars: Staggered fade-in on load with subtle continuous floating motion
- Buttons: Scale and color transition on hover for tactile feedback
- Navigation: Smooth underline slide effect on hover

## Component Selection
- **Components**: 
  - Button (shadcn) - Primary CTA with custom orange styling, secondary with outline variant
  - Card (shadcn) - White content container with rounded corners and subtle shadow
  - Navigation Menu (custom) - Horizontal nav bar with logo and links
- **Customizations**: 
  - Decorative bar component - Custom SVG/div elements with framer-motion animations
  - Hero layout - Custom grid with asymmetric content placement
- **States**: 
  - Buttons: Default (solid orange), Hover (darker orange with scale), Active (pressed state)
  - Nav links: Default (navy), Hover (orange underline), Active (orange text)
- **Icon Selection**: 
  - Sun/rays icon for logo (custom or from Phosphor)
  - Arrow right for CTA buttons (ArrowRight from Phosphor)
- **Spacing**: 
  - Container padding: px-8 lg:px-16
  - Section spacing: py-20 lg:py-28
  - Element gaps: gap-6 for button groups, gap-4 for text elements
- **Mobile**: 
  - Navigation: Hamburger menu with slide-in drawer
  - Hero: Single column stack, reduced font sizes (H1 to 48px)
  - Decorative bars: Fewer bars visible, adjusted positioning
