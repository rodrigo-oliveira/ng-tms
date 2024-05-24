import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationErrorStore {
    showError$ = new BehaviorSubject<boolean>(false);

    constructor( ) { }
}