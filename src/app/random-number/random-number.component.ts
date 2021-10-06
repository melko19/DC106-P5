import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'random-number',
  templateUrl: './random-number.component.html',
  styleUrls: ['./random-number.component.css']
})
export class RandomNumberComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  result:any;

  randomNumber1 = Math.floor(Math.random() * 46) + 1;
  randomNumber2 = Math.floor(Math.random() * 46) + 1;
  randomNumber3 = Math.floor(Math.random() * 46) + 1;
  randomNumber4 = Math.floor(Math.random() * 46) + 1;
  randomNumber5 = Math.floor(Math.random() * 46) + 1;
  randomNumber6 = Math.floor(Math.random() * 46) + 1;


  randomNumber01(){
    this.result = this.randomNumber1;
  }

  randomNumber02(){
    this.result = this.randomNumber2;
  }

  randomNumber03(){
    this.result = this.randomNumber3;
  }

  randomNumber04(){
    this.result = this.randomNumber4;
  }

  randomNumber05(){
    this.result = this.randomNumber5;
  }

  randomNumber06(){
    this.result = this.randomNumber6;
  }

}
