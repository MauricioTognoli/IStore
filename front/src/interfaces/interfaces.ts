interface IRegisterUser {
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
}

interface ILoginUser {
  email: string;
  password: string;
}

interface ICreateOrder {
  userId: number;
  products: number[];
}

interface ISigninValidate {
  email: string;
  password: string;
}

interface ISignupValidate {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  phone: string;
  address: string;
}

interface ICredentials {
  password: string;
  id: number;
}

interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

interface IUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  password: string;
  address: string
  orders?: IOrderResponse[];
}

interface IUserResponse {
  login: boolean
  user: Partial<IUser> | null
  token: string
 }

interface IRegisterUserResponse {
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
  role: string;
  credential: ICredentials;
}

interface ILoginUserResponse {
  login: boolean;
  user: Partial<IUser> | null;
}

interface IProductListProps {
  products: IProduct[];
}

interface IOrderResponse {
  id: number;
  status: string;
  date: string;
  user: IUser;
  products: IProduct[];
}

interface IOrderProps {
  order: IOrderResponse;
}

interface IProductCardProps {
  product: IProduct;
  remove?: () => void;
}

interface ICartContextType {
  cartItems: IProduct[];
  addToCart: (product: number) => void;
  removeFormatCart: (product: number) => void;
  total: number;
  proceedToCheckout: () => void;
}

interface IUserContextType {
  user: Partial<IUserResponse> | null;
  setUser: React.Dispatch<React.SetStateAction<Partial<IUserResponse> | null>>;
  isLogged: boolean;
  setIsLogged: (isLogged: boolean) => void;
  signIn: (credentials: ILoginUser) => Promise<boolean>;
  signUp: (user: Omit<IUser, "id">) => Promise<boolean>;
  getOrders: () => void;
  orders: IOrderResponse[] | [];
  logOut: () => void;
}

export type {
  ICreateOrder,
  ICredentials,
  IOrderProps,
  IOrderResponse,
  IUserResponse,
  ILoginUser,
  ILoginUserResponse,
  ICartContextType,
  IProduct,
  IUserContextType,
  IProductListProps,
  ISigninValidate,
  ISignupValidate,
  IRegisterUser,
  IRegisterUserResponse,
  IProductCardProps,
  IUser,
};
