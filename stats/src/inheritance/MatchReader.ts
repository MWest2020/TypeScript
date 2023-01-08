import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from '../MatchResult';
import { dateStringToDate, stringToNumber } from '../utils';

//tuple
type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(
    row: string[]
  ): [Date, string, string, number, number, MatchResult, string] {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult /*type insertion*/,
      row[6]
    ];
  }
}
