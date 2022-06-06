"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Symmary_1 = require("./Symmary");
// const csvFileReader = new CsvFileReader("football.csv");
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();
const matchReader = MatchReader_1.MatchReader.withCsv("football.csv");
// const summary = new Summary(
//   new WinsAnalysis("Man United"),
//   new ConsoleReport()
// );
// const summary = new Summary(new WinsAnalysis("Man United"), new HtmlReport());
// summary.buildAndPrintReport(matchReader.matches);
const summary = Symmary_1.Summary.winsAnalysisWithHtmlRepor("Man United");
summary.buildAndPrintReport(matchReader.matches);
