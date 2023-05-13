import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactMe } from './contactme';
import { GenericHttpService } from 'src/app/generic-http.service';

@Injectable({
  providedIn: 'root',
})
export class ContactMeService extends GenericHttpService<ContactMe> {
  constructor(httpClient: HttpClient) {
    super(httpClient, `contactme`);
  } // constructor
}
