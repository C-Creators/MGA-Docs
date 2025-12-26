---
title: Tickets
description: Manage customer support requests and issues
---

# Tickets

The ticket system helps you track and resolve customer support requests.

## Ticket Overview

A ticket represents a customer issue or request:

- **Subject** - Brief description
- **Description** - Full details
- **Status** - Open, in progress, resolved, etc.
- **Priority** - Low, medium, high, urgent
- **Assignee** - Team member responsible
- **Contact** - Related customer

## Creating Tickets

### From Conversations

When a bot escalates or user requests help:
1. Ticket auto-created
2. Conversation linked
3. Context preserved
4. Agent notified

### Manually

1. Click **+ New Ticket**
2. Select contact
3. Enter subject and description
4. Set priority
5. Assign (optional)
6. Save

### From API/Integrations

External systems can create tickets via:
- REST API
- Webhooks
- Email parsing

## Ticket Properties

### Status

| Status | Description |
|--------|-------------|
| **Open** | New, not started |
| **In Progress** | Being worked on |
| **Waiting** | Awaiting customer response |
| **Resolved** | Issue fixed |
| **Closed** | Complete, no further action |

### Priority

| Priority | Response Time |
|----------|---------------|
| **Low** | Within 48 hours |
| **Medium** | Within 24 hours |
| **High** | Within 4 hours |
| **Urgent** | Within 1 hour |

### Type

Categorize tickets:
- Bug/Issue
- Feature Request
- Question
- Complaint
- Other

## Working with Tickets

### Ticket View

- **Details panel** - Properties and contact info
- **Activity feed** - All updates and comments
- **Internal notes** - Team-only comments
- **Time tracking** - Hours spent

### Actions

- **Reply** - Send response to customer
- **Note** - Add internal comment
- **Assign** - Route to team member
- **Escalate** - Move to higher tier
- **Merge** - Combine duplicate tickets

### Communication

Reply to customers:
1. Type response
2. Choose channel (email, SMS, chat)
3. Add attachments (optional)
4. Send

Customer replies appear in ticket automatically.

## Ticket Assignment

### Manual Assignment

1. Open ticket
2. Click assignee field
3. Select team member
4. They receive notification

### Auto-Assignment

Configure rules:
- Round-robin distribution
- Skill-based routing
- Load balancing
- VIP routing

### Queues

Organize by team or function:
- Support Queue
- Sales Queue
- Technical Queue
- Billing Queue

## SLA Management

Set service level agreements:

### SLA Rules

```
IF priority = "Urgent"
THEN first_response_time = 1 hour
AND resolution_time = 4 hours
```

### SLA Tracking

- Time to first response
- Time to resolution
- SLA breach alerts
- SLA reports

## Ticket Views

### Predefined Views

- **My Tickets** - Assigned to me
- **Unassigned** - Needs assignment
- **Overdue** - Past SLA
- **All Open** - Everything active

### Custom Views

Create filtered views:
1. Click **+ New View**
2. Add filters
3. Select columns
4. Save view

## Automation

### Workflows

Trigger on ticket events:
- Ticket created → Notify team
- Priority changed → Escalate
- No response in 24h → Follow up

### Auto-responses

Send automatic replies:
- Acknowledgment on creation
- After-hours message
- Resolution confirmation

## Reports

Track ticket metrics:

| Metric | Description |
|--------|-------------|
| **Volume** | Tickets created |
| **Resolution Time** | Average time to resolve |
| **First Response** | Time to first reply |
| **CSAT** | Customer satisfaction |
| **SLA Compliance** | % within SLA |

## Related

- [Contacts](/crm/contacts) - Customer profiles
- [Workflows](/crm/workflows) - Ticket automation
- [CRM Overview](/crm/overview) - Full CRM
