import { Analyzer } from '../Summary';
import { OutputTarget } from '../Summary';

export class ConsoleReport implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}
