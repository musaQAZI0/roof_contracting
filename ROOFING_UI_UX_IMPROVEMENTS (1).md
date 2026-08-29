# Y&B Roofing Website — UI/UX Improvement Brief

Repository: `musaQAZI0/roof_contracting`  
Design direction: Clean, premium and conversion-focused, inspired by Copp Roofing & Construction without copying its content or visual identity.

## 1. Current Website Problems

- The homepage is visually basic and does not immediately communicate premium workmanship.
- The hero section has no roofing image, trust indicators or working inspection link.
- Navigation uses homepage anchors even when the visitor is on another page.
- The navigation is not suitable for mobile screens and has no menu button.
- About, Contact and FAQ pages do not share a navbar, footer or consistent page layout.
- Service cards use identical generic descriptions and contain no supporting imagery or icons.
- The site has no project gallery, work process, service-area information or meaningful trust section.
- The contact page does not include a proper enquiry form.
- Calls to action are inconsistent; some are buttons without any action.
- Typography, spacing and visual hierarchy need a more intentional design system.
- The current review claim should be verified before publishing.

## 2. Recommended Visual Direction

Use a restrained contractor-style design system:

| Element | Recommendation |
|---|---|
| Primary color | Deep navy, such as `#153865` |
| Accent color | Roofing orange, such as `#EF6C23` |
| Light background | Warm off-white, such as `#F6F3ED` |
| Main text | Dark blue-grey, such as `#152038` |
| Typography | Bold geometric sans-serif headings with a highly readable body font |
| Corners | Minimal rounding; use 0–4px for a more architectural appearance |
| Photography | Real team, roofing process, finished roofs and before/after images |
| Animation | Subtle hover, reveal and navigation transitions only |

Avoid excessive gradients, glassmorphism, oversized rounded cards, generic stock photos and unnecessary animation.

## 3. Homepage Structure

### Header

- Add a compact Y&B Roofing logo area.
- Use navigation links for Services, Projects, About, FAQ and Contact.
- Add a high-contrast phone CTA: `(773) 495-2021`.
- Make the header sticky after scrolling.
- Add an accessible hamburger menu on tablet and mobile.
- Use proper Next.js routes such as `/about` and `/contact`; use `/#services` only for homepage sections.

### Hero Section

- Use a full-width, high-quality roofing or team photograph with a dark overlay.
- Recommended headline: **Quality roofing. Built to protect.**
- Supporting copy should mention Chicago, residential and commercial roofing, and the main customer benefit.
- Include two clear actions:
  - `Get a Free Inspection`
  - `Call (773) 495-2021`
- Add three short trust indicators below the buttons:
  - Residential and commercial
  - Free inspections
  - Local Chicago team
- Keep important content visible above the fold on desktop and mobile.

### Company Introduction

- Use a two-column image-and-copy layout.
- Explain what differentiates Y&B Roofing instead of repeating a generic company description.
- Include concise benefit points such as:
  - Clear project scopes
  - Responsive communication
  - Quality-focused workmanship
  - Clean, respectful jobsites

### Services

- Present six service cards:
  1. Roof Repair
  2. Roof Replacement
  3. Residential Roofing
  4. Commercial Roofing
  5. Storm Damage Repair
  6. Roof Inspection
- Give every service a unique icon, description and `Request Service` link.
- Each card should lead to a dedicated service page eventually.
- Use a three-column desktop grid, two columns on tablet and one column on mobile.

### Why Choose Y&B

- Add a trust-focused section explaining the practical customer experience.
- Do not publish invented certifications, review counts, warranties or years of experience.
- Use only facts confirmed by the business owner.
- Possible verified trust signals include licence/insurance status, manufacturer certifications, local experience, warranties and real ratings.

### Project Gallery

- Add at least six real projects.
- Show project type, location, roofing material and scope.
- Provide before/after comparisons where available.
- Use consistent image ratios and optimized WebP or AVIF files.
- Avoid using residential interior photos as roofing-project imagery.

### Work Process

Show a simple four-step journey:

1. Request an inspection
2. Receive an assessment and scope
3. Approve scheduling and materials
4. Installation and final walkthrough

This reduces uncertainty and makes the next step clear.

### Testimonials

