import jwt from 'jsonwebtoken';
import JWTUtils from '../../utils/jwt-utils';

describe('jwt utils', () => {
  it('should return an access token', () => {
    const payload = { email: 'test@example.com' };
    expect(JWTUtils.generateAccessToken(payload)).toEqual(expect.any(String));
  });

  it('should return a refresh token', () => {
    const payload = { email: 'test@example.com' };
    expect(JWTUtils.generateRefreshToken(payload)).toEqual(expect.any(String));
  });
});
