import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'resume';
    resume: any;

    constructor(private httpService: HttpService) { }

    ngOnInit(): void {
        console.log("Oninit call");
        this.httpService.getResume()
            .subscribe(data => {
                this.resume = data;
            })
    }
}
