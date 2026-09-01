# Security Policy

**Version:** 1.0
**Effective Date:** 2024-01-01
**Last Reviewed:** 2024-01-01

---

## 1. Introduction

This Security Policy defines the Marketplace's commitment to protecting its platform, user data, and systems from security threats. It establishes the responsibilities of the Marketplace and sets expectations for users and third parties regarding security conduct.

---

## 2. Security Responsibilities

### 2.1 Marketplace Responsibilities

The Marketplace is responsible for:

- Implementing and maintaining appropriate technical and organisational security measures
- Protecting personal data in accordance with applicable data protection law
- Conducting regular security assessments, audits, and penetration testing
- Maintaining an incident response process for security events
- Training employees on security practices and responsibilities
- Monitoring systems for threats and anomalous behaviour
- Maintaining a vulnerability management programme
- Engaging in responsible disclosure and coordinated vulnerability remediation

### 2.2 User Responsibilities

Users are responsible for:

- Maintaining the security of their account credentials
- Using strong, unique passwords for their Marketplace account
- Enabling two-factor authentication (2FA) where offered
- Not sharing login credentials with any third party
- Reporting suspected security issues promptly
- Not attempting to access other users' accounts or restricted areas of the platform
- Not introducing malware, vulnerabilities, or harmful code into the platform

### 2.3 Professional Responsibilities

In addition to general user responsibilities, professionals must:

- Protect any customer data or documents they access in the course of service delivery
- Not store customer personal data beyond what is necessary for the service
- Use secure, approved communication channels for all service-related communication

---

## 3. Technical Security Measures

The Marketplace implements the following controls:

### 3.1 Data Encryption

- All data in transit is encrypted using TLS 1.2 or higher
- Sensitive data at rest (personal data, payment data, authentication credentials) is encrypted using AES-256 or equivalent
- Passwords are stored using a strong one-way hash with appropriate salting (bcrypt or equivalent)

### 3.2 Access Control

- Access to production systems and personal data is governed by the principle of least privilege
- Multi-factor authentication is required for all internal administrative access
- Access rights are reviewed quarterly and revoked upon role changes or offboarding
- Privileged access management controls are in place for sensitive systems

### 3.3 Network Security

- Network segmentation separates production, staging, and development environments
- Firewalls and intrusion detection systems protect perimeter and internal networks
- DDoS protection is in place for public-facing services

### 3.4 Application Security

- Secure coding practices are applied throughout the development lifecycle (OWASP guidelines)
- Automated security testing is integrated into the CI/CD pipeline
- Static analysis, dependency scanning, and dynamic testing are performed regularly
- All third-party dependencies are monitored for known vulnerabilities

### 3.5 Monitoring and Logging

- Security events and system access are logged and monitored
- Alerts are configured for anomalous activity
- Logs are protected from tampering and retained for a minimum of 12 months

### 3.6 Physical Security

- Production infrastructure is hosted in SOC 2 compliant data centres
- Physical access to server infrastructure is restricted and logged

---

## 4. Vulnerability Management

4.1 The Marketplace operates a vulnerability management programme that identifies, assesses, and remediates security vulnerabilities in a risk-based manner.

4.2 Critical and high vulnerabilities are prioritised for remediation within:

| Severity | Remediation Target |
|---|---|
| Critical | Within 24 hours of identification |
| High | Within 7 days |
| Medium | Within 30 days |
| Low | Within 90 days |

4.3 Third-party and open-source software vulnerabilities are tracked and patched promptly.

---

## 5. Third-Party Security

5.1 All third-party vendors and processors that access Marketplace systems or process personal data are subject to security due diligence assessment.

5.2 Vendors must demonstrate equivalent security standards before being granted access.

5.3 Vendor security posture is reviewed periodically.

5.4 Data sharing with vendors is governed by appropriate contractual protections.

---

## 6. Employee Security

6.1 All employees complete security awareness training at onboarding and annually thereafter.

6.2 Security policies are acknowledged by all staff with access to systems or data.

6.3 Background checks are performed for roles with access to sensitive systems.

6.4 Security incidents caused by employee negligence or intentional misconduct are subject to disciplinary action.

---

## 7. Security Incident Management

Security incidents are handled in accordance with the Incident Response Policy. In brief:

1. Detection and identification
2. Containment
3. Assessment and notification (regulatory and user notification where required)
4. Eradication and recovery
5. Post-incident review

See `security/incident-response-policy.md` for the full procedure.

---

## 8. Responsible Disclosure

The Marketplace welcomes security vulnerability reports from researchers and users. See `security/responsible-disclosure.md` for submission guidelines.

---

## 9. Compliance

This Security Policy supports compliance with:

- GDPR (Article 32 — Security of Processing)
- Nigeria Data Protection Act (NDPA)
- PCI-DSS (for payment card data)
- Applicable national data protection and cybersecurity laws

---

## 10. Policy Review

This policy is reviewed annually and updated following significant security incidents, technology changes, or regulatory updates.

---

## 11. Contact

**Security Team**
Email: security@marketplace.com

**Vulnerability Reports**
Email: security@marketplace.com (see Responsible Disclosure Policy)

