export namespace User {
  export interface AccessToken {
    token: string;
    expiration: string;
    refreshToken: string;
  }
}
