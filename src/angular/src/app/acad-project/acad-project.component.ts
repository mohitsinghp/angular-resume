import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-acad-project',
  templateUrl: './acad-project.component.html',
  styleUrls: ['./acad-project.component.scss']
})
export class AcadProjectComponent implements OnInit {

  constructor() { }

  @Input() projects: [];

  ngOnInit(): void {
  }

}
