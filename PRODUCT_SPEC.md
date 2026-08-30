# By JTT Game Community Platform — Product Contract

## Purpose
Build a reusable game-community platform with Modern Warfare 4 as the first live vertical, designed for fast discovery, build creation, sharing and community participation.

## Hard engineering rule: reuse before invention
Before adding any dependency or writing a subsystem, inspect whether a stable, maintained and licence-compatible implementation already exists in the repository, GitHub ecosystem, framework, Vercel/Supabase platform primitives, or another freely available source. Reuse it when it satisfies the requirement. Write custom code only for product-specific behaviour, integration glue, or missing requirements.

Do not rebuild generic capabilities such as authentication, rich-text editing, search infrastructure, analytics plumbing, image storage, caching, rate limiting, or standard UI primitives when an appropriate existing implementation is available.

Document every deliberate custom subsystem with the reason an existing implementation was insufficient.

## UX rule: ruthless simplicity
The interface must make the next action obvious. Prefer a complete, useful view without scrolling whenever practical. Do not force scrolling merely to create visual drama. Dense information belongs in compact cards, tabs, segmented controls, and progressive disclosure.

Primary mobile screens should fit the core task into a single viewport where feasible. Desktop may use more horizontal information density, but the same principle applies: the user should understand the page and its main action immediately.

## Visual rule
The product should strongly resemble the visual language of the current Modern Warfare 4 experience: dark tactical presentation, restrained military-industrial UI, sharp hierarchy, compact information modules, weapon/loadout-centric composition, strong typography, and high information density.

Do **not** copy protected game assets, logos, textures, screenshots, proprietary UI artwork or other artwork verbatim. Recreate the *visual language and interaction principles* using original By JTT assets and implementation.

All public surfaces must clearly identify the product as an independent/unofficial community resource and must never imply endorsement or affiliation with Activision, Infinity Ward, Call of Duty, Xbox, PlayStation, Nintendo, Battle.net or Steam.

## Product architecture
- Game-agnostic platform kernel.
- MW4 is the first vertical and owns its canonical game data.
- Public data pages are indexable when they contain useful, verified content.
- Private account/admin/moderation surfaces are not index inventory.
- Community-generated content is indexed only after quality thresholds are met.
- Canonical entities are versioned and source-attributed.

## Initial user journey
`Home → Browse/Search → Entity → Build → Save/Publish → Share → Community`

## Initial feature set
- homepage with beta/live state and release countdown
- weapon directory
- weapon detail pages
- loadout builder
- public shareable builds
- copy/share controls
- maps, modes, operators, perks, equipment and progression directories as data becomes verified
- guides
- community discussions/comments
- search
- profiles
- moderation and abuse reporting
- privacy-conscious product analytics

## Launch countdown
Use one canonical release timestamp. Current target: 2026-10-23, with exact release time updated when an authoritative official source confirms it. Pre-release milestones may include beta end and other officially announced windows. After launch, the countdown must transition to a live-state component rather than becoming stale.

## SEO contract
- server-rendered public pages
- stable slugs and canonicals
- unique metadata
- OG/share cards
- structured data only where semantically valid
- XML sitemap segmentation
- robots.txt
- internal linking between related game entities and guides
- explicit noindex policy for thin/private/search states
- 404/410 handling
- source and freshness information on canonical content
- Search Console-ready verification path

## Monetisation
- no paywall on the core database or essential launch information
- tasteful ads on high-traffic informational pages when traffic warrants them
- clearly disclosed affiliate links where commercially relevant
- sponsored placements clearly labelled and never mixed with ranking logic
- future premium creator features only when they provide meaningful value

## Platform target
One responsive web application must work exceptionally well on desktop, mobile, tablet, handheld browsers and console browsers where browser support permits.

## Quality gates
Every substantial change must pass relevant automated checks and, for user-facing work, real browser verification before being treated as complete.
