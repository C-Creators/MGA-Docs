---
title: Workflows
description: Automate actions based on events and conditions
---

# Workflows

Workflows automate repetitive tasks by triggering actions based on events.

## How Workflows Work

```
TRIGGER → CONDITIONS → ACTIONS
```

1. **Trigger** - Event that starts the workflow
2. **Conditions** - Rules that must be true
3. **Actions** - What happens when triggered

## Triggers

### Contact Triggers

- Contact created
- Contact updated
- Contact added to segment
- Contact removed from segment
- Contact tag added/removed

### Conversation Triggers

- Conversation started
- Conversation ended
- Message received
- Escalation requested
- Sentiment detected (positive/negative)

### CRM Triggers

- Lead created
- Lead status changed
- Ticket created
- Ticket status changed
- Appointment booked/cancelled

### Time Triggers

- Scheduled (cron)
- Delay after event
- Date field reached

## Conditions

Filter when workflow runs:

```
IF contact.tag CONTAINS "VIP"
AND contact.country = "US"
AND conversation.sentiment = "negative"
```

### Condition Types

- **Contact properties** - Fields, tags, segments
- **Conversation data** - Channel, duration, messages
- **Time-based** - Business hours, date ranges
- **Custom logic** - Advanced expressions

## Actions

### Contact Actions

- Update contact fields
- Add/remove tags
- Add to segment
- Assign to user

### Communication Actions

- Send email
- Send SMS
- Send internal notification
- Create task

### CRM Actions

- Create lead
- Update lead status
- Create ticket
- Assign ticket

### Integration Actions

- Call webhook
- Update external CRM
- Trigger Zapier

### Flow Actions

- Wait/delay
- Branch (if/else)
- End workflow

## Building Workflows

### Visual Builder

1. Go to **Workflows** → **+ New Workflow**
2. Select trigger
3. Add conditions (optional)
4. Add actions
5. Activate workflow

### Example: VIP Routing

```
TRIGGER: Conversation started
CONDITIONS: Contact has tag "VIP"
ACTIONS:
  1. Notify VIP support team
  2. Add tag "VIP_Conversation"
  3. Update contact: last_vip_contact = now
```

### Example: Lead Follow-up

```
TRIGGER: Lead created
CONDITIONS: Lead source = "Website"
ACTIONS:
  1. Wait 1 hour
  2. Send welcome email
  3. Wait 2 days
  4. IF no response: Send follow-up
  5. Wait 5 days
  6. IF no response: Assign to sales rep
```

### Example: Negative Sentiment

```
TRIGGER: Message received
CONDITIONS: Sentiment score < 0.3
ACTIONS:
  1. Create support ticket
  2. Notify support team
  3. Add tag "Needs_Attention"
```

## Workflow Management

### Status

- **Active** - Running and processing
- **Paused** - Temporarily stopped
- **Draft** - Not yet activated

### Logs

View execution history:
- When triggered
- Conditions evaluated
- Actions performed
- Errors (if any)

### Testing

Test before activating:
1. Click **Test**
2. Select sample contact
3. Preview what would happen
4. Verify actions

## Best Practices

1. **Start simple** - Add complexity gradually
2. **Test thoroughly** - Use test mode first
3. **Monitor logs** - Check for errors
4. **Document purpose** - Name workflows clearly
5. **Avoid loops** - Prevent infinite triggers

## Related

- [Segments](/crm/segments) - Use in conditions
- [Campaigns](/crm/campaigns) - Automated sequences
- [CRM Overview](/crm/overview) - Full CRM features
