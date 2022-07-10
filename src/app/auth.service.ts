import { Injectable } from '@angular/core';

const base64Decode = (str: string) =>
  decodeURIComponent(
    atob(str).replace(/(.)/g, (_m, c) => {
      let code = c.charCodeAt(0).toString(16).toUpperCase();
      if (code.length < 2) {
        code = '0' + code;
      }
      return '%' + code;
    })
  );

const base64UrlDecode = (str: string) => {
  let output = str.replace(/-/g, '+').replace(/_/g, '/');
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += '==';
      break;
    case 3:
      output += '=';
      break;
    default:
      throw 'Illegal Base64URL string!';
  }

  try {
    return base64Decode(output);
  } catch (err) {
    return atob(output);
  }
};

export const decode = (token: string, { header = false } = {}) => {
  const pos = header ? 0 : 1;
  try {
    return JSON.parse(base64UrlDecode(token.split('.')[pos]));
  } catch (err) {
    return {};
  }
};

interface JwtPayload {
  accessToken: string;
  userSpotifyId: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  get hasValidToken() {
    const storageToken = localStorage.getItem('jwt');
    if (storageToken && storageToken.length) {
      let payload: JwtPayload;
      try {
        payload = decode(storageToken) as JwtPayload;
        return (
          payload &&
          payload['accessToken'] &&
          payload['accessToken'].length &&
          payload['userSpotifyId'] &&
          payload['userSpotifyId'].length &&
          true
        );
      } catch (e) {
        return false;
      }
    }
    return false;
  }
}
