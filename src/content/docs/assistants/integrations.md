---
title: Integrations
description: Connect your AI assistant to external platforms and services
---

# Integrations

Extend your AI assistant's reach by connecting to messaging platforms and external services.

## Messaging Platforms

### WhatsApp Business

Connect your bot to WhatsApp for customer communication:

**Setup:**
1. Go to **Integrations** → **WhatsApp**
2. Connect your WhatsApp Business account
3. Configure webhook URL
4. Map phone numbers to your bot

**Features:**
- Automated responses
- Rich media support (images, documents)
- Template messages
- Contact sync to CRM

### Instagram

Respond to Instagram DMs automatically:

**Setup:**
1. Go to **Integrations** → **Instagram**
2. Connect your Instagram Business account
3. Authorize the application
4. Configure auto-reply settings

**Features:**
- DM automation
- Story mention responses
- Comment replies (optional)
- Lead capture

### Messenger (Facebook)

Connect to Facebook Messenger for your business page:

**Setup:**
1. Go to **Integrations** → **Messenger**
2. Connect your Facebook Page
3. Configure permissions
4. Enable bot responses

## CRM Integrations

### Native CRM

Your bot automatically integrates with the built-in CRM:
- Create contacts from conversations
- Log all interactions
- Trigger workflows
- Update lead status

### External CRMs

Connect to external CRM systems:
- **Salesforce** - Sync contacts and opportunities
- **HubSpot** - Bidirectional contact sync
- **Pipedrive** - Deal and contact management

## Webhooks

Send data to any external system:

```json
{
  "event": "conversation.message",
  "data": {
    "conversationId": "conv_123",
    "message": "User message content",
    "contactId": "contact_456",
    "timestamp": "2024-01-15T10:30:00Z"
  }
}
```

**Available Events:**
- `conversation.started`
- `conversation.message`
- `conversation.ended`
- `contact.created`
- `appointment.booked`

## Calendar Integrations

For appointment scheduling:
- **Google Calendar** - Sync availability and bookings
- **Microsoft Outlook** - Calendar integration
- **Cal.com** - Advanced scheduling

## API Access

Build custom integrations with our REST API:
- Full conversation access
- Contact management
- Bot configuration
- Analytics data

See [API Reference](/reference/api) for details.

## Related

- [Plugins](/assistants/plugins) - Enable built-in capabilities
- [CRM Overview](/crm/overview) - Understand CRM features
