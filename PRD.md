# Planning Guide

A landing page for XARELA Asociación, a social organization focused on creating networks of opportunity for vulnerable populations through training, guidance, and support.

**Experience Qualities**:
1. **Professional** - Clean, structured layout that communicates credibility and organizational maturity
2. **Welcoming** - Warm color palette and approachable typography that invites engagement
3. **Dynamic** - Animated decorative elements that add visual interest without overwhelming content

**Complexity Level**: Content Showcase (information-focused) - This is a hero landing page that presents the organization's mission and core call-to-actions for visitors to learn more or engage with open opportunities.

## Essential Features

**Hero Section with Navigation**
- Functionality: Full-width hero with prominent headline, description, and CTAs
- Purpose: Immediately communicate organizational mission and drive action
- Trigger: Page load
- Progression: User views headline → reads description → clicks CTA
- Success criteria: Clear value proposition, accessible navigation, functional CTA buttons

**Animated Decorative Bars**
- Functionality: Floating horizontal bars in brand colors with subtle animation
- Purpose: Add visual dynamism and reinforce brand identity
- Trigger: Page load with staggered animations
- Progression: Bars animate in → float subtly → create depth
- Success criteria: Smooth animations that enhance rather than distract

**Navigation Menu**
- Functionality: Horizontal menu with multiple sections
- Purpose: Enable navigation to different site areas
- Trigger: User interaction with nav items
- Progression: Hover → visual feedback → click → navigation
- Success criteria: Clear hover states, responsive behavior

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
