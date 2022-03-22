import { JWT } from 'google-auth-library';
import { google, sheets_v4 } from 'googleapis';
import { GoogleSheetApisProps, ParamsResourceSpreadsheetsValuesBatchget } from './interfaces';

export class GoogleSheetApis {
      private auth: JWT;
      private sheets: sheets_v4.Sheets;

      constructor(props: GoogleSheetApisProps) {
            this.auth = new google.auth.JWT({
                  key: props.private_key,
                  email: props.client_email,
                  scopes: 'https://www.googleapis.com/auth/spreadsheets',
            });
            this.sheets = google.sheets('v4');
      }

      /**
       *
       * @description get data from spreadsheet
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
                  const message = (e as Error).message;
                  switch (message) {
                        case 'Requested entity was not found.':
                              throw new Error('The spreadsheet ID was not found.');
                        case 'error:0909006C:PEM routines:get_name:no start line':
                              throw new Error('Invalid private key.');
                        case 'invalid_grant: Invalid grant: account not found':
                              throw new Error('Invalid client email.');
                        case `Unable to parse range: ${params.tabName}!A:F`:
                              throw new Error('Invalid tab name.');
                        default:
                              throw new Error(message);
                  }
            }
      }
}
