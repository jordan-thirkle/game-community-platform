# Implementation Roadmap

The master implementation is divided into small, testable slices. Do not prebuild framework infrastructure that is not needed by the current slice.

## Slice 1 — Foundation
- project shell
- responsive navigation
- MW4-inspired visual system using original assets
- beta/live status + launch countdown
- verified canonical weapon seed data
- weapon directory
- weapon detail

## Slice 2 — Builder
- loadout state model
- compatible attachment selection
- validation
- stat summary
- build naming/tags
- local draft persistence
- public share representation

## Slice 3 — Community persistence
- choose/reuse authentication provider
- database schema/migrations
- authenticated saves
- publish/revisions
- saves/votes/comments/reports
- moderation queue

## Slice 4 — Search + SEO
- search provider/engine selected from existing/reusable technology first
- entity discovery
- sitemap/robots/canonical generation
- metadata/OG cards
- indexing quality rules

## Slice 5 — Expansion
- maps/modes/operators/perks/equipment/progression
- guides
- patches/meta history
- trending
- creator profiles
- monetisation surfaces

## Ship gate
Each slice must be independently usable, tested and verified in a real browser before the next slice expands scope.
