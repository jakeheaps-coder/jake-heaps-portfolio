# UVU capstone portfolio

## Scope

- Dedicated public website at `https://jakeheaps.com/uvu`.
- Seven sections on one page: Hero, About, Skills, Showcase, Resume, Certifications and Involvement, Contact.
- Four showcase descriptions: Domo AI transformation; Adminify AI rebrand; Bucked Up marketing funnels; Bucked Up commercial production.
- No changes to the existing homepage, brief, gate, or portfolio PDF.
- No email is sent. Jake sends the submission himself.

## Content sources

- Existing master resume: `jake-heaps-resume-master.pdf` and its `resume-data.json`.
- Earlier marketing resume: `UPDATED Jacob Heaps Resume 2024.pdf` and `Jake Heaps Resume.pdf`, for campaign scope, Klaviyo certification, Eagle Scout, and service.
- Existing portfolio design, headshot, and font assets.
- Where older and newer job titles differ, the newer master resume is used.
- User explicitly approved information already in the resume or current website. No internal documents, customer data, proprietary screenshots, forecasts, or new numerical claims are used.

## Resume

Use an unchanged copy of the existing master PDF named `jake_heaps_resume.pdf`, uploaded to Jake's personal cloud account. Do not use the company Google Drive account. The public download must work while signed out.

The local renamed copy must have the same SHA-256 as the master source. Do not replace it with the long portfolio PDF or a Canva link.

Jake supplied the public PDF: https://drive.google.com/file/d/1NkK5WJs1rA1qw2yKJ8naa4-mzduAyX0E/view

Verified September 4, 2026: anonymous download succeeds, filename is `jake_heaps_resume.pdf`, MIME type is `application/pdf`, size is 30,060 bytes. SHA-256 matches the unchanged local master: `1f48fce90b8fcc6262b71f8d26082d61ee4112a13f2d03c575ed677376ff25df`.

## Verification

```sh
node scripts/check-uvu.mjs
VERCEL=1 npm run build
node scripts/check-uvu.mjs --dist --release
git diff --check
```

Visually inspect desktop and mobile. Check keyboard navigation, anchor destinations, headshot/font loading, and the external PDF while signed out. Confirm `/uvu` and `/uvu/` load without authentication and that `/` and `/brief` retain their existing behavior.

## Submission (Jake sends)

To: cmace@uvu.edu

Subject: MKTG 1890 CPL Request Jake Heaps

Include the published website URL, UVUID, and academic advisor name/email. Do not put the UVUID or advisor details on the public website.
