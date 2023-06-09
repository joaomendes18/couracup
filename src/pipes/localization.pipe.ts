import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'localization', standalone: true })
export class LocalizationPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'position':
        return '#';
      case 'team':
        return 'Equipa';
      case 'points':
        return 'P';
      case 'played':
        return 'J';
      case 'wins':
        return 'V';
      case 'draws':
        return 'E';
      case 'losses':
        return 'D';
      case 'goalsFor':
        return 'GM';
      case 'goalsAgainst':
        return 'GS';
      case 'goalsDifference':
        return 'DG';
      default:
        return value;
    }
  }
}
