const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export interface HealthResponse {
  status: string
  service: string
}

export async function getBackendHealth(): Promise<HealthResponse> {
  const response = await fetch(`${API_BASE_URL}/health`)

  if (!response.ok) {
    throw new Error(`Health check failed: ${response.status}`)
  }

  return response.json() as Promise<HealthResponse>
}