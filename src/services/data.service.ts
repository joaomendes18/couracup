import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { read } from 'xlsx';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  couracup: any;

  constructor(private http: HttpClient) {}

  async getData() {
    try {
      const driveFile = await firstValueFrom(
        this.http.get(
          'https://www.googleapis.com/drive/v3/files/1Lu7d0Z9TQD-13uSU9m58sqskcUE7zPnq',
          {
            params: {
              key: 'AIzaSyBqm0aTm3CZcNmXV3bSH8iIXQX9T4AJSj8',
              alt: 'media',
            },
            responseType: 'blob',
          }
        )
      );

      // const f = await (await fetch('assets/Equipas e Grupos.xlsx')).arrayBuffer();

      const arrayBuffer = await (driveFile as Blob).arrayBuffer();

      this.couracup = read(arrayBuffer);
    } catch (error) {
      console.log(error);
    }
  }
}
