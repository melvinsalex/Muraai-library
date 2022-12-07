import { Component,OnInit, ViewChild, } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AddBookComponent } from '../add-book/add-book.component';
import { SampleServiceService } from '../sample-service.service';
import {MatPaginator} from '@angular/material/paginator';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns = ['id','bookName','author','genre','star','dots'];
  
  // dataSource = new MatTableDataSource<any>();

  
  

 

  
  constructor(private service:SampleServiceService,private route:ActivatedRoute,private router:Router,private dialog:MatDialog){}

  
  dataSource : Observable<any>=of([{}])
  
 
  ngOnInit():void{
    // this.dataSource=this.service.getELEMENT_DATA()
    this.service.getELEMENT_DATA()
    this.dataSource=this.service.dataEvents$

    

    
  }
  
  // editRow(){
  //   this.service.createELEMENT_DATA({
  //     // id:12,
  //     // bookName:"ghsdjhsvjcvh",
  //     // author:"poiuy",
  //     // genre:"fiction"
  //   }).subscribe(d=>(
  //     console.log('===========',d)
      
  //   ))
  // }

  editRow(yourData:any){
    console.log("edit is working");
    
    const dialogRef = this.dialog.open(AddBookComponent, {
      height: "300px",
      width:"300px",
      data:{...yourData,showUpdateButton:true}

      

      
    });

    // console.log(dialogRef);
    
    dialogRef.afterClosed().subscribe(result=>{
      console.log(`Dialog result: ${result}`);
      
    })

  }
  
  deleteRow(id:any){
    this.service.deleteELEMENT_DATA(id).subscribe();
  }
  // fav(){
  //   this.router.navigate(['fav-cmp/'])

  // }
card(id:any){
this.router.navigate(['description/',id])
}
favFunc(data:any){
  this.service.updateFav(data)
  .subscribe(d=>{console.log('-----',d);
  window.location.reload()
  })
}
// genreFunc(){
//   this.router.navigate(['genre-cmp/'])

// }

// logOut(){
//   console.log("logout");
  
  
//     localStorage.setItem('LoginSuccessful','false')
//   //  console.log(localStorage.getItem('LoginSuccessful'))
//   // localStorage.clear()
//     this.router.navigate(['/login'])
 
      
//    }
}
//}



  

// export interface BookList {
//   position: number;
//   bookName: string;
//   author: string;
//   genre:string
// }

// const ELEMENT_DATA: BookList[] = [
//     { position: 1, bookName: 'Adventures of Tom Sawyer', author: "Mark Twain", genre: 'folklore' },
//     { position: 2, bookName: 'Agni Veena', author: "Kazi Nasrul Islam", genre: 'poem' },
//     { position: 3, bookName: 'Animal Farm', author: " George Orwell", genre: 'satire' },
//     { position: 4, bookName: 'Ben Hur', author: "Lewis Wallace", genre: 'history' },
//     { position: 5, bookName: 'Baburnama', author: " Babur", genre: 'biograpy' },
//     { position: 6, bookName: 'Arthashastra', author: "Kautilya", genre: 'political' },
//     { position: 7, bookName: 'Anand Math', author: "Bankimchandra Chattopadhyay", genre: 'fiction' },
//     { position: 8, bookName: 'Mein Kampf', author: "Adolf Hitler", genre: 'autobiograpy' },
//     { position: 9, bookName: 'The Vicar of Wakefield', author: " Oliver Goldsmith", genre: 'comedy' },
//     { position: 10, bookName: 'Time Machine', author: "H.G. Wells", genre: 'sci-fi' },
//    ];
  