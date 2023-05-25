import { ISupportData } from './../interfaces/support-data';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITopicsList, User } from '../interfaces/topics-list';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


const URL_USERS = 'https://reqres.in/api/users';


@Injectable({
  providedIn: 'root'
})
export class TopicsGetService {

  constructor(private http: HttpClient) { }

  fetchTopics(): Observable<string[]> {
    return this.http.get<ITopicsList>(URL_USERS).pipe(
      map((response: ITopicsList) => {
        if (!response.data[0].first_name) {
          throw new Error('No topics fetched!');
        } else {
          return response.data.map(topic => topic.first_name);
        }
      }),
      catchError((error: Error) => {
        const errorMessage = `Error fetching topics: ${error.message}`;
        return throwError(errorMessage);
      })
    );
  }

  postSupportData(supportData: ISupportData): Observable<ISupportData> {
    if (supportData.supportUser === '11111') {
      return throwError(new Error('Error submitting support data'));
    }
    const body = {
      selectedTopic: supportData.selectedTopic,
       supportUser: supportData.supportUser, 
       supportMessage: supportData.supportMessage
      };
    return this.http.post<ISupportData>(URL_USERS, body).pipe(
      catchError((error: Error) => {
        const errorMessage = `Error posting support data: ${error.message}`;
        return throwError(errorMessage);
      })
    );
  }
  
}