- Use real customer reviews with permission.
- Show the customer name or initials, location and original review platform when available.
- Link to the verified Google Business profile.
- Remove `4.9 Google Rating` and `172+ Verified Reviews` unless these figures are current and verifiable.

### Final CTA and Footer

- Finish with a bold orange or navy inspection CTA.
- Footer should include phone, email, address, service areas and key pages.
- Add Privacy Policy and Terms links.
- Ensure the email shown is a confirmed, working company address.

## 4. Inner Pages

### About Page

- Add the global header and footer.
- Include the company story, approach, team photos and verified credentials.
- Explain the customer experience rather than using one short generic paragraph.

### Contact Page

- Include a proper enquiry form with name, phone, email, service type, address and message.
- Add click-to-call contact information and business hours.
- Include a service-area map only if it helps customers determine eligibility.
- Connect the form to a real endpoint or form service and show success/error states.

### FAQ Page

- Use accessible accordion components.
- Cover inspection, repair versus replacement, leaks, storm damage, timelines, estimates, warranties and service areas.
- Add FAQ structured data only when the questions and answers are visible on the page.

### Service Pages

Create individual SEO-focused pages for every primary service. Each page should include the problem, solution, process, project examples, FAQs and a relevant inspection CTA.

## 5. Mobile UX Requirements

- Use a hamburger navigation with large tap targets.
- Keep the phone or inspection action easy to reach.
- Use a minimum body-text size of 16px.
- Avoid placing two long CTA buttons side by side on narrow screens.
- Prevent horizontal overflow at 320px width.
- Keep form fields large enough for touch input.
- Test menus, accordions, phone links and forms with keyboard and touch controls.

## 6. Accessibility

- Maintain WCAG AA color contrast.
- Add visible keyboard focus states.
- Use one descriptive `<h1>` per page and logical heading levels.
- Add meaningful alternative text to informative images.
- Treat decorative images as decorative rather than giving them keyword-heavy alt text.
- Give the mobile menu an accessible name and correct expanded state.
- Associate every form input with a visible label.
- Respect `prefers-reduced-motion` for animation.

## 7. Performance and Technical Improvements

- Use `next/image` for local project and team photographs.
- Provide explicit image dimensions to reduce layout shift.
- Compress images and serve WebP/AVIF versions.
- Avoid using `next: latest` and other unpinned production dependencies; use tested version ranges.
- Add loading, error and success states to the contact form.
- Validate the site with Lighthouse on mobile and desktop.
- Target a mobile Lighthouse score above 90 for Performance, Accessibility, Best Practices and SEO.
- Test all routes with `npm run build` before deployment.

## 8. SEO and Local Conversion

- Create unique titles and meta descriptions for every page.
- Add accurate RoofingContractor/LocalBusiness schema.
- Add verified opening hours, URL and geographical service area to structured data.
- Link the address to the business's map listing.
- Create useful location pages only for places genuinely served.
- Add Open Graph metadata and a branded sharing image.
- Keep `robots.ts` and `sitemap.ts`, but verify that they use the correct production domain.
- Add conversion measurement for phone clicks and successful inspection requests.

## 9. Content and Asset Checklist

Collect these items before final development:

- Original logo in SVG format
- Confirmed phone number and email
- Business hours
- Exact service areas
- Licence and insurance information
- Manufacturer or trade certifications
- Warranty details
- Real Google Business profile URL
- Real customer reviews
- Team and onsite photographs
- Six or more completed project sets
- Before/after images
- Privacy policy text

## 10. Implementation Priority

### Phase 1 — Essential

- Global responsive navigation and footer
- New hero with clear CTAs
- Improved service cards
- Functional contact form
- Consistent About, FAQ and Contact pages
- Mobile and accessibility fixes

### Phase 2 — Trust and Conversion

- Real project gallery
- Verified testimonials and credentials
- Work-process section
- Service-area information
- Analytics and conversion tracking

### Phase 3 — Growth

- Dedicated service pages
- Genuine location pages
- Case studies and before/after projects
- Ongoing local SEO content

## Success Criteria

The redesigned site should let a new visitor understand within five seconds:

1. What Y&B Roofing does
2. Where the company works
3. Why the company can be trusted
4. How to call or request an inspection

The final result should feel established, local and professional, with the clean project-led presentation of Copp Roofing while remaining distinctly Y&B Roofing.
