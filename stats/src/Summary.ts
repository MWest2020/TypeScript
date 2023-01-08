import { ConsoleReport } from './reportTargets/ConsoleReport';
import { MatchData } from './MatchData';
import { WinsAnalysis } from './Analyzers/WinsAnalysis';
import { HtmlReport } from './reportTargets/HtmlReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

//better name Reporter?
export class Summary {
  // static is not invoked with a instance of, but can be used to instance itself to avoid verbose code
  static WinsAnalysisWithHtmlReport(
    team: string,
    outputFilename: string
  ): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport(outputFilename));
  }

  static WinsAnalysisWithConsoleReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new ConsoleReport());
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
