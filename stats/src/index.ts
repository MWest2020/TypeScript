import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { Summary } from './Summary';

const csvFileReader = new CsvFileReader('./football.csv');

const matchReader = new MatchReader(csvFileReader);

matchReader.load();

const team = 'Man United';
const outputFilename = './reports/htmlreport.html';

// const consoleSummary = Summary.WinsAnalysisWithConsoleReport(team);

// consoleSummary.buildAndPrintReport(matchReader.matches);

// const htmlSummary = new Summary(
//   new WinsAnalysis(team),
//   new HtmlReport(outputFilename)
// );

// htmlSummary.buildAndPrintReport(matchReader.matches);
const summary = Summary.WinsAnalysisWithHtmlReport(team, outputFilename);
summary.buildAndPrintReport(matchReader.matches);
