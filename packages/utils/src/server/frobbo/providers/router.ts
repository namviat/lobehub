import type { FrobboModel, FrobboProvider, FrobboRoute } from './types';

type RouteCandidate = {
  route: FrobboRoute;
  model: FrobboModel;
  provider: FrobboProvider;
  secret: string;
};

export async function runWithFallback<T>(
  candidates: RouteCandidate[],
  execute: (candidate: RouteCandidate) => Promise<T>,
): Promise<T> {
  if (!candidates.length) {
    throw new Error('No enabled Frobbo route is configured for this model.');
  }

  const ordered = [...candidates].sort((a, b) => a.route.priority - b.route.priority);
  let lastError: unknown;

  for (const candidate of ordered) {
    const attempts = Math.max(1, candidate.route.maxRetries + 1);
    for (let attempt = 0; attempt < attempts; attempt++) {
      try {
        return await execute(candidate);
      } catch (error) {
        lastError = error;
      }
    }
  }

  throw lastError instanceof Error ? lastError : new Error('All Frobbo routes failed.');
}
