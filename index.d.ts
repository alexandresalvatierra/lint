import type { Linter } from 'eslint'

export function ignores(...extra: string[]): string[]
export const configs: Linter.Config[]
