
import userReducer from '.';
import { UserActions } from '../../actions/user';
import TestConstants from '../../constants/test';



describe('user reducer', () => {
    it('should return the initial blank state', () => {
        expect(userReducer(undefined, {} as any)).toEqual([])
    })
  
    it('should handle UPDATE_USER_LIST', () => {
      expect(
        userReducer([], {
          type: UserActions.UPDATE_USER_LIST,
          payload: {
              users: TestConstants.TEST_USERS
          }
        })
      ).toEqual(TestConstants.TEST_USERS);
    })
})