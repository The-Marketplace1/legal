# Contributing to the Legal Repository

This repository is the Marketplace's controlled legal, compliance, governance, and policy source of truth. Contributions are welcome from authorised Marketplace personnel and approved legal advisers only.

## Scope

Keep this repository limited to:

- Legal documents and user-facing agreements
- Compliance requirements and regional addenda
- Governance policies and internal controls
- Approved templates, review records, and validation rules

Do **not** add application code, backend logic, authentication, payment processing, escrow implementation, database schemas or rules, UI components, design files, or infrastructure configuration.

## Before Opening a Change

1. Identify the document owner and affected jurisdictions.
2. Read [`reviews/legal-review-process.md`](reviews/legal-review-process.md).
3. Record the purpose, legal or regulatory source, affected users, and proposed effective date.
4. Check all related policies and cross-references.
5. Use a template in `templates/` for a new agreement, notice, or consent record.

## Document Standards

Every controlled Markdown document must:

- Have one H1 title
- Include `Version`, `Effective Date`, and `Last Reviewed` metadata
- Use plain, respectful, and accessible language
- State its scope and intended audience
- Avoid implementation instructions or secrets
- Link to related documents using relative links
- Include an owner or contact route where appropriate

Templates may use `Template Version` instead of an effective date and may contain bracketed fields. Templates must never be published without completion and legal approval.

## Review and Approval

An author must not self-approve a material legal change. The required reviewers depend on the subject matter:

- Privacy and data protection: Data Protection Officer
- Payments and escrow: Finance or Payments owner
- Safety and verification: Trust and Safety owner
- Security: Security owner
- Governance and internal controls: executive owner
- Regional requirements: qualified local counsel or the Legal Team

The exact approved version, approval evidence, effective date, and communication plan must be recorded before publication. Update [`reviews/change-history.md`](reviews/change-history.md) at the same time.

## Validation

Run the repository validation command from the repository root:

```bash
node legal/scripts/validate-repository.mjs
```

The GitHub Actions workflow runs this check on pull requests and pushes that change `legal/`.

## Pull Requests

Pull requests should include:

- A concise summary of the legal or compliance change
- Affected documents and jurisdictions
- Required reviewers
- User or partner communication impact
- Version and effective-date changes
- Validation output

