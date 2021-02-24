
import axios from 'axios';
import ApiConstants from '../../constants/api';
import { User } from '../../models/entities/User';
import { FetchUserResponse } from '../../models/transform/FetchUserResponse';

async function fetchUsers(page: number, results: number): Promise<User[]> {
    const { data } = await axios.get<void, { data: FetchUserResponse }>(ApiConstants.FETCH_USER_API_ENDPOINT, {
        params: {
            page,
            results
        }
    })

    const users = data.results;

    return users;
}

export default {
    fetchUsers
}