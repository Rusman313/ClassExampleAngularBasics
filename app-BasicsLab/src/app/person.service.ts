import { Injectable } from '@angular/core';
import{Observable, of} from 'rxjs';
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
  constructor(){
  }
  getPerson(): Observable<Person[]>{
    return of(this.typeOfPersonArr.filter((person) =>{
      return ("Name: " + person.getFullName());
    }))
  }
  /*getPerson():void{
    this.typeOfPersonArr.filter((person) => {Subscriber.name
      return "Name: " + person.getFullName()})    
    }*/
  
   }

