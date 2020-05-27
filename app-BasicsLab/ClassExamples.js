function sayHello(person) {
    return "Hello, " + person;
}
var user = "Super Student";
document.getElementById("para").innerHTML = sayHello(user);
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, phNumber, state, zipCode, occupation, numberOfHours, hourlyWage) {
        this.certifications = [];
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
    Person.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Person.prototype.getFirstName = function () {
        return this.firstName;
    };
    Person.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    Person.prototype.getLastName = function () {
        return this.lastName;
    };
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Person.prototype.getAllInfo = function () {
        return;
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.setPhNumber = function (phNumber) {
        this.phNumber = phNumber;
    };
    Person.prototype.getPhNumber = function () {
        return this.phNumber;
    };
    Person.prototype.setState = function (state) {
        this.state = state;
    };
    Person.prototype.getState = function () {
        return this.state;
    };
    Person.prototype.setZipCode = function (zipCode) {
        this.zipCode = zipCode;
    };
    Person.prototype.getZipCode = function () {
        return this.zipCode;
    };
    Person.prototype.setOccupation = function (occupation) {
        this.occupation = occupation;
    };
    Person.prototype.getOccupation = function () {
        return this.occupation;
    };
    Person.prototype.setNumOfHours = function (numberOfHours) {
        this.numberOfHours = numberOfHours;
    };
    Person.prototype.getNumOfHours = function () {
        return this.numberOfHours;
    };
    Person.prototype.setHourlyWage = function (hourlyWage) {
        this.hourlyWage = hourlyWage;
    };
    Person.prototype.getHourlyWage = function () {
        return this.hourlyWage;
    }; // hourlyWage
    Person.prototype.weeklyWage = function (numberOfHours) {
        if (numberOfHours === void 0) { numberOfHours = 40; }
        return ("Employee Name: " +
            this.lastName +
            ", " +
            this.firstName +
            "</br><p> Weekly Wage: " +
            this.hourlyWage * numberOfHours +
            "</p>");
    };
    Person.prototype.addCerts = function () {
        var _a;
        var certifications = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            certifications[_i] = arguments[_i];
        }
        (_a = this.certifications).push.apply(_a, certifications);
        for (var i = 0; i < certifications.length, i++;) {
            console.log(certifications[i]);
            //concat this**
        }
        return "Certifications: " + this.certifications.join(", ");
    };
    Person.addEmployee = function (Options) {
        return new Person(Options.firstName, Options.lastName);
    };
    return Person;
}());
//let certifications = ['BA Certifications']
var Employee1 = new Person("Jack", "Peters", 33, 1234567891, "NC", 28173, "Business Analyst", 40, 25);
var Employee2 = new Person("Suzanne", "Palmer", 40, 1234567892, "NC", 28173, "Dev", 10, 30);
var Employee3 = new Person("Mickey", "Mouse", 91, 1234567883, "NC", 28277, "Actor", 40, 130);
var Employee4 = new Person("Minnie", "Mouse", 93, 1234567874, "NC", 28173, "Actress", 30, 160);
var Employee5 = new Person("Daisy", "Duck", 80, 1234567865, "NC", 28173, "Actress", 20, 100);
document.getElementById("para").innerHTML = Employee1.weeklyWage();
document.getElementById("para1").innerHTML = Employee2.weeklyWage();
document.getElementById("para2").innerHTML = Employee3.weeklyWage();
document.getElementById("para3").innerHTML = Employee4.weeklyWage();
document.getElementById("para4").innerHTML = Employee5.weeklyWage();
document.getElementById("para1").innerHTML = Employee2.getFullName();
document.getElementById("para-1").innerHTML = Employee1.addCerts("BA Certification", "pseudo cert");
//document.getElementById("para-2").innerHTML = Employee2.addCerts("IT Certification");
document.getElementById("para-2").innerHTML = Person.addEmployee({
    firstName: "Rafeena",
    lastName: "Usman"
}).getFullName();
