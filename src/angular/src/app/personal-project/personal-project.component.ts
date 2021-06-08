import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-personal-project',
  templateUrl: './personal-project.component.html',
  styleUrls: ['./personal-project.component.scss']
})
export class PersonalProjectComponent implements OnInit {

  constructor() { }

  @Input() personalProjects: [];

  ngOnInit(): void {
  }

}
