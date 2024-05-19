import { nanoid } from "nanoid";
class WomenProduct{
    constructor(title,imgSrc,price){
        this.id = nanoid()
        this.title = title,
        this.imgSrc = imgSrc,
        this.price = price
    }
}
export default WomenProduct;