import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss']
})
export class TrainingsComponent implements OnInit {

  constructor() { }

  @Input() trainings: [];

  ngOnInit(): void {
  }

}
