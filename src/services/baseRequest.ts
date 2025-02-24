const _baseUrl = import.meta.env.VITE_APP_BASE_API;
export default async function callApi(
    method: string,
    URI: string,
    body: any = null
) {
    const url = `${_baseUrl}${URI}`;
    const myHeaders = new Headers({
        "Content-Type": "application/json"
    });

    const configCall: RequestInit = {
        method,
        headers: myHeaders,
        
    };

    if (body) {
        configCall.body = JSON.stringify(body);
    }

     
    try {
        const r = await fetch(url, configCall);
        if (!r.ok) {
            const errResponse = await r.json();
            throw errResponse;
        } else {
            if (r.status === 204) return;

            return await r.json();
        }
    } catch (err_1) {
        throw err_1;
    }
}

export interface BaseResponseDto<T> {
    data: T;
    error?: string;
    success: boolean;
}