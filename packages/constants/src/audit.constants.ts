export const SUPPORTED_TOOLS = [
  { id: "cursor", name: "Cursor" },
  { id: "copilot", name: "GitHub Copilot" },
  { id: "claude", name: "Claude (Anthropic UI)" },
  { id: "chatgpt", name: "ChatGPT (OpenAI UI)" },
  { id: "anthropic_api", name: "Anthropic API Direct" },
  { id: "openai_api", name: "OpenAI API Direct" },
  { id: "gemini", name: "Google Gemini / API" },
  { id: "v0", name: "v0 by Vercel" },
] as const;

// Strict Plan Tier matrix mapping fallback options
export const TOOL_TIERS: Record<string, string[]> = {
  cursor: ["Hobby", "Pro", "Business", "Enterprise"],
  copilot: ["Individual", "Business", "Enterprise"],
  claude: ["Free", "Pro", "Max", "Team", "Enterprise", "API Direct"],
  chatgpt: ["Plus", "Team", "Enterprise", "API Direct"],
  anthropic_api: ["Pay-as-you-go API"],
  openai_api: ["Pay-as-you-go API"],
  gemini: ["Pro", "Ultra", "API"],
  v0: ["Free", "Premium", "Team"],
};
