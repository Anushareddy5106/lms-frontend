import { Component, OnInit } from '@angular/core';
import { QueryService } from '../../services/query.service';
import { Query } from '../../models/query.model';


@Component({
  selector: 'app-studentqueries',
  templateUrl: './studentqueries.component.html',
  styleUrl: './studentqueries.component.css'
})
export class StudentQueriesComponent implements OnInit{
  queries: Query[] = [];

    constructor(private queryService: QueryService) {}

    ngOnInit(): void {
        // this.queryService.getQueries().subscribe((data: Query[]) => {
        //   console.log('Fetched queries:', data); // Debugging line to check the fetched data
        //   this.queries = data;
        //   //console.log('Filtered queries:', this.queries); // Debugging line to check the filtered data
        // });
      }
}
