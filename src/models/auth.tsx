
export interface Registerdto {
    email:string;
    password:string;
    confirmPassword :string;
    firstName :string;
    lastName :string;
    PhoneNumber :string;
  }
  export interface LoginRequest {
    email: string;
    password: string;
  }
  
  export interface LoginResponse {
    message: string;
    isSuccess: boolean;
    data: {
      Token: string[];
    };
    errors: {};
  }