export const APP_DB_CONFIG = {
  schema: "worksai_hub",
  appSlug: "worksai-omnidesk",
  subdomain: "omnidesk.worksai.org",
  mcpEndpoint: "https://omnidesk.worksai.org/api/mcp",
  aiEndpoint: "https://omnidesk.worksai.org/api/ai/analyze",
  mcpTools: ["omnidesk.triage_urgency", "omnidesk.draft_rag_reply", "omnidesk.evaluate_sla"]
} as const;
