export type FrobboCapabilityMap = {
  chat?: boolean;
  streaming?: boolean;
  vision?: boolean;
  tools?: boolean;
  reasoning?: boolean;
  structuredOutput?: boolean;
  imageGeneration?: boolean;
  audioInput?: boolean;
  audioOutput?: boolean;
  embeddings?: boolean;
  files?: boolean;
  webSearch?: boolean;
};

export type FrobboProvider = {
  id: string;
  name: string;
  slug: string;
  kind: string;
  baseUrl?: string | null;
};

export type FrobboModel = {
  id: string;
  providerId: string;
  modelId: string;
  displayName: string;
  capabilities: FrobboCapabilityMap;
  config: Record<string, unknown>;
};

export type FrobboRoute = {
  id: string;
  modelId: string;
  providerKeyId: string;
  priority: number;
  maxRetries: number;
};

export type FrobboProviderRequest = {
  model: FrobboModel;
  provider: FrobboProvider;
  secret: string;
  input: Request;
};
