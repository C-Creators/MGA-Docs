---
title: Bot Settings
description: Configure your AI assistant's behavior and capabilities
---

# Bot Settings

Fine-tune how your AI assistant behaves and responds.

## General Settings

### Basic Information

| Setting | Description |
|---------|-------------|
| **Name** | Internal name for the bot |
| **Description** | What this bot is for (internal) |
| **Status** | Active or paused |

### System Prompt

The core instructions that define your bot's behavior:

```text
You are [Name], a helpful assistant for [Company].

Your role is to:
- Answer questions about our products
- Help customers find what they need
- Collect contact information when appropriate

Guidelines:
- Be friendly and professional
- Keep responses concise
- If unsure, offer to connect with a human
```

**Tips:**
- Be specific about the bot's role
- Include tone guidelines
- Define boundaries (what NOT to do)
- Specify escalation triggers

## AI Model Settings

### Model Selection

Choose the AI model:
- **GPT-4o** - Most capable, best for complex tasks
- **GPT-4o-mini** - Fast and cost-effective
- **Claude 3.5 Sonnet** - Alternative provider

### Parameters

| Parameter | Description | Range |
|-----------|-------------|-------|
| **Temperature** | Creativity level | 0.0 - 1.0 |
| **Max Tokens** | Response length limit | 100 - 4000 |
| **Top P** | Sampling diversity | 0.0 - 1.0 |

**Recommendations:**
- Customer support: Temperature 0.3-0.5
- Creative content: Temperature 0.7-0.9
- Factual responses: Temperature 0.1-0.3

## Conversation Settings

### Memory

- **Context Window** - How many messages to remember
- **Summarization** - Compress long conversations

### Behavior

- **Greeting Behavior** - First message settings
- **Typing Indicator** - Show "bot is typing"
- **Response Delay** - Artificial delay for natural feel

## Data & Privacy

### Data Collection

Configure what data to collect:
- Name
- Email
- Phone
- Custom fields

### Consent

- **Consent Message** - GDPR consent text
- **Required Consent** - Block chat until consent given

## Advanced

### Fallback Behavior

What happens when the bot can't answer:
- Default response message
- Escalation to human
- Suggest related topics

### Rate Limiting

- **Messages per minute** - Prevent spam
- **Conversations per day** - Usage limits

### API Keys

For external integrations:
- Generate API keys
- Set permissions
- View usage

## Related

- [Playground](/assistants/playground) - Test settings changes
- [Data Sources](/assistants/data-sources) - Train your bot
- [Appearance](/assistants/appearance) - Visual customization
