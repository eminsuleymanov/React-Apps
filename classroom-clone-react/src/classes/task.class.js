import { nanoid } from "nanoid";

export default class Task {
    constructor( title, description, topic, deadline, createdAt, teacherId, assignments = []) {
      this.id = nanoid;
      this.title = title;
      this.description = description;
      this.topic = topic;
      this.deadline = deadline;
      this.createdAt = createdAt;
      this.teacherId = teacherId;
      this.assignments = assignments;
    }
  }