export interface RegisterDTO{
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
}

export interface LoginDTO{
  email: string,
  password: string,
}