# MW4 Builds — By JTT

An independent Modern Warfare 4 community companion: weapons, loadouts and shareable builds.

## Principles
- Reuse mature/free infrastructure before writing custom systems.
- Keep core tasks compact and obvious; avoid unnecessary scrolling.
- Use verified game data only and label beta/patch freshness.
- Independent community resource; no affiliation or endorsement is implied.

## Current vertical slice
- Responsive home screen
- Beta status + release countdown
- Weapon directory cards
- Weapon detail view
- Quick build/share interaction
- SEO metadata, robots and sitemap
- Zero runtime dependencies

## Local
No dependency install is required for the current static slice. A standard Node 22 environment can run `npm test` and `npm run build`.

## Deployment
GitHub Pages is configured through `.github/workflows/pages.yml` for branch-based visual previews. Vercel remains the intended production deployment once the repository is linked.

## Next
Canonical game data, persistent builds, authentication, search, community moderation and patch-aware SEO should be added only when the corresponding product need is proven.
