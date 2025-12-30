---
title: Data Protection & Compliance
description: How MyGPTAssistants protects your data and maintains compliance with GDPR, SOC2, and other regulations
---

MyGPTAssistants is committed to protecting your data and maintaining compliance with international data protection regulations.

## Compliance Status

| Certification | Status |
|---------------|--------|
| **GDPR** | ✅ Implemented |
| **CCPA/CPRA** | ✅ Implemented |
| **SOC2 Type II** | 🔄 In Progress (Q2 2025) |
| **HIPAA** | 🔄 Partial - BAA available (Q3 2025) |

## Data Processing Roles

Understanding how data responsibilities are shared:

- **MyGPTAssistants**: Acts as **Data Processor** - we process data on your behalf according to your instructions
- **Your Business**: Acts as **Data Controller** - you determine how and why personal data is processed
- **Your Customers**: Are **Data Subjects** - individuals whose data is being processed

## Data We Collect

### Information You Provide

| Category | Data Elements | Purpose |
|----------|---------------|---------|
| **Contact Data** | Name, email, phone, timezone | Customer communication |
| **Conversation Data** | Chat messages, bot responses | Service delivery |
| **Appointment Data** | Booking details, form responses | Scheduling services |

### Information Collected Automatically

- **Usage Data**: Pages visited, features used, bot interactions
- **Device Information**: Browser type, operating system, IP address
- **Cookies**: Session cookies, preference cookies

## Legal Basis for Processing

We process personal data under the following legal bases (GDPR Article 6):

| Legal Basis | Use Case |
|-------------|----------|
| **Consent** | Marketing communications - explicit opt-in required |
| **Contract** | Service delivery - required for platform functionality |
| **Legitimate Interests** | Fraud prevention, analytics, service improvement |
| **Legal Obligation** | Tax records, audit logs, regulatory compliance |

---

## Your Data Rights (GDPR)

### Right of Access (Article 15)

You can request a complete export of all personal data we hold about you.

- Request via our portal or by contacting support
- We respond within **30 days**
- Export available in JSON or CSV format
- Includes all related records (appointments, conversations, etc.)

### Right to Rectification (Article 16)

You can correct any inaccurate personal data.

- Update your profile directly in the platform
- Contact support for assistance with corrections
- All modifications are logged for compliance

### Right to Erasure (Article 17)

You can request deletion of your personal data.

- Submit an erasure request via our portal
- Data is anonymized to preserve statistical integrity
- Related records are also anonymized
- You'll receive an erasure certificate as proof

:::note[Anonymization Process]
When you request erasure, we anonymize your data rather than hard-delete it. This preserves aggregate analytics while removing all personally identifiable information. Email becomes `deleted_xxx@anonymized.local`, names become `GDPR_ERASED_USER`, and all notes are redacted.
:::

### Right to Data Portability (Article 20)

You can receive your data in a machine-readable format.

- Export formats: JSON (complete) or CSV (spreadsheet-compatible)
- Includes integrity checksum for verification
- Secure download link with expiration

### Right to Withdraw Consent (Article 7)

You can withdraw consent for specific processing activities at any time.

**Consent types you can control:**
- Marketing emails
- Marketing SMS
- Analytics tracking
- Data sharing with third parties
- Profiling

:::tip[Managing Consent]
You can manage your consent preferences at any time through your account settings or by contacting the business you interacted with.
:::

---

## Data Retention

We retain data only as long as necessary for the purposes described.

### Default Retention Periods

| Data Type | Retention Period | Reason |
|-----------|------------------|--------|
| Contact Information | 3 years | Legitimate business interests |
| Conversation History | 2 years | Service improvement |
| Appointments | 2 years | Contractual records |
| Support Tickets | 5 years | Legal compliance |
| Audit Logs | 7 years | Regulatory requirements |

:::tip[Custom Retention]
Business customers can configure custom retention policies that may be shorter than these defaults. Contact the business you interacted with for their specific retention periods.
:::

### Automated Retention

- Retention policies run automatically
- Data past retention period is either anonymized or deleted
- All retention actions are logged for compliance

---

## Data Security

### Encryption

**In Transit:**
- TLS 1.3 enforced for all connections
- HSTS (HTTP Strict Transport Security) enabled
- Certificate pinning for mobile applications

**At Rest:**
- Database encryption via cloud provider
- Sensitive fields encrypted at application layer (AES-256-GCM)
- API keys and tokens are never stored in plain text

### Access Control

We implement Role-Based Access Control (RBAC):

| Role | Access Level |
|------|--------------|
| Owner | Full access including billing and team management |
| Admin | Full access except ownership transfer |
| Member | Standard CRM and bot access |
| Viewer | Read-only access |

### Audit Logging

All data access and modifications are logged:

- Cryptographic hash chain prevents tampering
- Logs retained for 7 years
- Includes before/after values for all changes

### Multi-Tenant Isolation

Your data is logically isolated from other customers:

- All queries are scoped to your team
- No cross-tenant data access possible
- Enforced at API and database layers

---

## Third-Party Data Sharing

**We do not sell your personal data.**

We share data only with:

| Third Party | Purpose | Safeguards |
|-------------|---------|------------|
| Cloud Infrastructure | Hosting and storage | Data Processing Agreement (DPA) |
| AI Model Providers | Processing chat queries | Data anonymized/aggregated |
| Payment Processors | Billing (business customers) | PCI-DSS compliant |

---

## For Business Customers

### Your Responsibilities as Data Controller

When using MyGPTAssistants to process your customers' data, you are responsible for:

1. **Obtaining valid consent** from your end users
2. **Providing privacy notices** to your customers
3. **Responding to data subject requests** (we provide tools to assist)
4. **Configuring appropriate retention policies**

### Data Processing Agreement

We provide a Data Processing Agreement (DPA) that includes:

- Technical and organizational security measures
- Assistance with Data Subject Access Requests
- Data breach notification within 72 hours
- Data deletion upon contract termination

Contact sales@mygptassistants.com to request a DPA.

### Tools We Provide

- **DSAR Management**: Track and respond to data subject requests
- **Consent API**: Programmatic consent management
- **Retention Policies**: Configure automatic data cleanup
- **Export Tools**: Generate compliance-ready data exports

---

## Cookies

We use the following cookies:

| Cookie | Type | Purpose | Duration |
|--------|------|---------|----------|
| `session` | Essential | Authentication | Session |
| `team_context` | Essential | Multi-tenant routing | Session |
| `csrf_token` | Essential | Security protection | Session |

Analytics cookies (if enabled) require explicit consent.

---

## Contact Us

For data protection inquiries:

- **Privacy Questions**: privacy@mygptassistants.com
- **General Legal**: legal@mygptassistants.com
- **Data Subject Requests**: Submit via your account portal

:::note[Response Time]
We respond to all data protection requests within 30 days as required by GDPR.
:::

## Related Topics

- **[Terms of Service](/legal/terms-of-service/)** - Platform usage terms
- **[Privacy Policy](/legal/privacy-policy/)** - Full privacy policy
- **[API Authentication](/api/authentication/)** - Secure API access
