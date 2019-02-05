import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuoteComponent implements OnInit {

    quotes = [
      new Quote( 1,'Quote of love','levine','chastine', 0, 0,new Date(2018,3,14)),
      new Quote( 2,'Quotes of life','adams','chastine', 0, 0,new Date(2018,6,9)),
      new Quote( 3, 'Quotes of friendship','caline','chastine', 0, 0,new Date(2018,1,12) ),
      new Quote( 4, 'Quotes of success','nancy','chastine', 0, 0,new Date(2018,0,18) ),
      new Quote( 5, 'Quotes of business','Damn Math','chastine', 0,0,new Date(2018,2,14) ),
      new Quote( 6, 'Quotes of sadness','smith','chastine', 0, 0,new Date(2018,3,14) ),

  ]

  toogleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
}

   completeQuote(isComplete,index){
     if (isComplete){
           this.quotes.splice(index,1);
        }
      }

      addNewQuote(quote){
        let quoteLength = this.quotes.length;
        quote.id=quoteLength+1;
        
        this.quotes.push(quote)

    }
      constructor()  {}

      ngOnInit() {
      }
    
    
    }
