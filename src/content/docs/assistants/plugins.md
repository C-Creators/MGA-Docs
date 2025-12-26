---
title: Plugins
description: Extend your AI assistant with powerful capabilities
---

# Plugins

Plugins add specialized capabilities to your AI assistant beyond simple Q&A.

## Available Plugins

### 📅 Appointment Booking

Let users schedule appointments directly in chat.

**Features:**
- Real-time availability
- Calendar integration
- Confirmation emails
- Rescheduling support

**Setup:**
1. Enable the Appointments plugin
2. Configure appointment types
3. Set availability
4. Connect calendar (Google/Outlook)

### 📇 CRM Lookup

Access customer information during conversations.

**Features:**
- Look up contact details
- View order history
- Check account status
- Show relevant notes

**Setup:**
1. Enable CRM Lookup plugin
2. Configure which fields to expose
3. Set privacy restrictions

### 🎫 Ticket Creation

Create support tickets from conversations.

**Features:**
- Auto-create from chat
- Pre-fill with context
- Assign to teams
- Track status

**Setup:**
1. Enable Tickets plugin
2. Configure default settings
3. Set up routing rules

### 📋 Lead Capture

Collect and qualify leads during conversation.

**Features:**
- Capture contact info
- Custom qualification questions
- Lead scoring
- Pipeline assignment

**Setup:**
1. Enable Lead Capture plugin
2. Define required fields
3. Configure qualification flow

### 🔍 Knowledge Search

Enhanced search across your data sources.

**Features:**
- Semantic search
- Source citations
- Confidence scoring

This is enabled by default when you have data sources.

## Plugin Settings

Each plugin has its own settings:

### Enable/Disable

Toggle plugins on/off as needed. Disabled plugins won't be used by the bot.

### Permissions

Control what the plugin can do:
- Read-only vs read-write
- Which data to access
- User consent requirements

### Trigger Conditions

When should the plugin activate:
- User intent detection
- Specific keywords
- Always available

## Custom Plugins (API)

Build your own plugins using our API:

```javascript
// Example: Custom plugin action
{
  "name": "check_inventory",
  "description": "Check product inventory levels",
  "parameters": {
    "product_id": "string"
  },
  "endpoint": "https://your-api.com/inventory"
}
```

See [API Reference](/reference/api) for details.

## Best Practices

1. **Enable only what you need** - More plugins = more complexity
2. **Test thoroughly** - Ensure plugins work correctly
3. **Set clear triggers** - Help the bot know when to use each
4. **Monitor usage** - Track which plugins are most valuable

## Related

- [Integrations](/assistants/integrations) - External connections
- [Settings](/assistants/settings) - Bot configuration
- [CRM Overview](/crm/overview) - CRM capabilities
