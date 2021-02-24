import UserRepository from './index';

test('fetch users from api', async () => {
  const users = await UserRepository.fetchUsers(1, 10);
  const userListLength = users.length;
  expect(userListLength).toBe(10);
});
