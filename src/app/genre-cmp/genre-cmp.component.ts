import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SampleServiceService } from '../sample-service.service';

@Component({
  selector: 'app-genre-cmp',
  templateUrl: './genre-cmp.component.html',
  styleUrls: ['./genre-cmp.component.css']
})
export class GenreCmpComponent implements OnInit {

   genreData:any
  // bookData: any;
  
  constructor( private service:SampleServiceService){}

  ngOnInit():void{
    this.service.getGenre_card().subscribe((data)=>{
      this.genreData=data
      
      console.log(this.genreData)
    })
    // this.service.getELEMENT_DATA().subscribe((data)=>{
    //   this.bookData=data
    //   console.log(this.bookData)
    // })
  

  
  }

//  cards=
//  [
//   {
//     genre:'Sci-fi',
//     image:'https://wallpapercave.com/dwp2x/wp11231159.jpg',
//     about:'Though science fiction and fantasy are often considered two sides of the same (speculative fiction) coin, sci-fi is distinguished by its preoccupation with real or real-feeling science. Lots of sci-fi is set in the distant future, which makes it a seedbed for stories about time travel and space exploration. But your science fiction novel doesn’t need to be inspired by “hard” science like physics and astronomy. Some of the books in this genre reflect on “soft” sciences, such as sociology and anthropology, to predict the future of the human race — more on that next!'
    
//   },
//   {
//     genre:'Thriller & Suspense',
//     image:'https://wallpapercave.com/wp/wp8313550.jpg',
//     about:'A horror story can also be called a thriller, if it employs psychological fear to build suspense. But not all thrillers are horror stories. So what are they? While this book genre encompasses many of the same elements as mystery, in a thriller the protagonist is usually acting to save their own life, rather than to solve the crime. Thrillers typically include cliffhangers, deception, high emotional stakes, and plenty of action — keeping the reader on the edge of their seat until the book’s climax. Gillian Flynn’s Gone Girl is a masterclass in the dark, mysterious thriller. '
    
//   },
//   {
//     genre:'Dystopian',
//     image:'https://wallpapercave.com/wp/wp6673753.jpg',
//     about:'A popular genre of science fiction, dystopian novels offer a bleak and frightening vision of the future. Authors writing dystopias imagine a grim society, often in the aftermath of a disaster, facing things like oppressive governments, Black Mirror-esque technology, and environmental ruin. From widely popular series like The Hunger Games to critically-acclaimed classics like Nineteen Eighty-four, the enduring appeal of dystopian fiction lies in our burning desire to know where mankind is headed — and our perverse enjoyment of dark stories, so long as they aren’t actually happening to us. '
    
//   },
//   {
//     genre:'Action & Adventure',
//     image:'https://wallpapercave.com/dwp2x/wp2654358.jpg',
//     about:'If you’re writing adventure, then chances are your book follows the structure of the Hero’s Journey. Your protagonist has a very important goal to achieve, but they’re really going to have to go through the wringer first! You throw up obstacle after obstacle, putting your hero in downright dangerous situations but eventually, they triumph and return home transformed. The action and adventure genre also complements a huge range of others, which means it has its fingers in everything from fantasy novels like The Hobbit to classic romance like Jane Eyre.'
    
//   },
//   {
//     genre:'Romance',
//     image:'https://wallpapercave.com/wp/wp8921324.jpg',
//     about:'Romance is so frequently used as a subplot that it can sometimes be tricky to know whether or not you’re writing in this genre. The key thing to remember is that the romantic relationship must be the center point of the plot. (Other giveaways include a “happily ever after” ending and the warm fuzzies.) If your novel has a romantic relationship at its heart and is perfectly at home in another genre, it probably falls into one of romance’s many subgenres, including but not limited to: young adult romance, paranormal romance, and historical romance.'
    
//   },
//   {
//     genre:'Mystery',
//     image:'https://wallpapercave.com/dwp2x/wp3856501.jpg',
//     about:'Also called detective fiction, this book genre is characterized by a gripping plot that revolves around a mystery — but hopefully, you’ve cracked that clue! The setting, characters, and tone of your book will determine precisely which category it falls under: cozy mystery, hardboiled, or something in between. But at the core of any mystery is a crime that must be solved by the protagonist. To get a sense of the clever trail of clues that’s so vital to this genre, check out Murder on the Orient Express by Agatha Christie — the grande dame of mystery fiction.'
    
//   },
  

//  ]
 }
