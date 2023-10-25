import { HttpErrorResponse } from "@angular/common/http";

export interface ApiResponseState<T> {
    data: T | null;
    isLoading: boolean;
    isLoaded: boolean;
    errors: HttpErrorResponse[];
}

// eslint-disable-next-line
export const initialApiResponseState: ApiResponseState<any> = {
    data: null,
    isLoading: false,
    isLoaded: false,
    errors: []
};