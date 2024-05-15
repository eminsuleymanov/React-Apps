import { nanoid } from "nanoid";

// id, username, password, createdAt, email, profileImg, balance, role (default 'client'), basketItems (default boş array) dəyərləri var.
export class User{
    constructor(username, password, createdAt, email, profileImg, balance, role = "client", basketItems = []) {
        this.id = nanoid();
        this.username = username; 
        this.password = password; 
        this.createdAt = createdAt;
        this.email = email; 
        this.profileImg = profileImg; 
        this.balance = balance; 
        this.role = role; 
        this.basketItems = basketItems; 
    }


}