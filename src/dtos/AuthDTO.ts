export interface RegisterDTO{
  name: string,
  cpf: string,
  email: string,
  password: string,
  confirmPassword: string,
}

export interface LoginDTO{
  email: string,
  password: string,
}