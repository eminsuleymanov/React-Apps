import { createContext, useEffect, useState } from "react";
import { endpoints } from "../services/constants";
import controller from "../services/requests";
import Swal from "sweetalert2"
export const CategoryContext = createContext();
function CategoryContextProvider({ children }) {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        controller.getAll(endpoints.categories).then((resp) => {
            setCategories(resp.data.data)
        })
    }, []);
    const addCategory = async (newCategory) => {
        try {
            const response = await controller.post(endpoints.categories, newCategory);
            setCategories((currentCategories) => [...currentCategories, response.data]);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Category added",
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: error,
                showConfirmButton: false,
                timer: 1500
            });
        }
    };
    const deleteCategory = async (id) => {
        try {
            setCategories((currentCategories) => currentCategories.filter((x) => x._id !== id));
            await controller.delete(endpoints.categories, id);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Category deleted",
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: error,
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    return (
        <CategoryContext.Provider value={{ categories, setCategories, addCategory, deleteCategory, }}>
            {children}
        </CategoryContext.Provider>
    )

}
export default CategoryContextProvider;