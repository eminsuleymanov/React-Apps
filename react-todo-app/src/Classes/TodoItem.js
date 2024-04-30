import { nanoid } from 'nanoid';

class TodoItem {
  constructor(title) {
    this.id = nanoid(); 
    this.createdAt = new Date();
    this.title = title;
    this.isDone = false;
  }
}

export default TodoItem;
