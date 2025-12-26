---
title: Quick Start
description: Create your first AI assistant in 5 minutes
---

# Quick Start Guide

Get your first AI assistant up and running in just a few minutes.

## Prerequisites

- A MyGPTAssistants account
- Access to a team workspace

## Step 1: Create a New Bot

1. Navigate to **Bots** in the sidebar
2. Click **+ New Bot**
3. Enter a name for your assistant (e.g., "Customer Support Bot")
4. Click **Create**

## Step 2: Configure Your Bot

### Set the System Prompt

The system prompt defines your bot's personality and behavior:

```text
You are a helpful customer support assistant for [Your Company].
You help customers with:
- Product questions
- Order status inquiries
- Technical support

Be friendly, professional, and concise.
If you don't know something, say so and offer to connect them with a human agent.
```

### Add Knowledge Sources

Train your bot on your content:

1. Go to the **Data Sources** tab
2. Click **+ Add Source**
3. Choose a source type:
   - **Website** - Crawl and index a website
   - **PDF** - Upload PDF documents
   - **Text** - Paste raw text content
4. Wait for processing to complete

## Step 3: Test in Playground

1. Go to the **Playground** tab
2. Start a conversation with your bot
3. Test various questions to see how it responds
4. Adjust the system prompt as needed

## Step 4: Customize Appearance

1. Go to the **Appearance** tab
2. Configure:
   - **Colors** - Match your brand
   - **Logo** - Add your company logo
   - **Welcome message** - First message users see
   - **Position** - Where the widget appears

## Step 5: Deploy to Your Website

1. Go to the **Embed** tab
2. Copy the embed code:

```html
<script
  src="https://app.mygptassistants.com/widget.js"
  data-bot-id="your-bot-id"
  async
></script>
```

3. Paste into your website's HTML before `</body>`

## What's Next?

Now that you have a basic bot running:

- **[Add Plugins](/assistants/plugins)** - Enable appointments, CRM integration
- **[Set Up Integrations](/assistants/integrations)** - Connect WhatsApp, Instagram
- **[Configure CRM](/crm/overview)** - Manage contacts and leads
- **[View Analytics](/assistants/analytics)** - Track performance

## Need Help?

- Check the detailed guides in this documentation
- Contact support through the platform
- Join our community Discord
