---
title: Contacts
description: Manage your customer contacts and their information
---

# Contacts

Contacts are the core of your CRM - every person who interacts with your business.

## Contact Sources

Contacts are created from:

- **Chat conversations** - Automatically when users provide info
- **Manual entry** - Add contacts directly
- **Import** - CSV/Excel file upload
- **Integrations** - Sync from other systems
- **Forms** - Website form submissions

## Contact Profile

### Basic Information

| Field | Description |
|-------|-------------|
| **Name** | Full name |
| **Email** | Primary email address |
| **Phone** | Phone number |
| **Company** | Associated account |
| **Timezone** | For scheduling |

### Custom Fields

Add custom fields for your needs:
- Text fields
- Numbers
- Dates
- Dropdowns
- Multi-select

### Activity Timeline

View all interactions:
- Conversations with bots
- Emails sent/received
- Appointments
- Notes added
- Ticket history

## Managing Contacts

### Create Contact

1. Click **+ New Contact**
2. Fill in details
3. Add tags (optional)
4. Click **Save**

### Edit Contact

1. Click on contact
2. Update fields
3. Changes auto-save

### Delete Contact

1. Open contact
2. Click **Delete**
3. Confirm (this is reversible with soft-delete)

### Merge Duplicates

When duplicates are detected:
1. Select contacts to merge
2. Choose primary record
3. Review merged data
4. Confirm merge

## Tags

Organize contacts with tags:

- **Manual tags** - Apply to specific contacts
- **Auto tags** - Applied by workflows
- **System tags** - Platform-generated

### Using Tags

```
Type: Customer, Prospect, Partner
Source: Website, Referral, Event
Status: Active, Churned, VIP
```

## Bulk Actions

Select multiple contacts to:
- Add/remove tags
- Export to CSV
- Delete
- Add to campaign
- Assign to user

## Import Contacts

### CSV Import

1. Go to **Contacts** → **Import**
2. Upload CSV file
3. Map columns to fields
4. Handle duplicates
5. Import

**CSV Format:**
```csv
name,email,phone,company
John Doe,john@example.com,+1234567890,Acme Inc
Jane Smith,jane@example.com,+0987654321,Tech Corp
```

### Import Options

- **Skip duplicates** - Don't import if email exists
- **Update duplicates** - Merge with existing record
- **Create duplicates** - Allow multiple records

## Export Contacts

Export contacts to CSV:

1. Filter contacts (optional)
2. Click **Export**
3. Select fields
4. Download CSV

## GDPR Compliance

Contacts include GDPR features:

- **Consent tracking** - Record consent status
- **Data export** - Fulfill access requests
- **Anonymization** - Right to erasure
- **Audit log** - Track all changes

See [Data Protection](/reference/data-protection) for details.

## Related

- [Segments](/crm/segments) - Group contacts
- [Campaigns](/crm/campaigns) - Contact outreach
- [CRM Overview](/crm/overview) - CRM features
