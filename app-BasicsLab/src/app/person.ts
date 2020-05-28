export class Person {
 
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName:string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFirstName(): string {
    return this.firstName;
  }
  setFirstName(firstName: string): void {
    this.firstName = firstName;
  }
  getLastName(): string {
    return this.lastName;
  }
  setLastName(lastName: string): void {
    this.lastName = lastName;
  }
  getFullName(): string{
      return this.lastName + ", " + this.firstName;
  }
}
