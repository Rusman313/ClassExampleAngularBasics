function sayHello(person: string): string {
  return "Hello, " + person;
}
var user = "Super Student";
document.getElementById("para").innerHTML = sayHello(user);

interface IPersonOptions {
  firstName: string;
  lastName: string;
  age?: number;
  phNumber?: number;
  state?: string;
  zipCode?: number;
  occupation?: string;
  numberOfHours?: number;
  hourlyWage?: number;
  //printName():void;
}

class Person implements IPersonOptions {
  firstName: string;
  lastName: string;
  age: number;
  phNumber: number;
  state: string;
  zipCode: number;
  occupation: string;
  numberOfHours: number;
  hourlyWage: number;
  certifications: string[] = [];

  constructor(
    firstName: string,
    lastName: string,
    age?: number,
    phNumber?: number,
    state?: string,
    zipCode?: number,
    occupation?: string,
    numberOfHours?: number,
    hourlyWage?: number
  ) {
    //super(age, zipCode, phNumber);
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.phNumber = phNumber;
    this.state = state;
    this.zipCode = zipCode;
    this.occupation = occupation;
    this.numberOfHours = numberOfHours;
    this.hourlyWage = hourlyWage;
  }

  setFirstName(firstName: string): void {
    this.firstName = firstName;
  }
  getFirstName(): string {
    return this.firstName;
  }
  setLastName(lastName: string): void {
    this.lastName = lastName;
  }
  getLastName(): string {
    return this.lastName;
  }

  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
  getAllInfo(): string {
    return;
  }
  setAge(age: number): void {
    this.age = age;
  }
  getAge(): number {
    return this.age;
  }
  setPhNumber(phNumber: number): void {
    this.phNumber = phNumber;
  }
  getPhNumber(): number {
    return this.phNumber;
  }
  setState(state: string): void {
    this.state = state;
  }
  getState(): string {
    return this.state;
  }
  setZipCode(zipCode: number): void {
    this.zipCode = zipCode;
  }
  getZipCode(): number {
    return this.zipCode;
  }
  setOccupation(occupation: string): void {
    this.occupation = occupation;
  }
  getOccupation(): string {
    return this.occupation;
  }
  setNumOfHours(numberOfHours: number): void {
    this.numberOfHours = numberOfHours;
  }
  getNumOfHours(): number {
    return this.numberOfHours;
  }
  setHourlyWage(hourlyWage: number): void {
    this.hourlyWage = hourlyWage;
  }
  getHourlyWage(): number {
    return this.hourlyWage;
  } // hourlyWage
  weeklyWage(numberOfHours: number = 40): string {
    return (
      "Employee Name: " +
      this.lastName +
      ", " +
      this.firstName +
      "</br><p> Weekly Wage: " +
      this.hourlyWage * numberOfHours +
      "</p>"
    );
  }

  addCerts(...certifications: string[]) {
    this.certifications.push(...certifications);

    for (var i = 0; i < certifications.length, i++; ) {
      console.log(certifications[i]);
      //concat this**
    }
    return "Certifications: " + this.certifications.join(", ");
  }
  // method in class to 
  static addEmployee(Options: IPersonOptions): Person {
    return new Person(Options.firstName, Options.lastName);
  }
}
//let certifications = ['BA Certifications']
let Employee1 = new Person(
  "Jack",
  "Peters",
  33,
  1234567891,
  "NC",
  28173,
  "Business Analyst",
  40,
  25
);
let Employee2 = new Person(
  "Suzanne",
  "Palmer",
  40,
  1234567892,
  "NC",
  28173,
  "Dev",
  10,
  30
);
let Employee3 = new Person(
  "Mickey",
  "Mouse",
  91,
  1234567883,
  "NC",
  28277,
  "Actor",
  40,
  130
);
let Employee4 = new Person(
  "Minnie",
  "Mouse",
  93,
  1234567874,
  "NC",
  28173,
  "Actress",
  30,
  160
);
let Employee5 = new Person(
  "Daisy",
  "Duck",
  80,
  1234567865,
  "NC",
  28173,
  "Actress",
  20,
  100
);

document.getElementById("para").innerHTML = Employee1.weeklyWage();
document.getElementById("para1").innerHTML = Employee2.weeklyWage();
document.getElementById("para2").innerHTML = Employee3.weeklyWage();
document.getElementById("para3").innerHTML = Employee4.weeklyWage();
document.getElementById("para4").innerHTML = Employee5.weeklyWage();
document.getElementById("para1").innerHTML = Employee2.getFullName();
document.getElementById("para-1").innerHTML = Employee1.addCerts("BA Certification","pseudo cert"
);
//document.getElementById("para-2").innerHTML = Employee2.addCerts("IT Certification");
document.getElementById("para-2").innerHTML = Person.addEmployee({
  firstName: "Rafeena",
  lastName: "Usman",
}).getFullName();
