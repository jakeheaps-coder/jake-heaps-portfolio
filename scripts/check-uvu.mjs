import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(process.argv.includes('--dist') ? 'dist' : 'public');
const html = readFileSync(resolve(root, 'uvu/index.html'), 'utf8');
const sections = ['hero', 'about', 'skills', 'showcase', 'resume', 'involvement', 'contact'];
for (const id of sections) assert.match(html, new RegExp(`<section id="${id}"`));
assert.equal((html.match(/<article class="project"/g) || []).length, 4);
assert.equal((html.match(/<h1\b/g) || []).length, 1);
assert.match(html, /Bucked Up/);
assert.match(html, /Adminify AI/);
assert.match(html, /mailto:jakeheaps@me\.com/);
assert.doesNotMatch(html, /naitivesolutions\.com|api[_-]?key|bearer\s|AKfycb|<script\b|<iframe\b|<form\b/i);
assert.doesNotMatch(html, /\$[\d,.]+|280\s*hours|850\s*(?:people|employees)|FY27|forecast/i);
assert.doesNotMatch(html, /[—]/);
const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]));
for (const [, anchor] of html.matchAll(/href="#([^"]+)"/g)) assert(ids.has(anchor), `Missing anchor ${anchor}`);
for (const [, asset] of html.matchAll(/(?:src|href)="(\/uvu\/[^"]+)"/g)) {
  assert(existsSync(resolve(root, `.${asset}`)), `Missing asset ${asset}`);
}
if (process.argv.includes('--release')) {
  assert.doesNotMatch(html, /RESUME_CLOUD_DOWNLOAD_URL|TODO|coming soon/i);
  assert.match(html, /href="https:\/\/drive\.google\.com\/(?:uc\?|file\/d\/)/);
}
console.log(`UVU checks passed: seven sections, four showcase items, public contact, assets and anchors${process.argv.includes('--release') ? ', cloud resume link' : ' (resume URL still requires release check)'}.`);
