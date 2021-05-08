import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-objective',
  templateUrl: './objective.component.html',
  styleUrls: ['./objective.component.scss']
})
export class ObjectiveComponent implements OnInit {

  constructor() { }

  @Input() resume: any;

  ngOnInit(): void {
  }

}
