# WorksAi OmniDesk (`worksai-06`)

> 100% MIT-clean omnichannel support inbox with BYOK RAG reply drafting and urgency triage.

**Category:** B. SaaS products  
**License:** MIT (Derivative of [Chatwoot (MIT Community Core)](https://github.com/chatwoot/chatwoot) @ `515f9e0`)  
**Portfolio Page:** `https://devinai.uk/worksai/products/worksai-omnidesk/`

## Value Proposition & Scope
Eliminates Intercom's $0.99/resolution AI tax and Chatwoot's proprietary `enterprise/` licensing restrictions by delivering a clean MIT shared inbox with built-in sentiment/urgency routing and knowledge-base grounded reply drafting.

### What Works Out-of-the-Box (Zero External Credentials Required)
Inbox ticket routing, urgency/churn triage scoring, local knowledge-base RAG reply drafting, SLA tracking, and transcript PII redaction.

### What Requires User Configuration (`.env.example`)
`DATABASE_URL` (Neon Postgres) for cloud multi-agent storage; `OPENAI_API_KEY` or `ANTHROPIC_API_KEY` for neural LLM reply polishing; WhatsApp/SMTP credentials for external channel delivery.

## Measurable Acceptance Criteria
- AC-01: Classifies inbound customer messages by urgency (low, medium, high, critical), intent (billing, bug, refund, sales), and churn risk.
- AC-02: Retrieves relevant knowledge-base articles and drafts a grounded agent response citing the matched article ID.
- AC-03: Enforces strict tenant `inboxId` isolation and transitions ticket states (`open` -> `pending` -> `resolved`) with audit timestamps.
- AC-04: Passes automated license-boundary audit confirming zero proprietary `enterprise/` code or references exist.

## Known Limitations
- Meta WhatsApp Cloud API live delivery requires business verification in the user's Meta Developer account.
- All features from upstream's proprietary `enterprise/` folder were intentionally excluded and replaced with WorksAi's MIT implementation.

## Quick Start & Verification
```bash
npm test
```
