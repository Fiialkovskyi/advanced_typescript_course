import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  static winsAnalysisWithHtmlRepor(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport());
  }

  buildAndPrintReport(matches: MatchData[]) {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
