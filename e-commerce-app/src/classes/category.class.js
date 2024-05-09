import { nanoid } from "nanoid"

export class Category{
    constructor(name){
        this.id = nanoid()
        this.name = name
    }
}