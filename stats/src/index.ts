import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { WinAnalysis } from './analyzers/WinAnalysis';
import { ConsoleReport } from './reportTarget/ConsoleReport';
import { Summary } from './Summary';

// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(new WinAnalysis('Man United'), new ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);
