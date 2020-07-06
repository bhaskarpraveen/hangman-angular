import { Component, OnInit, Inject } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  word_array
  word;
  display_word=[];
  letterArray=[];
  selected_words=[];
  game_over;
  chances_missed;
  correct;
  game_status;
  constructor() { 
  this.word_array=['focus','organize','grow','balance','listen','elevate','joy','hope','worth','inspire','grace','belong','wonder','simplify'];
  this.initialize()
  }
  initialize(){
    for(var i = 0; i < 26; i++) {
      this.letterArray.push(String.fromCharCode(97 + i));
  }
  this.word=this.word_array[Math.floor(Math.random() * this.word_array.length)];
  this.handleWordDisplay()
  this.selected_words=[];
  this.game_over='';
  this.chances_missed=0;
  this.correct=0;
  this.game_status=-1;
  }

  handleWordDisplay(){
    for(let i of this.word ){
      this.display_word.push(i);
    }
  }
  handleAlphabetClick(alphabet){
    this.selected_words.push(alphabet);
    if(this.word.indexOf(alphabet)===-1)
    this.chances_missed++;
    else
    this.display_word.forEach((letter)=>{
      if(letter == alphabet)
      this.correct++
    })
    this.ngOnInit()
  }
  handleGameOver(){
    if(this.correct!=this.word.length){
      this.game_over = "GAME-OVER".slice(0,this.chances_missed)
      if(this.chances_missed=="GAME-OVER".length){
        this.game_status=0
      }
    }
   else{
    this.game_over="You Won!!"
    this.game_status=1;
   }
   
  }
  handleReset(){
  this.display_word=[];
  this.letterArray=[];
 
  this.initialize()

  }
  checkDisable(alphabet){
    if(this.game_status==0||this.game_status==1)
    return true;
    else{
      let value=false;
      this.selected_words.forEach(alp=>{
        if(alp == alphabet) value=true
      })
      return value;
    }
   
  
  }

  ngOnInit() {
   this.handleGameOver()
 
  }

 
  

  
}
