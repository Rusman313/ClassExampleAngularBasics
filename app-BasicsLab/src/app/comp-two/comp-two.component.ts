import { Component, OnInit } from '@angular/core';
import {Person} from '../person';
import { PersonService } from '../person.service';


@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrls: ['./comp-two.component.css']
})
export class CompTwoComponent implements OnInit {
 people:Person[]
  
  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople(): void{
    this.personService.getPerson().subscribe((response) => {
      this.people = response;
      console.log('Working Observable! FINALLLY!');
    },
    (error) => {console.log(error);});
  }
  /*get dataList(): void {
    return this.personService.getPerson();
  }*/

    
  }
