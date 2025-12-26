---
title: Platform Overview
description: Understanding the MyGPTAssistants architecture and components
---

# Platform Overview

MyGPTAssistants is built on a modern, scalable architecture designed for enterprise deployments.

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      Your Website                           │
│  ┌─────────────────┐                                        │
│  │  Chat Widget    │ ◄──── Embeddable React component       │
│  └────────┬────────┘                                        │
└───────────┼─────────────────────────────────────────────────┘
            │
            ▼
┌─────────────────────────────────────────────────────────────┐
│                   MyGPTAssistants Platform                  │
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ AI Engine    │  │ CRM System   │  │ Integrations │      │
│  │              │  │              │  │              │      │
│  │ • LLM APIs   │  │ • Contacts   │  │ • WhatsApp   │      │
│  │ • RAG        │  │ • Leads      │  │ • Instagram  │      │
│  │ • Embeddings │  │ • Tickets    │  │ • Webhooks   │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Core Components

### 1. AI Assistants (Bots)

Each bot is an independent AI assistant with:

- **Knowledge Base** - Documents, websites, and custom content the bot can reference
- **Personality** - System prompts that define behavior and tone
- **Plugins** - Extended capabilities (appointments, CRM lookups, etc.)
- **Appearance** - Customizable widget styling

### 2. CRM System

A full-featured customer relationship management system:

| Component | Description |
|-----------|-------------|
| **Contacts** | People who interact with your bots or business |
| **Leads** | Potential customers in your pipeline |
| **Tickets** | Support requests and issues |
| **Accounts** | Companies/organizations |
| **Opportunities** | Sales deals in progress |

### 3. Conversations

All chat interactions are stored and searchable:

- Full conversation history
- Handoff to human agents
- Analytics and insights
- Export capabilities

## Multi-Tenant Architecture

MyGPTAssistants uses a **team-based** multi-tenant model:

- Each **Team** is an isolated workspace
- Users can belong to multiple teams
- Data is strictly isolated between teams
- Role-based permissions within teams

## Data Flow

1. **User sends message** → Widget captures and sends to API
2. **API processes** → Authenticates, routes to correct bot
3. **AI generates response** → RAG retrieval + LLM generation
4. **Response delivered** → Streamed back to widget
5. **Data stored** → Conversation saved, CRM updated

## Security & Compliance

- **Encryption** - TLS 1.3 in transit, AES-256 at rest
- **GDPR** - Full compliance with data subject rights
- **SOC2** - Control mapping for Type II certification
- **Audit Logs** - Cryptographic hash chain for tamper detection

## Next Steps

- [Quick Start Guide](/getting-started/quick-start) - Create your first bot
- [AI Assistants](/assistants/playground) - Deep dive into bot configuration
- [CRM Overview](/crm/overview) - Learn about the CRM system
