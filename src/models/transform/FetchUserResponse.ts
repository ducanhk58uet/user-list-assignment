import { User } from "../entities/User";

export interface FetchUserQuery {
    results: number;
    page: number;
    version?: string;
    seed?: string;
}

export interface FetchUserResponse {
    results: User[];
    info: FetchUserQuery;
}