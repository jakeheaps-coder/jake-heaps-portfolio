/**
 * Access log endpoint for the Jake Heaps portfolio email gate.
 *
 * ONE-TIME SETUP (≈2 minutes):
 * 1. Open the Sheet:
 *    https://docs.google.com/spreadsheets/d/1L66N5vmaqJFDq8vGrrnC0-hTWchIKMBykysVns4BmqE/edit
 * 2. Extensions → Apps Script. Delete any boilerplate, paste this whole file, Save.
 * 3. Deploy → New deployment → gear icon → "Web app".
 *    - Description: "portfolio access log"
 *    - Execute as: Me
 *    - Who has access: Anyone
 *    - Deploy. Authorize when prompted (it's your own script).
 * 4. Copy the "Web app URL" it gives you (ends in /exec) and send it to me.
 *    I'll paste it into the site as the logging endpoint.
 *
 * The Sheet gets a header row on first write: Timestamp | Email | Domain | Referrer | User Agent
 */

function doPost(e) {
  return handle(e);
}

// GET is used by the no-CORS form post fallback; same handler.
function doGet(e) {
  return handle(e);
}

function handle(e) {
  try {
    var params = (e && e.parameter) || {};
    var email = String(params.email || "").trim().toLowerCase();
    if (!email || email.indexOf("@") < 1) {
      return ContentService.createTextOutput(
        JSON.stringify({ ok: false, error: "invalid email" }),
      ).setMimeType(ContentService.MimeType.JSON);
    }
    var domain = email.split("@")[1] || "";
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Email",
        "Domain",
        "Referrer",
        "User Agent",
      ]);
    }
    sheet.appendRow([
      new Date(),
      email,
      domain,
      String(params.referrer || ""),
      String(params.ua || ""),
    ]);
    return ContentService.createTextOutput(
      JSON.stringify({ ok: true }),
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: String(err) }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
