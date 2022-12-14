import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AddBookComponent } from '../add-book/add-book.component';
import { SampleServiceService } from '../sample-service.service';


@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent {
  idDetails:any
  // data:"idDetails" | undefined
  


constructor(private route:ActivatedRoute,private service:SampleServiceService, private dialog:MatDialog ,private router:Router){}

ngOnInit(){
  console.log('===id==',this.route.snapshot.params['id'])
  this.service.getDetails(this.route.snapshot.params['id']).subscribe(x => {
    this.idDetails=x
    console.log('---',x)
  });

}

editRow(yourData:any){
  console.log("edit is working");
  
  const dialogRef = this.dialog.open(AddBookComponent, {
    height: "300px",
    width:"300px",
    data:{...yourData,showUpdateButton:true}

    

    
  });

  // console.log(dialogRef);`
  
  dialogRef.afterClosed().subscribe(result=>{
    console.log(`Dialog result: ${result}`);
    
  })

}

deleteRow(id:any){
  this.service.deleteELEMENT_DATA(id).subscribe(d=>
    {this.router.navigate(["dashboard"])});
}

}
