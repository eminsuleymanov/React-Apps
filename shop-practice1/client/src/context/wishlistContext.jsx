/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const WishlistContext = createContext()
export default function WishlistContextProvider({ children }) {
    const local = JSON.parse(localStorage.getItem("wishlist"));
    if (!local) {
        localStorage.setItem("wishlist", JSON.stringify([]))
    }
    const [wishlist, setWishlist] = useState(local || [])

    const addToWishlist = (product)=>{
        const wishlistItem = wishlist.find((x)=>x._id ==product._id);
        if (wishlistItem) {
            alert("already in wishlist")
            wishlist.splice(wishlist.indexOf(wishlistItem),1)
            setWishlist([...wishlist])
            localStorage.setItem("wishlist",JSON.stringify([...wishlist]))

        } else {
            setWishlist([...wishlist,product])
            localStorage.setItem("wishlist",JSON.stringify([...wishlist,product]))
        }

    }
    return (
        <WishlistContext.Provider value={{ wishlist, setWishlist ,addToWishlist}}>
            {children}
        </WishlistContext.Provider>
    )

}