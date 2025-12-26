---
title: Campaigns
description: Create and manage marketing campaigns and outreach
---

# Campaigns

Run email and SMS campaigns to engage your contacts.

## Campaign Types

### Email Campaigns

Send emails to targeted segments:
- Marketing newsletters
- Product announcements
- Re-engagement emails
- Event invitations

### SMS Campaigns

Text message outreach:
- Appointment reminders
- Urgent notifications
- Promotional offers

### Automated Sequences

Multi-step campaigns triggered by events:
- Welcome series
- Onboarding flow
- Abandoned cart
- Post-purchase follow-up

## Creating a Campaign

### 1. Setup

1. Click **+ New Campaign**
2. Choose campaign type
3. Name your campaign
4. Select audience (segment)

### 2. Content

**Email:**
- Subject line
- Preview text
- Email body (visual editor or HTML)
- Attachments

**SMS:**
- Message content (160 char limit)
- Personalization tokens

### 3. Settings

- **From name/email** - Sender identity
- **Reply-to** - Where replies go
- **Tracking** - Opens, clicks
- **Schedule** - Send now or later

### 4. Review & Send

1. Preview on desktop/mobile
2. Send test email
3. Review checklist
4. Launch campaign

## Personalization

Use merge tags for personalization:

```
Hi {{contact.name}},

Thanks for being a customer since {{contact.created_at | date}}.

Best,
The {{team.name}} Team
```

**Available Tokens:**
- `{{contact.name}}`
- `{{contact.email}}`
- `{{contact.company}}`
- `{{team.name}}`
- Custom fields

## A/B Testing

Test different versions:

1. Enable A/B testing
2. Create variants (subject line, content)
3. Set test size (e.g., 20%)
4. Choose winning metric
5. Winner sent to remaining audience

## Campaign Analytics

### Metrics

| Metric | Description |
|--------|-------------|
| **Sent** | Emails/SMS delivered |
| **Opens** | Recipients who opened |
| **Clicks** | Links clicked |
| **Replies** | Responses received |
| **Bounces** | Failed deliveries |
| **Unsubscribes** | Opted out |

### Reports

- Open rate over time
- Click heatmap
- Top clicked links
- Device breakdown
- Geographic data

## Compliance

### Email Best Practices

- ✅ Only email contacts with consent
- ✅ Include unsubscribe link
- ✅ Identify sender clearly
- ✅ Honor unsubscribes immediately

### CAN-SPAM / GDPR

The platform enforces:
- Automatic unsubscribe handling
- Consent requirement options
- Physical address requirement
- Clear sender identification

## Templates

Save and reuse templates:

1. Create campaign content
2. Click **Save as Template**
3. Name template
4. Use in future campaigns

## Related

- [Segments](/crm/segments) - Target audiences
- [Workflows](/crm/workflows) - Automated sequences
- [Contacts](/crm/contacts) - Manage recipients
