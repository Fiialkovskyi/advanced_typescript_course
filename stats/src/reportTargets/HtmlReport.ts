import { OutputTarget } from "../Symmary";
import fs from "fs";

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `
      <div>
        <h1>Report Summary</h1>
        <div>${report}</div>
      </div>
    `;

    fs.writeFileSync("report.html", html);
  }
}
