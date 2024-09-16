import { ILoginUser, IUser, IProduct } from "@/interfaces/interfaces";


export const postSignup = async (user: Omit<IUser, "id">) => {
    const res = await fetch("http://localhost:3001/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await res.json();
      return data
}

export const postSignin = async (credentials: ILoginUser) => {
    const res = await fetch("http://localhost:3001/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const data = await res.json();
      return data
}

export const checkout = async (cartItems: IProduct[]) => {
  try {
    const products = cartItems.map((item) => item.id);
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:3001/orders/", {
      method: "POST",
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ products }),
    });

  } catch (error) {
    console.log(error);
  }
};

export const getUserOrders = async (token: string) => {
  const res = await fetch("http://localhost:3001/users/orders/", {
      headers: {
        Authorization: `${token}`,
      },
    });
    const data = await res.json();
    return data
}