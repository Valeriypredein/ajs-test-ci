import { httpGet, httpPost } from '../http';

describe('http functions', () => {
  describe('httpGet', () => {
    test('should throw error with provided URL', () => {
      const testUrl = 'http://test.com';
      
      // Проверяем, что функция выбрасывает ошибку с правильным сообщением
      expect(() => httpGet(testUrl)).toThrow(testUrl);
    });

    test('should throw Error instance', () => {
      expect(() => httpGet('test')).toThrow(Error);
    });
  });

  describe('httpPost', () => {
    test('should throw error with provided URL', () => {
      const testUrl = 'http://test.com';
      
      expect(() => httpPost(testUrl)).toThrow(testUrl);
    });

    test('should throw Error instance', () => {
      expect(() => httpPost('test')).toThrow(Error);
    });
  });
});