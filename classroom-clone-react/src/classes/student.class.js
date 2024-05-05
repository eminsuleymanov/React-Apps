import { nanoid } from "nanoid";

export default class Student {
  constructor( fullName, username, email, password, grades = [], profileImage) {
    this.id = nanoid;
    this.fullName = fullName;
    this.username = username;
    this.email = email;
    this.password = password;
    this.grades = grades;
    this.profileImage = profileImage;
  }
  calcAvgGrade() {
    if (this.grades.length === 0) {
      return 0; 
    }

    const sum = this.grades.reduce((total, grade) => total + grade, 0);
    return sum / this.grades.length;
  }
}