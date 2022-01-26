import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nginx-app';

  constructor(private http: HttpClient) { }

  test() {
    // this.http.get('/api/array').subscribe((data) => console.log(data))
    this.http.get(environment.apiUrl + '/hello').subscribe((data) => console.log(data))
    this.http.get(environment.apiUrl + '/array').subscribe((data) => console.log(data))
  }
}
