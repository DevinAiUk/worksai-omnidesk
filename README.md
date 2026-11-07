# WorksAi OmniDesk (`worksai-omnidesk`)

> 100% MIT-clean omnichannel support inbox with BYOK RAG reply drafting and urgency triage.

- **Live Subdomain Application:** [https://omnidesk.worksai.org](https://omnidesk.worksai.org)
- **WorksAI Hub Specification:** [https://worksai.org/apps/worksai-omnidesk](https://worksai.org/apps/worksai-omnidesk)
- **Category:** B. SaaS products
- **License:** MIT (Derived from [Chatwoot (MIT Community Core)](https://github.com/chatwoot/chatwoot) @ `515f9e0`)

## Capability Matrix
- **What You Can Do:** Triage incoming support tickets by urgency (critical/high/normal) and churn risk, match against knowledge-base articles, and draft grounded operator replies with citations.
- **Deterministic Domain Utilities:** triageAndDraftSupportReply (urgency/churn keyword classifier and deterministic KB article citation matcher).
- **Genuine AI Model Features:** Cloudflare Workers AI (@cf/meta/llama-3.1-8b-instruct) empathetic customer response polishing grounded strictly in matched KB articles.
- **Persisted R2/Neon Features:** Triaged ticket records, SLA urgency scores, and drafted replies persisted in Cloudflare R2 (workspaces/worksai-omnidesk/*).
- **Known Limitations:** Outbound email delivery of drafted replies requires a verified transactional sender domain in Resend or Postmark.

## Verification & Local Testing
```bash
npm run lint
npm run typecheck
npm test
```
