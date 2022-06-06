import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "../MatchResult";
import { dateStringToDate } from "../util";
import { MatchData } from "../MatchData";

export class MatchReader extends CsvFileReader<MatchData> {
  data: MatchData[] = [];

  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6],
    ];
  }
}
