export function convertObjectToUrlParams(params: Record<string, unknown>) {
  return new URLSearchParams(params as Record<string, string>).toString()
}
