import { GoogleSheetApis } from '../index';

const testData = {
      PRIVATE_KEY:
            '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDR2FrQX9ESfaNm\n1t2k7T/yn6tyyFcBMTRA2B2Jwj4ZqIRi9dHK/Eztdw9FZ0rftgbS/s+jSivpxBgY\n588tB0T/oTme87WJqEho0Dwdx/mUf9aKWT6VlkUm73YGgbuCxnToNB462aWG+10e\ncJy3+oNnDhGAYz1sXmIhI1n6MMTIhq6IWM9RI56yPOd5a8bXGuzE1/zd0XzNEbLI\nw3JCdLNc0GeG7VYpTVeBk6ZwDnbQQ64kIrX0S1U07HEP/hSdPB3qtHPMz/KHbmVV\nkqFRD7rMXnAr0FVgktxpT/cZj1aaXM4M8AWJRm1UycnfDAP5c8OzGN+KQr6Tm65I\ndPbqh3mNAgMBAAECggEAA04mGvNl9TE9PTGITdfqGGXJE9I3d4XLhS3zuG1+XXWk\ngl0TOMkB17wOFCjHKq65lD84gSGoloEHwTp9f+iGCoS9Iyb9MjXKc0cZe074DbB4\nVuW1JXhmMYjlrxwCA0bcDdG3+UTIiGbwREYFoerFxub0dlgOL7azDSvYMfjsraia\n182oEBoE9TKMc4DNJPRBLae0D+xgOVybZD2+1ZFILIigO/wEaDi7Mal2IO9A2i3b\nwoqqqsgFDvkuq4d/P/E3l6zu/XJctyvIYb6HBekgVdM+WQq/ae9W/L5IezUlTU0C\n9ROE+Dtx0RPES+76Y+mjti5oum0vnBgZUj7QOZxKnQKBgQDvEkPFvgjqq6R2f7uE\nTT8vWvGiLYaxBJIPjQ5vQwXFig9XDO2MlVBUAoy4KgF9DY0LrFQ0eX4qTwSJwESL\nkPE1hYmyYZhieRjIW9Vjf+KyrjrBdi89oEMa7lQ2XjsEKQRb4+vZyv61LKWgK2KR\nuQK8dXShozDLRc/k2/cZSILFgwKBgQDgtEusxW1cir3/mwbJDu77ruUMkngTP6tB\niageppOhAzsRiunMijbrUgt4G0csIcSPYsGl+10iq7mMjHFD7axZu9ASX8/h66Bq\nhiw+aEgMJI51WftuSl8VTh6BwRSp2iuVsS7zPTgg6Ei0voz7TuK0LxHsfOGayjRn\n67+DZG6nrwKBgG+cU0+J/JeyMkGwOFb3yTvOdWiFYJBb1eS0sbx3ycYDQk4dlvk+\n7BWMay2/TpqXLPX6KgWlgqU15qR4wod1z2ZxRWul7IJsjolbdi/RkIBinsOa7UsT\n+sAj6+TF8T9r9sD/kyhGgMsMYPZ5yrbFbOWW4DBmA22i1f++QYnoNEUJAoGAYG1+\nvBnNIJV5i6MfelCqRd9787U3Sitcdrd4Kg8Z81LLmm+efWQixUFkIpqyJEIpc87R\ng0UnZqWC7smmIZxxBeEPHZN4Rl8zbANAIVfm8y8M41dGCsJno2Duvof5Mhqp8Ycj\nusZeu+Bysv3CymXD68b3TiEZP6/eZWpJuTz0L4kCgYBSZNwNi62yUgGddNHil5Ve\nayS31Qihbk6a9gDUhuBB/sjRyp3vbo57FoSt3bVyHieza55w8rVUucaVMdnUBe1C\nvWvPkOGalkLKW91Vszpn6fK3AiKH6luzPVDEBCnKNOh0n+ijyop+t1MPMfs1bYbZ\nerd6QUZvHan0mA6YNR21iA==\n-----END PRIVATE KEY-----\n',
      CLIENT_EMAIL: 'google-sheet-apis@main-voltage-344808.iam.gserviceaccount.com',
      SPREADSHEET_ID: '194k-sxQ4gvJL66W0Gez2bDGP3o0Hw3nNsg5i8wpsd7A',
      TAB_NAME: 'test',
};

describe('GoogleSheetApis', () => {
      describe('GetData', () => {
            it('Pass', async () => {
                  const googleSheetApis = new GoogleSheetApis({
                        private_key: testData.PRIVATE_KEY,
                        client_email: testData.CLIENT_EMAIL,
                  });

                  const data = await googleSheetApis.getData({
                        spreadsheetId: testData.SPREADSHEET_ID,
                        tabName: testData.TAB_NAME,
                        startColumn: 'A',
                        endColumn: 'F',
                  });
                  expect(data).toBeDefined();
            });

            it('Fail - wrong private key', async () => {
                  const googleSheetApis = new GoogleSheetApis({
                        private_key: 'wrong_private_key',
                        client_email: testData.CLIENT_EMAIL,
                  });
                  try {
                        const data = await googleSheetApis.getData({
                              spreadsheetId: testData.SPREADSHEET_ID,
                              tabName: testData.TAB_NAME,
                              startColumn: 'A',
                              endColumn: 'F',
                        });
                  } catch (e) {
                        expect(e).toBeDefined();
                        expect((e as Error).message).toBe('Invalid private key.');
                  }
            });

            it('Fail - wrong client email', async () => {
                  const googleSheetApis = new GoogleSheetApis({
                        private_key: testData.PRIVATE_KEY,
                        client_email: 'wrong_client_email',
                  });
                  try {
                        const data = await googleSheetApis.getData({
                              spreadsheetId: testData.SPREADSHEET_ID,
                              tabName: testData.TAB_NAME,
                              startColumn: 'A',
                              endColumn: 'F',
                        });
                  } catch (e) {
                        expect(e).toBeDefined();
                        expect((e as Error).message).toBe('Invalid client email.');
                  }
            });

            it('Fail - wrong spreadsheet id', async () => {
                  const googleSheetApis = new GoogleSheetApis({
                        private_key: testData.PRIVATE_KEY,
                        client_email: testData.CLIENT_EMAIL,
                  });
                  try {
                        const data = await googleSheetApis.getData({
                              spreadsheetId: 'wrong_spreadsheet_id',
                              tabName: testData.TAB_NAME,
                              startColumn: 'A',
                              endColumn: 'F',
                        });
                  } catch (e) {
                        expect(e).toBeDefined();
                        expect((e as Error).message).toBe('The spreadsheet ID was not found.');
                  }
            });

            it('Fail - wrong spreadsheet id', async () => {
                  const googleSheetApis = new GoogleSheetApis({
                        private_key: testData.PRIVATE_KEY,
                        client_email: testData.CLIENT_EMAIL,
                  });
                  try {
                        const data = await googleSheetApis.getData({
                              spreadsheetId: testData.SPREADSHEET_ID,
                              tabName: 'wrong tab name',
                              startColumn: 'A',
                              endColumn: 'F',
                        });
                  } catch (e) {
                        expect(e).toBeDefined();
                        expect((e as Error).message).toContain('Invalid tab name.');
                  }
            });
      });
});
