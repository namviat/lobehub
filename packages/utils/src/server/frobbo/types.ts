export type ProviderType =
  | 'openai'
  | 'google'
  | 'anthropic'
  | 'xai'
  | 'openrouter'
  | 'custom';

export interface FrobboProvider {
  id: string;
  name: string;
  type: ProviderType;
  baseUrl?: string;
  enabled: boolean;
}

export interface FrobboModel {
  id: string;
  providerId: string;
  modelId: string;
  displayName: string;
  enabled: boolean;

  capabilities: {
    vision?: boolean;
    reasoning?: boolean;
    tools?: boolean;
    streaming?: boolean;
    imageGeneration?: boolean;
    audio?: boolean;
    embeddings?: boolean;
  };
}

export interface ProviderKey {
  id: string;
  providerId: string;
  encryptedKey: string;
  enabled: boolean;
  priority: number;
}
