import * as Yup from 'yup';

const ProductSchema = Yup.object().shape({
    name: Yup.string().required(),
    salePrice: Yup.number()
        .required('Sale price is required')
        .moreThan(Yup.ref('costPrice'), 'Sale price must be higher than cost price')
        .moreThan(0, 'Sale price must be greater than zero'),
    costPrice: Yup
        .number()
        .required('Cost price is required')
        .min(0, 'Cost price must be greater than or equal to zero'),
    discountPercentage: Yup
    .number()
    .min(0)
    .max(100)
    .required(),
    imgSrc: Yup
    .required()
    .string()
    .url(),
    description: Yup
    .required()
    .string()
    .min(10,'Description must be at least 10 chars'),
    stockCount:Yup.required().min(1).number()

});

export default ProductSchema;

// hamısı required olmalıdır. salePrice, costPrice rəqəm olmalıdır, min sıfır olmalidır və salePrice costPrice-dan böyük olmalıdır, discountPercentage 0-100 aralığında ola bilər, imgSrc url olmaldır və required-dir, description min 10 simvol olmalıdır, stockCount min 1 olmalıdır və number, required-dir, createdAt default olaraq new Date əlavə olunacaq class-da.