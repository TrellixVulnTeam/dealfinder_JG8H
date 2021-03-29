import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Tag } from '../models/tag';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TagService {

  baseUrl: string = "/api/Tag";

  constructor(private httpClient: HttpClient) { }

  retrieveAllTags(): Observable<Tag[]>
  {		
    return this.httpClient.get<Tag[]>(this.baseUrl + "/retrieveAllTags").pipe
    (
      catchError(this.handleError)
    );
  }

  retrieveTagByTagId(tagId: number): Observable<Tag>
  {
    return this.httpClient.get<Tag>(this.baseUrl + "/retrieveTagByTagId/" + tagId).pipe
    (
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse)
  {
    let errorMessage: string = "";
    
    if (error.error instanceof ErrorEvent) 
    {		
      errorMessage = "An unknown error has occurred: " + error.error;
    } 
    else 
    {		
      errorMessage = "A HTTP error has occurred: " + `HTTP ${error.status}: ${error.error}`;
    }
    
    console.error(errorMessage);
    
    return throwError(errorMessage);		
  }
}
