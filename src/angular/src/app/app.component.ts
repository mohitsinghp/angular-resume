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

    async ngOnInit(): Promise<void> {
        try {
            const data = await this.httpService.getResume();

            this.resume = data;
        }catch(error) {
            console.log(error);
        }

    }
}
