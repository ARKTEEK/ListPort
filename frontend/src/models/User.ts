export interface UserDto {
  id?: number;
  username?: string;
  email?: string;
  password?: string;
  exp?: number;
}

export interface AuthData {
  email: string;
  password: string;
  username?: string;
}

export interface AuthResponse {
  token: string;
}
