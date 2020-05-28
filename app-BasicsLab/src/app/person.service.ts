import { Injectable } from '@angular/core';
import{Observable, of, Subscriber} from 'rxjs';
import {Person} from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private typeOfPersonArr: Person[]=[
    new Person("Rafeena", "Usman"),
    new Person("Salina","Chona"),
    new Person("Aahana", "Chona")
  ];
  Observable: (value: Person, index: number, array: Person[]) => value is Person;
constructor(){}
getPersona():Observable<T>{
  return new Observable(Subscriber => { this.delay(3000).then(() => Subscriber.next(this.typeOfPersonArr.filter((this.Observable),{ "Name: " + this.getFullName()})))})
}
  delay(arg0: number) {
    throw new Error("Method not implemented.");
  }
  /*getPerson():void{
    this.typeOfPersonArr.filter((person) => {Subscriber.name
      return "Name: " + person.getFullName()})    
    }*/
  
   }

