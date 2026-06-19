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
 * Sheet columns: Timestamp | Email | Domain | Referrer | User Agent | Event | Session | Seconds | View
 *   - event "entry"    : a visitor passed the email gate (Referrer/UA filled).
 *   - event "duration" : engagement ping — Seconds = active time on page,
 *                        grouped by Session; take MAX(Seconds) per Session for
 *                        the total time on page, and View = hash/section.
 * The first 5 columns are unchanged from the original schema, so historical
 * rows stay aligned; columns F–I were appended.
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
    var event = String(params.event || "entry").trim().toLowerCase();
    var email = String(params.email || "").trim().toLowerCase();
    if (!email || email.indexOf("@") < 1) {
      return json({ ok: false, error: "invalid email" });
    }
    var domain = email.split("@")[1] || "";
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    ensureHeader(sheet);
    sheet.appendRow([
      new Date(),
      email,
      domain,
      String(params.referrer || ""),
      String(params.ua || ""),
      event,
      String(params.session || ""),
      params.seconds ? Number(params.seconds) : "",
      String(params.view || ""),
    ]);
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

// Header labels for the 9-column schema. On a brand-new Sheet, write the full
// row; on an existing Sheet, only append the new column labels (F–I) so legacy
// data is left untouched.
function ensureHeader(sheet) {
  var header = [
    "Timestamp", "Email", "Domain", "Referrer", "User Agent",
    "Event", "Session", "Seconds", "View",
  ];
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(header);
    return;
  }
  var width = sheet.getLastColumn();
  if (width < header.length) {
    sheet
      .getRange(1, width + 1, 1, header.length - width)
      .setValues([header.slice(width)]);
  }
}

function json(obj) {
  return ContentService.createTextOutput(
    JSON.stringify(obj),
  ).setMimeType(ContentService.MimeType.JSON);
}
