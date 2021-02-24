import { FetchUserQuery } from "./FetchUserResponse";

export interface FetchUserAction {
    type: string;
    payload: FetchUserQuery;
}