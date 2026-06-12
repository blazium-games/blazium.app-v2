export async function httpRequest<T = any>(
  url: string,
  params?: {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE',
    payload?: any,
    headers?: HeadersInit,
  },
): Promise<T> {
  try {
    let body: BodyInit | undefined;

    if (["POST", "PUT"].includes(params?.method ?? "GET") && params?.payload) {
      if (params.payload instanceof FormData) {
        body = params.payload;
      } else {
        body = JSON.stringify(params.payload);
      }
    }

    const init: RequestInit = {
      method: params?.method || "GET",
      headers: params?.headers || undefined,
      body,
    };
    const response = await fetch(url, init);
    const data = await response.json();
    if (!response.ok) {
      const error = {
        status: response.status,
        code: data.error.code,
        message: data.error.message,
        data: data.data || null,
      }
      throw error;
    }
    if (import.meta.env.DEV) console.log(data);
    return data;
  } catch (error: any) {
    console.error(
      "status" in error ?
        `(${error.status} | ${error.code}): ${error.message}` :
        error
    );
    throw error;
  }
}

export function errorResponse(error: any) {
  return "status" in error ?
    new Response(null, { status: error.status, statusText: `(${error.code}) ${error.message}` }) :
    new Response(null, { status: 500, statusText: error });
}