import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: any[]=[]
  xisNext:boolean= true;
  winner='';
  numberofsteps:number=9;

  constructor() { }
// lets intiazided the new game
  ngOnInit(): void {
    this.newGame();
  }

  // start the new game

  newGame()
  {
    this.squares= Array(this.numberofsteps).fill(null);
    this.winner=null;
    this.xisNext=true;
  }

  //get the player current player
  get player()  {
    return this.xisNext ? 'X' :'O';
  }

  // now lets makes the move
  makemove( idx: number) {
   // check if the user click the suqer or not
   if(!this.squares[idx]) {
     this.squares.splice(idx,1,this.player);
    this.xisNext = !this.xisNext;
   }
   this.winner =this.calculatWinner();


  }
// ALROGRITYM TO CALULATE THE POSSIBLE WINNERES
  calculatWinner() {
    const possibilites = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < possibilites.length; i++) {
      const [a, b, c] = possibilites[i];
      if (
        this.squares[a] && 
        this.squares[a] === this.squares[b] && 
        this.squares[a] === this.squares[c]  )  {
        return this.squares[a];
         }
         
    }
    return null;
  }

  ///reset the ggame
  resetgame()
  {
    this.newGame();
  }

}



