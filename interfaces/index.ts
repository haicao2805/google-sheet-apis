export interface ParamsResourceSpreadsheetsValuesBatchget {
      /**
       * @description the ID of the spreadsheet
       */
      spreadsheetId: string;

      /**
       * @description the tab name
       */
      tabName: string;

      /**
       * @description the start column
       */
      startColumn: string;

      /**
       * @description the end column
       */
      endColumn: string;
}

export interface GoogleSheetApisProps {
      /**
       * @description value of key
       */
      private_key: string;

      /**
       * @description service account email address.
       */
      client_email: string;
}
