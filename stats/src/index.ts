import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Symmary";
import { HtmlReport } from "./reportTargets/HtmlReport";

// const csvFileReader = new CsvFileReader("football.csv");
// const matchReader = new MatchReader(csvFileReader);

// matchReader.load();

const matchReader = MatchReader.withCsv("football.csv");

// const summary = new Summary(
//   new WinsAnalysis("Man United"),
//   new ConsoleReport()
// );

// const summary = new Summary(new WinsAnalysis("Man United"), new HtmlReport());

// summary.buildAndPrintReport(matchReader.matches);

const summary = Summary.winsAnalysisWithHtmlRepor("Man United");
summary.buildAndPrintReport(matchReader.matches);
