import {Component, OnInit} from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.component.html'

})
export class ApiTestComponent implements OnInit {
  apiurl = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=0c600fa8840692fcf947b874a7b53f30&text=sun&per_page=10&format=json&nojsoncallback=1";
  

  constructor(private http: Http) { }

  /*
  ngOnInit() {
    for(let i = 0; i < 5; i++){
      this.images.push('https://source.unsplash.com/random/100x100');
    }
  }

}
*/
  ngOnInit() {



  }

}
