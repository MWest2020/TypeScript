import { CsvFileReader } from './CsvFileReader';

let manUnited = new CsvFileReader('./football.csv');

let wins = manUnited.getMatchWins('Man United');

console.log(wins);
