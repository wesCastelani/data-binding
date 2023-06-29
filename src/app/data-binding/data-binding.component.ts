import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  url:string = 'http://wes.com'
  cursoAngular:boolean = true

  imgUrl:string = 'https://fastly.picsum.photos/id/982/200/300.jpg?hmac=xTKU9lOLW4f1_EmdynREJoYXZ7jXQUnwUNcYa6Nf4WA';

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true
  }

}
