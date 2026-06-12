# Example: Business Pitch

A complete business pitch deck demonstrating the `title`, `section`, `title-content`, `bsp`, `two-column`, `quote`, and `grid` layouts — with progress bars, a Mermaid diagram, and speaker notes.

Copy the source below into a new `.md` file and open it in Kova.

---

## Source

````markdown
# Acme Analytics

Turning raw data into decisions that matter.

Jane Smith, CEO · May 2026

---

## The Problem

---

## Companies are drowning in data

Organisations collect 10× more data than they did five years ago — but
fewer than 30% report feeling confident in their data-driven decisions.

The bottleneck isn't collection. It's comprehension.

???

Open with a question: "How many of you feel like your team is actually
using your data effectively?" Let a few hands go up, then acknowledge
the gap.

---

## Why existing tools fall short

**Data warehouses**

- Require dedicated engineering teams
- Weeks to onboard a new dashboard
- Results locked in technical silos

|||

**Self-serve BI tools**

- Steep learning curve
- Misleading defaults
- No guardrails on bad queries

???

Name specific competitors if the audience is technical. Otherwise keep
it category-level.

---

## Our Solution

---

## Acme Analytics

Plain-language questions → instant, verified answers.

![Product screenshot](./assets/dashboard.png)

???

Walk through the screenshot. Key points: the search bar at the top,
the confidence score on every result, the one-click export.

---

## How it works

```mermaid
graph LR
    A[Ask a question] --> B[Query planner]
    B --> C[Data warehouse]
    C --> D[Verification layer]
    D --> E[Answer + confidence score]
```

???

Briefly explain the verification layer — that's our moat. It catches
statistically dubious results before they reach the user.

---

## Traction

!progress[Annual recurring revenue](68)
!progress[Month-on-month growth](82)
!progress[Net Promoter Score](77)
!progress[Data sources supported](55)

$2.4M ARR · 22% MoM · NPS 61 · 140+ connectors

???

The ARR bar represents $2.4M of a $3.5M target for the year. We're
on track to hit it by October.

---

## Why now

> The gap between data collection and data understanding has never
> been wider — or more expensive to ignore.
> — Gartner, 2025 Data & Analytics Report

---

## The Market

---

## Total addressable market

- **TAM:** $42B — all business intelligence software
- **SAM:** $11B — mid-market and enterprise analytics buyers
- **SOM:** $800M — companies 50–5,000 employees, English-speaking markets

---

## Competitive landscape

| | Acme | Legacy BI | Self-serve | Data teams |
|---|:---:|:---:|:---:|:---:|
| No SQL required | ✅ | ❌ | ✅ | ❌ |
| Answer verification | ✅ | ❌ | ❌ | Manual |
| < 1 min to first answer | ✅ | ❌ | ✅ | ❌ |
| Enterprise security | ✅ | ✅ | ⚠️ | ✅ |

---

## The Ask

---

## Series A — $8M

**Use of funds**

- Product: expand connector library, mobile app (40%)
- Sales: double AE headcount (35%)
- G&A: ops, legal, finance (25%)

**Target close:** Q3 2026

???

We've already soft-circled $4M. Looking for a lead investor to anchor
the round. Terms sheet ready.

---

## The team

- **Jane Smith** — CEO · ex-Palantir, Stanford CS
- **Marcus Lee** — CTO · ex-Databricks, 3 patents in query optimisation
- **Priya Nair** — CPO · ex-Notion, built Notion AI from 0 to 10M users
- **David Park** — Head of Sales · $40M ARR at previous company

---

## Thank you

jane@acme.io · acme.io/deck

Questions?
````

---

## What this demonstrates

| Slide | Layout | Feature |
|-------|--------|---------|
| Title | `title` | Subtitle, theme |
| Section breaks | `section` | Chapter dividers |
| "Why existing tools" | `two-column` | `\|\|\|` column break |
| "How it works" | `code` | Mermaid flowchart |
| "Traction" | `bsp` | Progress bars grouped as one logical element |
| "Why now" | `quote` | Blockquote with attribution |
| "Competitive landscape" | `title-content` | GFM table |
| Speaker notes | — | `???` delimiter on several slides |
