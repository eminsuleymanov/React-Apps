import { nanoid } from "nanoid";

export class Order {
    constructor(userId, totalPrice, createdAt, items = []) {
        this.id = nanoid()
        this.userId = userId; 
        this.totalPrice = totalPrice;
        this.createdAt = createdAt; 
        this.items = items;
    }

    // items.push({ productId, count });

}
