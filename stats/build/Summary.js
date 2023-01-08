"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const ConsoleReport_1 = require("./reportTargets/ConsoleReport");
const WinsAnalysis_1 = require("./Analyzers/WinsAnalysis");
const HtmlReport_1 = require("./reportTargets/HtmlReport");
//better name Reporter?
class Summary {
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    // static is not invoked with a instance of, but can be used to instance itself to avoid verbose code
    static WinsAnalysisWithHtmlReport(team, outputFilename) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(team), new HtmlReport_1.HtmlReport(outputFilename));
    }
    static WinsAnalysisWithConsoleReport(team) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(team), new ConsoleReport_1.ConsoleReport());
    }
    buildAndPrintReport(matches) {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}
exports.Summary = Summary;
