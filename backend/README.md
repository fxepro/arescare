# backend

API / server for Arescare. Holds API endpoints, server logic, background jobs, and the
data layer. Kept decoupled from the frontend — the client talks to it over HTTP only.

> Stack not yet chosen. Candidates depending on needs:
> - **Node** (Express / Fastify / NestJS) — shares the TypeScript toolchain with the frontend.
> - **Python** (FastAPI) — strong for data/ML or health-record processing.
>
> Likely responsibilities for this project:
> - Contact / lead form submissions (the marketing site `LeadForm`).
> - Future family health app: profiles, appointments, medications, records.
> - Auth, and any HIPAA-sensitive data handling (kept server-side, never in the client).

## Provisioned, not yet implemented

This folder is a placeholder so the project structure is established up front per the
[`/frontend` + `/backend` convention](../../docs/design-system.md#repository-structure).
