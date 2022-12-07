// import { Component ,OnInit} from '@angular/core';
// import { Observable, of } from 'rxjs';
// import { SampleServiceService } from '../sample-service.service';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css']
// })
// export class HeaderComponent implements OnInit{
//   displayedColumns = ['id','bookName','author','genre','star'];

//   constructor(private service:SampleServiceService){}
//   dataSource : Observable<any>=of([{}])

//   ngOnInit(): void {
//     this.dataSource=this.service.getELEMENT_DATA();
//   }


//   addRow(){
//     this.service.createELEMENT_DATA({
//       id:120,
//       bookName:"qwertyuiop",
//       author:"poiuy",
//       genre:"comedy"
//     }).subscribe(d=>(
//       console.log('===========',d)
      
//     ))


//   }
// }
//--------------------------------------------------------------------------

import {Component,OnInit} from '@angular/core'
import { MatDialog }  from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import {AddBookComponent} from '../add-book/add-book.component';
import { MembershipComponent } from '../membership/membership.component';
import { SampleServiceService } from '../sample-service.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  a:any;
  name:any;
  f:any;
  l:any;
  title = 'Angular Search Using ng2-search-filter';

  searchText: any;

  loggedIn$: Observable<boolean> = of(false);

  constructor(private dialog: MatDialog,private router:Router, private service: SampleServiceService){}
  ngOnInit(): void {
     this.loggedIn$ = this.service.loggedIn$;
     console.log('------lo-----')
      this.a=localStorage.getItem('email')
      this.name=this.a?.split('.').join(' ').split('@',1).join('')
      this.f=((this.name?.split(' ',1))[0])[0]

      this.l=((this.name?.split(' ',2))[1])[0]
      // this.f=this.f.toUppercase()

      // this.l=this.l.toUppercase()


  }
  addBook(){
    const dialogRef = this.dialog.open(AddBookComponent, {
      height: "400px",
      width:"230px",
      
    });
    dialogRef.afterClosed().subscribe(result=>{
      console.log(`Dialog result: ${result}`);
      
    })

  }


  addPerson(){
    const dialogRef = this.dialog.open(MembershipComponent, {
      height: "450px",
      width:"750px",
      
    });
    dialogRef.afterClosed().subscribe(result=>{
      console.log(`Dialog result: ${result}`);
      
    })
  }


  onSearch(value:any){
    console.log('-----',value);
    this.service.searchItem(value)
    
  }



  fav(){
    this.router.navigate(['fav-cmp/'])

  }
  genreFunc(){
    this.router.navigate(['genre-cmp/'])
  
  }
  booksFunc(){
    this.router.navigate(['dashboard/'])
    // window.location.reload()


  }
  
  logOut(){
    console.log("logout");
    
    
      localStorage.setItem('LoginSuccessful','false')
      this.service.setLoginStatus(false);

    //  console.log(localStorage.getItem('LoginSuccessful'))
    //  localStorage.clear()

      this.router.navigate(['/login'])
      // window.location.reload()
   
        
     }
}
