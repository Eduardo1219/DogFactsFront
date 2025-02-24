import type { DogFacts } from "@/models/DogFacts";
import callApi, { type BaseResponseDto } from "./baseRequest";

const route = 'DogFacts';

export function getDogFacts(search: string, start: number, take: number): Promise<BaseResponseDto<DogFacts | undefined>> {
    const result: BaseResponseDto<DogFacts | undefined> = {
        error: '',
        success: false,
        data: undefined
    };
    const response = callApi('GET', `${route}?search=${search}&start=${start}&take=${take}`)
        .then(resp => {
            result.success = true;
            if (resp) {
                result.data = resp;
            }
            return result;
        }).catch(err => {
            result.error = err.error;
            return result;
        });

    return response;
}
export function getDogFactsCount(search: string): Promise<BaseResponseDto<number | undefined>> {
    const result: BaseResponseDto<number | undefined> = {
        error: '',
        success: false,
        data: undefined
    };
    const response = callApi('GET', `${route}/count?search=${search}`)
        .then(resp => {
            result.success = true;
            if (resp) {
                result.data = resp;
            }
            return result;
        }).catch(err => {
            result.error = err.error;
            return result;
        });

    return response;
}