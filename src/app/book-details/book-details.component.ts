import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {


  @Output() parentEditFunction= new EventEmitter<any>()
  @Output() parentDelFunction= new EventEmitter<any>()
  @Input() Value: any;
  constructor(){}

  ngOnInit(): void {}
  editRow(){
    this.parentEditFunction.emit(this.Value) 
    
  }
  deleteRow(){
    this.parentDelFunction.emit(this.Value)
  }

}
