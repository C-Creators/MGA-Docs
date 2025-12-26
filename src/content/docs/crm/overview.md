---
title: CRM Overview
description: Manage customer relationships with the built-in CRM system
---

# CRM Overview

MyGPTAssistants includes a full-featured CRM system that integrates seamlessly with your AI assistants.

## What is the CRM?

The CRM (Customer Relationship Management) system helps you:

- **Track contacts** - Everyone who interacts with your business
- **Manage leads** - Potential customers in your sales pipeline
- **Handle support** - Ticket system for customer issues
- **Run campaigns** - Marketing and outreach automation
- **Automate workflows** - Trigger actions based on events

## Core Components

### 👥 Contacts

People who interact with your bots or business:
- Automatically created from chat conversations
- Full profile with communication history
- Tags and custom fields
- [Learn more →](/crm/contacts)

### 🎯 Leads

Potential customers in your pipeline:
- Lead scoring and qualification
- Pipeline stages
- Assignment rules
- [Learn more →](/crm/leads)

### 🎫 Tickets

Support requests and issues:
- Priority and status tracking
- Team assignment
- SLA management
- [Learn more →](/crm/tickets)

### 📊 Segments

Dynamic groups of contacts:
- Rule-based filtering
- Real-time updates
- Campaign targeting
- [Learn more →](/crm/segments)

### 📧 Campaigns

Marketing and outreach:
- Email campaigns
- SMS messages
- Automated sequences
- [Learn more →](/crm/campaigns)

### ⚙️ Workflows

Automation rules:
- Event-based triggers
- Multi-step sequences
- CRM updates
- [Learn more →](/crm/workflows)

## Integration with AI Assistants

Your CRM and bots work together:

### Automatic Contact Creation

When someone chats with your bot:
1. Contact is created (if new)
2. Conversation is logged
3. Contact info is captured
4. Tags are applied

### Bot Access to CRM

Bots can look up customer information:
- "What's my order status?"
- "Update my email address"
- "Show my recent tickets"

### Workflow Triggers

Bot interactions can trigger workflows:
- New lead → Assign to sales
- Negative sentiment → Create ticket
- VIP customer → Priority routing

## Data Model

```
Team
├── Contacts
│   ├── Conversations
│   ├── Appointments
│   ├── Notes
│   └── Tickets
├── Leads
│   ├── Pipeline Stages
│   └── Activities
├── Accounts (Companies)
│   ├── Contacts
│   └── Opportunities
└── Campaigns
    ├── Recipients
    └── Analytics
```

## Getting Started

1. **[Contacts](/crm/contacts)** - Start with your customer base
2. **[Segments](/crm/segments)** - Organize contacts into groups
3. **[Workflows](/crm/workflows)** - Set up automation
4. **[Campaigns](/crm/campaigns)** - Launch outreach

## Related

- [Analytics](/assistants/analytics) - Conversation metrics
- [Plugins](/assistants/plugins) - CRM integration in bots
