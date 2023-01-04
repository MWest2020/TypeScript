import fs from 'fs';

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

export class CsvFileReader {
  fileName: string;
  data: string[][];

  constructor(fileName: string) {
    this.fileName = fileName;
    this.data = this.read(fileName);
  }

  read(fileName: string): string[][] {
    let reader = fs
      .readFileSync('football.csv', {
        encoding: 'utf-8'
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      });
    return reader;
  }

  getMatchWins(team: string): number {
    let matchWins = 0;
    let matches = this.read(this.fileName);

    for (let match of matches) {
      if (match[1] === team && match[5] === MatchResult.HomeWin) {
        matchWins++;
      } else if (match[2] === team && match[5] === MatchResult.AwayWin) {
        matchWins++;
      }
    }
    return matchWins;
  }
}
