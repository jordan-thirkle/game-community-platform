# Reuse-first engineering policy

This repository follows one hard rule: do not build something that has already been engineered well and is freely available or already provided by the platform.

## Before writing code

1. Search this repository for an existing capability.
2. Search the project's dependency ecosystem and reputable open-source implementations.
3. Check native Vercel/Supabase/framework primitives.
4. Check maintained, licence-compatible GitHub implementations where a dependency is justified.
5. Prefer the smallest proven dependency or platform primitive that satisfies the requirement.
6. Write custom code only for product-specific logic, integration glue, or genuinely missing functionality.

## Typical capabilities to reuse

- authentication/session management
- database access and migrations
- object storage/upload primitives
- search/indexing
- rate limiting
- analytics/event transport
- cache/CDN primitives
- markdown/rich text sanitisation
- responsive UI primitives
- validation/schema libraries
- image transformation
- sitemap/robots generation
- PWA/service-worker foundations

## Exception record

For any significant custom infrastructure subsystem, document:

- what was needed
- what existing options were evaluated
- why they did not satisfy the requirement
- why the custom implementation is smaller/safer/better for this product

The goal is maximum product leverage with minimum bespoke code.
