export class Employee {
  id!: number;
  fname!: string;
  lname!: string;
  email: string = "@gmail.com";
  salary: number = 0;
  department: string = "";
  designation: string = "";
  joiningDate!: string;

  constructor() {
      // Set default joining date
      const today = new Date();
      const year = today.getFullYear();
      const month = ('0' + (today.getMonth() + 1)).slice(-2);
      const day = ('0' + today.getDate()).slice(-2);
      this.joiningDate = `${year}-${month}-${day}`;
  }
}
