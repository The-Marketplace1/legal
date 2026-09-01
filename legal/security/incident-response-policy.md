# Incident Response Policy

**Version:** 1.0
**Effective Date:** 2024-01-01
**Last Reviewed:** 2024-01-01

---

## 1. Introduction

This Incident Response Policy defines how the Marketplace detects, responds to, and recovers from security incidents, including data breaches, system compromises, and service disruptions. It establishes the roles, responsibilities, and procedures that govern the Marketplace's response to security events.

---

## 2. Scope

This policy applies to all security incidents involving:

- Marketplace systems, applications, and infrastructure
- Personal data of users or employees
- Third-party systems with access to Marketplace data
- Payment data or financial systems

---

## 3. Definitions

| Term | Definition |
|---|---|
| **Security Incident** | Any actual or suspected unauthorised access, disclosure, alteration, loss, or destruction of Marketplace data or systems |
| **Data Breach** | A security incident resulting in the confirmed unauthorised access to or disclosure of personal data |
| **Critical Incident** | An incident with immediate and significant impact on user safety, platform availability, or large-scale data exposure |
| **Incident Commander** | The designated lead responsible for coordinating the response |

---

## 4. Incident Response Team

| Role | Responsibility |
|---|---|
| **Incident Commander** | Overall coordination and communication; typically the CISO or Security Lead |
| **Security Engineer** | Technical investigation, containment, and remediation |
| **Data Protection Officer** | Legal and regulatory assessment; notification decisions |
| **Legal Counsel** | Legal risk assessment; response to law enforcement |
| **Communications Lead** | Internal and external communications |
| **Engineering Team** | System recovery and patch deployment |
| **Customer Support Lead** | User-facing communication |

---

## 5. Incident Categories

| Category | Description | Examples |
|---|---|---|
| P1 — Critical | Immediate threat to user safety or large-scale data exposure | Active breach of production DB; ransomware; credential dump |
| P2 — High | Significant impact; limited scope | Account takeover of multiple users; privilege escalation |
| P3 — Medium | Moderate impact; limited immediate harm | Single account compromise; minor data exposure |
| P4 — Low | Minimal impact; potential risk identified | Failed attack attempt; minor misconfiguration |

---

## 6. Incident Response Phases

### Phase 1: Detection and Identification

**Trigger sources may include:**
- Automated monitoring alerts
- User or employee reports
- Responsible disclosure submissions
- Regulatory or law enforcement notification
- Third-party security service alerts

**Actions:**
1. Log the incident in the Incident Register with timestamp, initial details, and source
2. Assign an Incident Commander
3. Classify severity (P1–P4)
4. Notify the Incident Response Team (P1/P2 immediately; P3/P4 within 4 hours)

---

### Phase 2: Containment

**Short-term containment (immediate):**
- Isolate affected systems to prevent further damage
- Revoke compromised credentials
- Block malicious IP addresses or traffic
- Disable affected user accounts if necessary
- Preserve forensic evidence (do not wipe systems before evidence is captured)

**Long-term containment:**
- Apply temporary fixes to reduce ongoing risk while permanent remediation is prepared
- Continue monitoring for related activity

---

### Phase 3: Assessment

1. Determine the full scope of the incident
2. Identify all personal data potentially affected (categories, volume, affected data subjects)
3. Assess likelihood of harm to data subjects
4. Determine root cause
5. Document all findings

---

### Phase 4: Notification

#### 4a. Regulatory Notification

| Regulation | Trigger | Timeline |
|---|---|---|
| GDPR | Breach likely to result in risk to individuals' rights | Within 72 hours of becoming aware |
| UK GDPR | Same | Within 72 hours |
| NDPA (Nigeria) | Breach of personal data | Within 72 hours |
| Other jurisdictions | Per applicable law | Per applicable timeline |

Notifications must include:
- Nature of the breach
- Categories and approximate number of data subjects affected
- Categories and approximate number of records affected
- Name and contact details of DPO
- Likely consequences of the breach
- Measures taken or proposed to address the breach

#### 4b. User (Data Subject) Notification

Affected users are notified without undue delay when the breach is likely to result in high risk to their rights and freedoms. Notification includes:

- Clear description of what occurred
- Categories of data affected
- Steps users should take to protect themselves
- Contact details for further information

#### 4c. Internal Notification

Senior management and Board are notified immediately for P1/P2 incidents.

---

### Phase 5: Eradication and Recovery

1. Remove the cause of the incident (malware, compromised credentials, misconfiguration)
2. Apply permanent security patches
3. Restore systems from clean backups if required
4. Verify integrity of restored systems
5. Gradually restore services with enhanced monitoring

---

### Phase 6: Post-Incident Review

Within 14 days of incident resolution, the Incident Response Team conducts a post-incident review:

- Timeline of events
- Root cause analysis
- Effectiveness of the response
- Evidence preservation assessment
- Identification of gaps
- Remediation actions taken and planned
- Updates to security controls and this policy

Review findings are documented and presented to senior management.

---

## 7. Evidence Preservation

7.1 System logs, access records, and all evidence related to the incident must be preserved immediately upon incident detection.

7.2 No systems should be wiped or rebuilt before forensic evidence is captured.

7.3 Evidence is retained for a minimum of 3 years or as required by applicable law.

---

## 8. Communication Guidelines

- All external communications regarding an incident are reviewed by Legal Counsel before release
- No employee should communicate about a security incident publicly without authorisation
- Regulatory communications are handled exclusively by the DPO and Legal Counsel
- User notifications are drafted by the Communications Lead and reviewed by Legal

---

## 9. Testing

The Incident Response Plan is tested annually through:

- Tabletop exercises
- Simulated breach scenarios

Results are used to update this policy and associated procedures.

---

## 10. Contact

**Security Team (Incident Reports)**
Email: security@marketplace.com

**Data Protection Officer (Regulatory Notification)**
Email: privacy@marketplace.com

