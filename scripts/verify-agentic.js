import fs from 'fs';
import path from 'path';

const htmlPath = path.resolve('dist/index.html');
if (!fs.existsSync(htmlPath)) {
  console.error('Error: dist/index.html does not exist. Run pnpm build first.');
  process.exit(1);
}

const html = fs.readFileSync(htmlPath, 'utf8');

// 1. Verify H1 tag
const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
if (!h1Match) {
  console.error('FAIL: No <h1> tag found in dist/index.html');
  process.exit(1);
}
console.log('PASS: <h1> found:', h1Match[1].replace(/<[^>]+>/g, '').trim());

// 2. Verify H2 and H3 tags
const h2Matches = html.match(/<h2[^>]*>[\s\S]*?<\/h2>/gi) || [];
const h3Matches = html.match(/<h3[^>]*>[\s\S]*?<\/h3>/gi) || [];
if (h2Matches.length === 0 || h3Matches.length === 0) {
  console.error(`FAIL: Missing heading hierarchy. Found ${h2Matches.length} H2 tags and ${h3Matches.length} H3 tags.`);
  process.exit(1);
}
console.log(`PASS: Found ${h2Matches.length} H2 tags and ${h3Matches.length} H3 tags.`);

// 3. Verify static raw text length (>500 chars)
const textContent = html.replace(/<script[\s\S]*?<\/script>/gi, '')
                        .replace(/<style[\s\S]*?<\/style>/gi, '')
                        .replace(/<[^>]+>/g, ' ')
                        .replace(/\s+/g, ' ')
                        .trim();

console.log(`PASS: Raw static HTML text length: ${textContent.length} characters.`);
if (textContent.length < 500) {
  console.error('FAIL: Static HTML text length is under 500 characters.');
  process.exit(1);
}

// 4. Verify JSON-LD schemas
if (!html.includes('"WebSite"') || !html.includes('"Organization"')) {
  console.error('FAIL: Missing WebSite or Organization JSON-LD schema.');
  process.exit(1);
}
console.log('PASS: WebSite and Organization JSON-LD schemas verified.');

console.log('\nAll Agentic Verification Checks Passed Successfully!');
