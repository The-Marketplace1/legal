# Responsible Disclosure Policy

**Version:** 1.0
**Effective Date:** 2024-01-01
**Last Reviewed:** 2024-01-01

---

## 1. Introduction

The Marketplace is committed to maintaining the security of its platform and the protection of its users. We recognise that the security research community plays a valuable role in identifying vulnerabilities before they can be exploited. This Responsible Disclosure Policy explains how to report security vulnerabilities to us safely and responsibly.

---

## 2. Our Commitment to Researchers

When you responsibly disclose a vulnerability to us, we commit to:

- Acknowledge your report within **48 hours**
- Investigate and validate the vulnerability promptly
- Keep you informed of our progress
- Remediate confirmed vulnerabilities in accordance with our severity targets
- Publicly acknowledge your contribution (with your permission) once the vulnerability is remediated
- Not pursue legal action against researchers who comply with this policy

---

## 3. In-Scope Systems

The following systems are within scope for security research:

- Marketplace web applications (all authenticated and unauthenticated surfaces)
- Marketplace mobile applications (iOS and Android)
- Marketplace public APIs
- Authentication systems and account management features
- Payment flows and checkout surfaces

**Out of scope:**

- Third-party services and integrations (report to the respective provider)
- Physical security of Marketplace premises
- Social engineering of Marketplace employees or users
- Denial of service attacks (automated or manual)
- Spam or phishing campaigns
- Vulnerabilities in outdated browser versions not reasonably supported

---

## 4. Vulnerability Categories We Want to Hear About

High-priority vulnerability types include:

- Authentication bypass or account takeover
- Privilege escalation (accessing resources beyond your authorised level)
- SQL injection, command injection, or code execution
- Cross-site scripting (XSS) with meaningful impact
- Cross-site request forgery (CSRF) with meaningful impact
- Insecure direct object references (IDOR) exposing other users' data
- Sensitive data exposure (credentials, payment data, personal data)
- Payment processing vulnerabilities
- Security misconfigurations with real-world impact
- Cryptographic weaknesses

---

## 5. Researcher Guidelines

To be covered by this policy, you must:

5.1 **Avoid harm:** Do not access, modify, or delete data that is not yours. Stop testing immediately if you encounter unexpected access to sensitive data.

5.2 **Do not disrupt services:** Do not conduct testing that could degrade or disrupt the platform for other users.

5.3 **Do not exploit vulnerabilities:** Discovery of a vulnerability does not authorise you to exploit it, extract data, or use it for any purpose other than demonstrating the issue to us.

5.4 **Respect privacy:** Do not access other users' accounts, messages, or personal information during testing. Use test accounts you control.

5.5 **Report promptly:** Submit your findings to us as soon as they are identified. Do not disclose publicly before we have had a reasonable opportunity to remediate.

5.6 **Test only authorised systems:** Do not test systems or services outside the defined scope.

5.7 **Comply with applicable law:** Security testing must comply with applicable law. This policy does not authorise activities that would be unlawful in your jurisdiction.

---

## 6. How to Submit a Report

Send vulnerability reports to:

**Email:** security@marketplace.com

Please include in your report:

- A clear description of the vulnerability
- The affected system or URL
- Step-by-step reproduction instructions
- Proof-of-concept (screenshots, video, or code — without exploiting real user data)
- Your assessment of the potential impact
- Your name or alias for acknowledgment purposes (optional)

**Encryption:** If you wish to encrypt your report, request our PGP public key by emailing security@marketplace.com.

---

## 7. Response Timelines

| Stage | Target |
|---|---|
| Initial acknowledgement | Within 48 hours |
| Validation of report | Within 5 business days |
| Severity assessment communicated | Within 7 business days |
| Remediation (critical vulnerabilities) | Within 24 hours of confirmation |
| Remediation (high vulnerabilities) | Within 7 days |
| Researcher notification of fix | Upon remediation |

---

## 8. Coordinated Disclosure

We request a **90-day coordinated disclosure window** from the date of initial report. This means:

- You agree not to publicly disclose the vulnerability until we have remediated it, or 90 days have passed (whichever comes first)
- If we require more time due to complexity, we will request an extension with explanation
- We will notify you when remediation is complete and coordinate the disclosure timing with you

---

## 9. Bug Bounty

The Marketplace may operate a bug bounty programme for qualifying reports. Details, scope, and reward structures are published separately. This Responsible Disclosure Policy governs the disclosure process regardless of whether a bounty is offered.

---

## 10. Legal Safe Harbour

The Marketplace will not pursue civil or criminal action against researchers who:

- Comply with this policy
- Report promptly and in good faith
- Do not exploit vulnerabilities beyond proof-of-concept
- Do not access data belonging to real users
- Do not disrupt services

This safe harbour does not apply to malicious actors, those who exploit vulnerabilities, or those acting in bad faith.

---

## 11. Contact

**Security Team**
Email: security@marketplace.com

