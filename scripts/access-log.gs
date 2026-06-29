/**
 * Access + lead-capture endpoint for the Jake Heaps portfolio.
 *
 * ONE-TIME SETUP (≈2 minutes):
 * 1. Open the Sheet:
 *    https://docs.google.com/spreadsheets/d/1L66N5vmaqJFDq8vGrrnC0-hTWchIKMBykysVns4BmqE/edit
 * 2. Extensions → Apps Script. Delete any boilerplate, paste this whole file, Save.
 * 3. Deploy → Manage deployments → edit the existing Web app deployment →
 *    "New version" → Deploy. (Re-using the deployment keeps the same /exec URL,
 *    so the site needs no change.) Authorize when prompted — the new MailApp
 *    scope (sending you lead emails) requires re-consent.
 *    - Execute as: Me
 *    - Who has access: Anyone
 *
 * Sheet columns:
 *   Timestamp | Email | Domain | Referrer | User Agent | Event | Session |
 *   Seconds | View | Name | Phone | Message | Tier
 *   - event "entry"    : a visitor passed the brief's email gate.
 *   - event "duration" : engagement ping (Seconds active, by Session, View=hash).
 *   - event "consult"  : a "Let's work together" submission. Name/Phone/Message/
 *                        Tier are filled, and an email is sent to NOTIFY_EMAIL so
 *                        a lead is never missed.
 * The first 9 columns are unchanged, so historical rows stay aligned; J–M were
 * appended.
 */

// Where consult-request notifications are sent. Change if your inbox changes.
var NOTIFY_EMAIL = "jakeheaps@me.com";

/**
 * Run this once from the editor (select testEmail in the dropdown → Run) to
 * grant the MailApp "send email" permission and confirm delivery. After it
 * works, redeploy the Web app so the live /exec uses the same authorization.
 */
function testEmail() {
  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    subject: "Portfolio lead notifications — test",
    body: "If you got this, lead-notification emails are working. Safe to ignore.",
  });
}

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
    var name = String(params.name || "").trim();
    var phone = String(params.phone || "").trim();
    var message = String(params.message || "").trim();
    var tier = String(params.tier || "").trim();

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
      name,
      phone,
      message,
      tier,
    ]);

    if (event === "consult") {
      notifyConsult({
        name: name,
        email: email,
        phone: phone,
        message: message,
        tier: tier,
      });
    }

    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

// Email Jake on every consult request so a lead is never silently lost.
function notifyConsult(r) {
  try {
    var who = r.name || r.email;
    var lines = [
      "New consult request from the site.",
      "",
      "Name:    " + (r.name || "—"),
      "Email:   " + (r.email || "—"),
      "Phone:   " + (r.phone || "—"),
      "Tier:    " + (r.tier || "—"),
      "",
      "Message:",
      r.message || "—",
    ];
    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      subject: "New consult request — " + who,
      body: lines.join("\n"),
      replyTo: r.email || NOTIFY_EMAIL,
    });
  } catch (err) {
    // Never let a notification failure break the logging response.
  }
}

// Header labels for the 13-column schema. On a brand-new Sheet, write the full
// row; on an existing Sheet, only append the new column labels so legacy data
// is left untouched.
function ensureHeader(sheet) {
  var header = [
    "Timestamp", "Email", "Domain", "Referrer", "User Agent",
    "Event", "Session", "Seconds", "View",
    "Name", "Phone", "Message", "Tier",
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
