import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import xlsx from 'node-xlsx';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  async getData(uri: string): Promise<any[]> {
    try {
      const driveFile = await firstValueFrom(
        this.http.get(uri, {
          params: {
            cache: new Date().getTime(),
          },
          responseType: 'blob',
        })
      );

      const arrayBuffer = await (driveFile as Blob).arrayBuffer();
      const data = xlsx.parse(arrayBuffer, {
        rawNumbers: false,
        header: 'A',
        blankrows: true,
      });

      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}
