import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { toast } from 'react-hot-toast';

export const AppContext = createContext()

const AppContextProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([]);
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState([]);
    const [totalCartItems, setTotalCartItems] = useState([]);
    const [userData, setUserData] = useState()
    const [userOrders,setUserOrders] = useState([]);
    const currency = '$';
    const initAuthUser = localStorage.getItem('User');
    const [authenticated, setAuthenticated] = useState(initAuthUser ? JSON.parse(initAuthUser) : undefined);
    const token = authenticated?.token;
    const userId = authenticated?.data[0]?._id;
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const navigate = useNavigate();
    const shippingFee = 10;
    const isAdmin = localStorage.getItem('token')


    const fetchBlogs = async () => {
        try {
            let response = await axios.get(`${backendUrl}/api/blog/get-blogs`, { withCredentials: true });
            if (response.data) {
                setBlogs(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const fetchProducts = async () => {
        try {
            let response = await axios.get(`${backendUrl}/api/product/get-products`, { withCredentials: true })
            if (response.data) {
                setProducts(response.data);
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getCartItems = async () => {
        if (token) {
            try {
                let response = await axios.get(`${backendUrl}/api/cart/getcartitems/${userId}`, { withCredentials: true })
                if (response.data) {
                    setCartItems(response.data);
                }
            } catch (error) {
                console.log(error)
            }
        }
    }

    const getTotalPrice = async () => {
        if (token) {
            try {
                let response = await axios.get(`${backendUrl}/api/cart/totalamount/${userId}`, { withCredentials: true })
                if (response.data) {
                    setTotalPrice(response?.data[0]?.total)
                }
            } catch (error) {
                console.log(error)
            }
        }
    }

    const getTotalCartItems = async () => {
        if (token) {
            try {
                let response = await axios.get(`${backendUrl}/api/cart/totalitems/${userId}`, { withCredentials: true });
                if (response.data) {
                    setTotalCartItems(response?.data[0]?.total_items)
                }
            } catch (error) {
                console.log(error)
            }
        }
    }

    const addToCart = async (product_id) => {
        if (!token) {
            return toast.error('Please login first')
        }
        try {
            let response = await axios.post(`${backendUrl}/api/cart/addtocart/${userId}`, { product_id }, { withCredentials: true })
            if (response.data.success) {
                toast.success(response.data.messege)
                getCartItems();
                getTotalCartItems();
                getTotalPrice();
            }
        } catch (error) {
            toast.error(error.response.data.messege)
            console.log(error);
        }
    }

    const updateQuantity = async (product_id, quantity) => {
        if (token) {
            try {
                let response = await axios.put(`${backendUrl}/api/cart/update-quantity/${userId}`, { product_id, quantity }, { withCredentials: true })
                if (response.data.success) {
                    toast.success(response.data.messege);
                    getCartItems();
                    getTotalCartItems();
                    getTotalPrice();
                }
            } catch (error) {
                console.log(error)
                toast.error(error.response.data.messege);
            }
        }
    }

    const removeFomCart = async (product_id) => {
        if (token) {
            try {
                let response = await axios.post(`${backendUrl}/api/cart/removefromcart/${userId}`, { product_id }, { withCredentials: true });
                if (response.data) {
                    toast.success(response.data.messege);
                    getCartItems();
                    getTotalCartItems();
                    getTotalPrice();
                }
            } catch (error) {
                console.log(error)
                toast.error(error.response.data.messege);
            }
        }
    }

    const fetchUser = async () => {
        if (token) {
            try {
                let response = await axios.get(`${backendUrl}/api/user/userdetail/${userId}`, { withCredentials: true })
                if (response.data) {
                    setUserData(response.data[0]);
                }
            } catch (error) {
                console.log(error)
            }
        }
    }

    const fetchUserOrders = async () => {
        if (token) {
            try {
                let response = await axios.get(`${backendUrl}/api/order/user-orders/${userId}`, {withCredentials: true})
                if (response.data) {
                    setUserOrders(response.data)
                }
            } catch (error) {
                console.log(error)
            }
        }
    }

    useEffect(() => {
        fetchBlogs();
        fetchProducts();
        getCartItems();
        getTotalPrice();
        getTotalCartItems();
        fetchUser();
        fetchUserOrders();
    }, [])

    return (
        <AppContext.Provider value={{ backendUrl, navigate, token, blogs, products, currency, addToCart, cartItems, totalPrice, shippingFee, totalCartItems, removeFomCart, updateQuantity, userData, userId, fetchUser, getCartItems, getTotalCartItems,userOrders,fetchUserOrders,isAdmin }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;