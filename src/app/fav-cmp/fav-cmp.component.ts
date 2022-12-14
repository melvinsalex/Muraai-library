import { Component, OnInit } from '@angular/core';
import { filter, map, Observable, of } from 'rxjs';
import { SampleServiceService } from '../sample-service.service';




@Component({
  selector: 'app-fav-cmp',
  templateUrl: './fav-cmp.component.html',
  styleUrls: ['./fav-cmp.component.css']
})
export class FavCmpComponent implements OnInit {
  displayedColumns = ['id','bookName','author','genre','star',];
  // dataSource: any;

  dataSource:  Observable<any>=of([{}])
  constructor(private service:SampleServiceService){}
  

  ngOnInit():void{
   // this. dataSource=this.service.getELEMENT_DATA()
   this.service.getELEMENT_DATA()
     this. dataSource=this.service.dataEvents$

    // .subscribe((data)=>{
    //   this.favDetails=data
    
    //   console.log(this.favDetails)
    // })
    //----------------
    .pipe(map((a:any)=>{
      console.log('=====a====',a);
      
     return (a.filter((n:any)=> n.fav))
    }))
    
   }

    
      
}
   



