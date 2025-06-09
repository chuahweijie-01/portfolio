import { GetAllCareerResponse } from "../types/get-all-career-response";

const apiRequest = async <T>(
    endpoint: string,
    method: string,
    body?: object
): Promise<T> => {
    const response = await fetch('API_URL', {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        ...(body && { body: JSON.stringify(body) })
    })

    if (!response.ok) {
        const errorText = await response.text();
        console.error(`API error (${method} ${endpoint}):`, errorText);
        throw new Error(errorText || 'API FAILED')
    }

    return response.json();
}

export const getCareers = (): Promise<GetAllCareerResponse[]> => {
    return apiRequest<GetAllCareerResponse[]>('', 'GET');
}