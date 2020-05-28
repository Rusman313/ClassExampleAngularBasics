import { Component, OnInit } from '@angular/core';
import {Person} from '../person';
import { PersonService } from '../person.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrls: ['./comp-two.component.css']
})
export class CompTwoComponent implements OnInit {
 
  
  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.personService.getPerson();
  }

  get dataList(): void {
    return this.personService.getPerson();
  }

    
  }
