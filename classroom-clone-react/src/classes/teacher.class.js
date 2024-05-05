import { nanoid } from "nanoid";

export default class Teacher {
    constructor( fullName, username, email, password, major, profileImage) {
      this.id = nanoid;
      this.fullName = fullName;
      this.username = username;
      this.email = email;
      this.password = password;
      this.major = major;
      this.profileImage = profileImage;
    }
  }
  