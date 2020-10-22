import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Joke } from 'src/app/features/joke/models/joke.model';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-datatable',
  templateUrl: './app-datatable.component.html',
  styleUrls: ['./app-datatable.component.css']
})
export class AppDatatableComponent implements OnInit, OnChanges {
  @Input() columns: any[];
  displayedColumns: string[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() dataSource :MatTableDataSource<any>;
  @Input() flagList : string[];

  constructor() { }

  ngOnInit(): void { 
    
  }

  ngOnChanges(changes:SimpleChanges){
    if(changes.columns && changes.columns.currentValue){
      this.displayedColumns = this.columns.map(element=> element.column);
    }
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
