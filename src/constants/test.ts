import { User } from "../models/entities/User";

const TEST_USERS: User[] = [
    {
        name: {
            first: 'First',
            last: 'Last', 
            title: 'Title'
        },
        picture: {
            thumbnail: 'image-url.com'
        },
        login: {
            username: 'test-username'
        }
    }
];

const TestConstants = {
    TEST_USERS
}

export default TestConstants;