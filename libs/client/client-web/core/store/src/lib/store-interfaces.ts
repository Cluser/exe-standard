import { HttpErrorResponse } from "@angular/common/http";

export interface ApiResponseState<T> {
    data: T;
    isLoading: boolean;
    isLoaded: boolean;
    errors: HttpErrorResponse[];
}