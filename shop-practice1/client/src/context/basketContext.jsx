/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const BasketContext = createContext();
function BasketContextProvider({ children }) {
    let localBasket = JSON.parse(localStorage.getItem("basket"));
    if (!localBasket) {
        localStorage.setItem("basket", JSON.stringify([]))
    }
    const [basket, setBasket] = useState(localBasket || [])

    const addBasket = (product) => {
        const foundItem = basket.find((x) => x.id == product._id);
        if (foundItem) {
            foundItem.count += 1;
            setBasket([...basket]);
            localStorage.setItem("basket", JSON.stringify(basket))

        } else {
            const basketItem = { ...product };
            basketItem.count = 1;
            setBasket((current) => {
                current.push(basketItem)
                localStorage.setItem("basket", JSON.stringify(current))
                return [...current]
            })
        }
    }

    const decreaseCount = (product)=>{
        const foundItem = basket.find((x) => x.id == product._id);
        if (foundItem.count>1) {
            foundItem.count -=1;
            setBasket([...basket]);
            localStorage.setItem("basket", JSON.stringify(basket))
            
        } else {
            const filteredBasket = basket.filter((x)=> x.id !==product._id);
            setBasket([...filteredBasket]);
            localStorage.setItem("basket", JSON.stringify(filteredBasket))
        }
    }
    return (
        <BasketContext.Provider value={{ basket, setBasket, addBasket,decreaseCount }}>
            {children}
        </BasketContext.Provider>
    )

}
export default BasketContextProvider;