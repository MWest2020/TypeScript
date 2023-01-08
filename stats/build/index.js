"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
const Summary_1 = require("./Summary");
const csvFileReader = new CsvFileReader_1.CsvFileReader('./football.csv');
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
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
const summary = Summary_1.Summary.WinsAnalysisWithHtmlReport(team, outputFilename);
summary.buildAndPrintReport(matchReader.matches);
