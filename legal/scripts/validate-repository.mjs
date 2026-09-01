#!/usr/bin/env node

import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, extname, join, normalize, resolve, relative } from "node:path";

const root = resolve(new URL("..", import.meta.url).pathname);
const failures = [];
const warnings = [];

const requiredFiles = [
  "README.md",
  "LICENSE",
  "terms/marketplace-terms.md",
  "terms/customer-terms.md",
  "terms/professional-terms.md",
  "terms/marketplace-rules.md",
  "privacy/privacy-policy.md",
  "privacy/cookie-policy.md",
  "privacy/data-processing-policy.md",
  "agreements/customer-agreement.md",
  "agreements/professional-agreement.md",
  "agreements/partner-agreement.md",
  "agreements/vendor-agreement.md",
  "payments/payment-terms.md",
  "payments/escrow-policy.md",
  "payments/refund-policy.md",
  "payments/withdrawal-policy.md",
  "disputes/dispute-policy.md",
  "disputes/resolution-process.md",
  "disputes/escalation-policy.md",
  "safety/marketplace-safety-policy.md",
  "safety/professional-safety-guidelines.md",
  "safety/customer-safety-guidelines.md",
  "communication/communication-privacy-policy.md",
  "communication/call-recording-policy.md",
  "communication/retention-policy.md",
  "compliance/gdpr.md",
  "compliance/data-protection.md",
  "compliance/compliance-framework.md",
  "compliance/compliance-checklist.md",
  "compliance/professional-verification-policy.md",
  "compliance/regional-requirements/README.md",
  "compliance/regional-requirements/ndpa.md",
  "contracts/freelancer-contract.md",
  "contracts/service-contract.md",
  "contracts/confidentiality-agreement.md",
  "intellectual-property/trademark-policy.md",
  "intellectual-property/copyright-policy.md",
  "intellectual-property/content-policy.md",
  "security/security-policy.md",
  "security/responsible-disclosure.md",
  "security/incident-response-policy.md",
  "governance/company-policies.md",
  "governance/admin-policy.md",
  "governance/internal-controls.md",
  "templates/legal-notice-template.md",
  "templates/consent-template.md",
  "templates/agreement-template.md",
  "reviews/legal-review-process.md",
  "reviews/change-history.md",
  "CONTRIBUTING.md",
  "scripts/validate-repository.mjs",
];

for (const file of requiredFiles) {
  if (!existsSync(join(root, file))) failures.push(`Missing required file: ${file}`);
}

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

const markdownFiles = walk(root).filter((file) => extname(file) === ".md");
const templateFiles = new Set(
  markdownFiles.filter((file) => relative(root, file).startsWith("templates/")),
);

for (const file of markdownFiles) {
  const relativePath = relative(root, file);
  const content = readFileSync(file, "utf8");
  const h1Count = (content.match(/^# /gm) ?? []).length;
  if (h1Count !== 1) failures.push(`${relativePath}: expected exactly one H1 heading`);
  if (content.includes("\t")) failures.push(`${relativePath}: contains tab characters`);
  // Two trailing spaces are valid Markdown hard-break syntax. Three or more
  // spaces are accidental formatting and should be rejected.
  if (/ {3,}$/m.test(content)) failures.push(`${relativePath}: contains excessive trailing whitespace`);
  if (
    !templateFiles.has(file) &&
    !["README.md", "CONTRIBUTING.md", "compliance/regional-requirements/README.md"].includes(relativePath)
  ) {
    for (const label of ["Version:", "Effective Date:", "Last Reviewed:"]) {
      if (!content.includes(label)) failures.push(`${relativePath}: missing metadata "${label}"`);
    }
  }
}

const linkPattern = /\[[^\]]+\]\(([^)]+)\)/g;
for (const file of markdownFiles) {
  const relativePath = relative(root, file);
  const content = readFileSync(file, "utf8");
  for (const match of content.matchAll(linkPattern)) {
    const target = match[1].trim().split("#", 1)[0];
    if (!target || /^(?:https?:|mailto:|tel:)/i.test(target)) continue;
    const resolved = normalize(resolve(dirname(file), target));
    if (!resolved.startsWith(`${root}/`) || !existsSync(resolved)) {
      failures.push(`${relativePath}: broken relative link "${target}"`);
    }
  }
}

const nonTemplateText = markdownFiles
  .filter((file) => !templateFiles.has(file))
  .map((file) => readFileSync(file, "utf8"))
  .join("\n");
for (const marker of ["TODO", "FIXME", "TBD"]) {
  if (nonTemplateText.includes(marker)) warnings.push(`Found review marker: ${marker}`);
}

if (failures.length > 0) {
  console.error("Legal repository validation failed:\n");
  for (const failure of failures) console.error(`- ${failure}`);
  if (warnings.length > 0) {
    console.error("\nWarnings:");
    for (const warning of warnings) console.error(`- ${warning}`);
  }
  process.exit(1);
}

console.log(`Legal repository validation passed: ${requiredFiles.length} required files, ${markdownFiles.length} Markdown files checked.`);
if (warnings.length > 0) {
  console.log("\nWarnings:");
  for (const warning of warnings) console.log(`- ${warning}`);
}

