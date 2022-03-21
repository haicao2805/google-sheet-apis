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
       * @description the ID of the key
       */
      keyId: string;

      /**
       * @description value of key
       */
      key: string;

      /**
       * @description service account email address.
       */
      email: string;

      /**
       * @description list of requested scopes or a single scope.
       */
      scopes: string[] | string;
}
