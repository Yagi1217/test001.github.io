const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

const TOKEN_PATH = 'token.json';

Promise.resolve().then(() => {
  return new Promise((resolve, reject) => {
    fs.readFile('credentials.json', (err, content) => {
      if (err) return console.log('Error loading client secret file:', err);
      resolve(JSON.parse(content));
    });
  });
}).then((credentials) => {
  return new Promise((resolve, reject) => {
    const {
      client_secret,
      client_id,
      redirect_uris
    } = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

    fs.readFile(TOKEN_PATH, (err, token) => {
      if (err) return getNewToken(oAuth2Client, callback);
      oAuth2Client.setCredentials(JSON.parse(token));
      resolve(oAuth2Client);
    });
  });
}).then((auth) => {
  return new Promise((resolve, reject) => {
    const sheets = google.sheets({
      version: 'v4',
      auth
    });
    sheets.spreadsheets.values.append({
      //↓スプレッドシートのID
      spreadsheetId: '1vR51cCY3aHBjE8A2BZxB3ddxrwLAH3BrGDctsa2JTc8',
      //↓シート名
      range: 'InputTest',
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        values: [
          ["Some value", "Another value"]
        ],
      },
    },(err, result) => {
          if (err) return console.log(err);
          console.log('%d cells updated.', result.totalUpdatedCells);
          resolve(result);
        });
  });
});
