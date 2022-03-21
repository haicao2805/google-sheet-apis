import { JWT } from 'google-auth-library';
import { google, sheets_v4 } from 'googleapis';
import { GoogleSheetApisProps, ParamsResourceSpreadsheetsValuesBatchget } from './interfaces';

export class GoogleSheetApis {
      private auth: JWT;
      private sheets: sheets_v4.Sheets;

      constructor(props: GoogleSheetApisProps) {
            this.auth = new google.auth.JWT({
                  keyId: props.keyId,
                  key: props.key,
                  email: props.email,
                  scopes: props.scopes,
            });
            this.sheets = google.sheets('v4');
      }

      /**
       *
       * @description
       * @param params
       * @returns
       */
      public async getData(params: ParamsResourceSpreadsheetsValuesBatchget) {
            try {
                  const result = await this.sheets.spreadsheets.values.batchGet({
                        spreadsheetId: params.spreadsheetId,
                        ranges: [`${params.tabName}!${params.startColumn}:${params.endColumn}`],
                        auth: this.auth,
                  });
                  return result.data.valueRanges[0].values as string[][];
            } catch (e) {
                  return null;
            }
      }
}
