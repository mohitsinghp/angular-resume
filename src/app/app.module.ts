import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { AcadProjectComponent } from './acad-project/acad-project.component';
import { PersonalProjectComponent } from './personal-project/personal-project.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { ObjectiveComponent } from './objective/objective.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SkillsComponent,
    EducationComponent,
    TrainingsComponent,
    AcadProjectComponent,
    PersonalProjectComponent,
    ProjectsComponent,
    ExperienceComponent,
    ObjectiveComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
