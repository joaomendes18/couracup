import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import xlsx from 'node-xlsx';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  couracup: any[] = [];

  constructor(private http: HttpClient) {}

  async getData(): Promise<boolean> {
    try {
      const traquinas: string =
        'https://www.googleapis.com/drive/v3/files/12IdGVNgYycEzCASNOmtXp3IMNogm5uN6';
      //     'https://www.googleapis.com/drive/v3/files/1Lu7d0Z9TQD-13uSU9m58sqskcUE7zPnq'

      // drive
      const driveFile = await firstValueFrom(
        this.http.get(traquinas, {
          params: {
            key: 'AIzaSyB2fqeKP9BJDn1hkPz5RABEkcgyR_fU7pU',
            alt: 'media',
            cache: new Date().getTime(),
          },
          responseType: 'blob',
        })
      );

      // const driveFile = await firstValueFrom(
      //   this.http.get('./assets/u7_u9.xlsm', {
      //     responseType: 'blob',
      //   })
      // );

      // if ((driveFile as Blob).size === this.fileSize) {
      //   return false;
      // }

      const arrayBuffer = await (driveFile as Blob).arrayBuffer();

      this.couracup = xlsx.parse(arrayBuffer, {
        rawNumbers: false,
        header: 'A',
        blankrows: true,
      });

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
