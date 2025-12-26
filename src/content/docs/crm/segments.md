---
title: Segments
description: Create dynamic groups of contacts for targeting and analysis
---

# Segments

Segments are dynamic groups of contacts based on rules you define.

## Why Use Segments?

- **Targeted campaigns** - Send relevant messages
- **Personalization** - Bot behavior per segment
- **Analysis** - Understand your audience
- **Automation** - Trigger workflows by segment

## Creating Segments

### Rule-Based Segments

1. Click **+ New Segment**
2. Name your segment
3. Add filter rules
4. Preview results
5. Save

### Filter Types

**Contact Properties:**
- Name contains "..."
- Email domain is "company.com"
- Created in last 30 days
- Has tag "VIP"

**Behavior:**
- Had conversation in last 7 days
- Opened email campaign
- Booked appointment
- Submitted form

**CRM Data:**
- Lead score > 50
- Has open ticket
- Purchase value > $1000

### Combining Rules

Use AND/OR logic:

```
(Tag = "Customer" AND Country = "US")
OR
(Lead Score > 80)
```

## Segment Types

### Static Segments

Fixed list of contacts:
- Manually add/remove
- Doesn't update automatically
- Good for one-time campaigns

### Dynamic Segments

Updates automatically:
- Based on rules
- Real-time membership
- Always current

## Using Segments

### In Campaigns

Target specific segments:
1. Create campaign
2. Select segment as audience
3. Contacts matching rules receive campaign

### In Workflows

Trigger based on segment:
- "When contact enters VIP segment"
- "When contact leaves Active segment"

### In Bot Behavior

Personalize responses:
- Different greetings
- VIP routing
- Custom offers

## Example Segments

### High-Value Customers

```
Purchase Total > $1000
AND Has Tag "Customer"
AND Last Activity < 90 days ago
```

### At-Risk Customers

```
Has Tag "Customer"
AND Last Activity > 30 days ago
AND No conversation in 60 days
```

### Hot Leads

```
Lead Score > 70
AND Status = "Active"
AND Created < 14 days ago
```

### Newsletter Subscribers

```
Has Tag "Newsletter"
AND Email Consent = true
```

## Segment Analytics

View segment metrics:
- Total contacts
- Growth over time
- Engagement rates
- Conversion rates

## Best Practices

1. **Keep segments focused** - One purpose per segment
2. **Use descriptive names** - "US_Customers_Active" not "Segment 1"
3. **Review regularly** - Update rules as needed
4. **Don't over-segment** - Start simple, add complexity later

## Related

- [Contacts](/crm/contacts) - Contact management
- [Campaigns](/crm/campaigns) - Use segments for targeting
- [Workflows](/crm/workflows) - Segment-based automation
