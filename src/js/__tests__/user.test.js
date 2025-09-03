import { loadUser, saveUser } from '../user';
import { httpGet } from '../http';

jest.mock('../http');

describe('user functions', () => {
  describe('loadUser', () => {
    test('should load user data', () => {
      const mockResponse = '{"id":1,"name":"John"}';
      httpGet.mockReturnValue(mockResponse);

      const user = loadUser(1);
      
      expect(httpGet).toHaveBeenCalledWith('http://server:8080/users/1');
      expect(user).toEqual({ id: 1, name: 'John' });
    });

    test('should handle invalid JSON response', () => {
      const mockResponse = 'invalid json';
      httpGet.mockReturnValue(mockResponse);

      expect(() => loadUser(1)).toThrow(SyntaxError);
    });
  });

  describe('saveUser', () => {
    test('should throw unimplemented error', () => {
      expect(() => saveUser({})).toThrow('Unimplemented');
    });

    test('should throw Error instance', () => {
      expect(() => saveUser({})).toThrow(Error);
    });
  });
});