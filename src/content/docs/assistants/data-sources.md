---
title: Data Sources
description: Train your AI assistant with your content and knowledge base
---

# Data Sources

Data sources are the knowledge that powers your AI assistant's responses.

## How It Works

1. **You add content** → Documents, websites, text
2. **We process it** → Extract, chunk, embed
3. **Bot retrieves** → Find relevant content for questions
4. **Bot responds** → Generate answer using your content

This is called **RAG** (Retrieval-Augmented Generation).

## Source Types

### Website

Crawl and index a website:

**Settings:**
- **URL** - Starting page
- **Depth** - How many links deep to crawl
- **Include/Exclude** - URL patterns to filter

**Best for:**
- Product pages
- FAQ sections
- Blog content
- Documentation

### PDF Documents

Upload PDF files:

**Settings:**
- **File upload** - Drag and drop or browse
- **OCR** - Enable for scanned documents

**Best for:**
- Product manuals
- Policies
- Reports
- Presentations

### Text / Markdown

Paste or type content directly:

**Settings:**
- **Title** - Name for this content
- **Content** - Raw text or Markdown

**Best for:**
- Quick additions
- Custom Q&A pairs
- Specific instructions

### Notion (Coming Soon)

Sync Notion pages and databases.

### Google Drive (Coming Soon)

Connect Google Docs and files.

## Managing Sources

### View Status

Each source shows:
- **Status** - Processing, ready, error
- **Chunks** - Number of text segments
- **Last updated** - When content was refreshed

### Refresh Content

For websites, you can re-crawl to get updates:
1. Click the source
2. Click **Refresh**
3. Wait for processing

### Delete Source

Remove a source:
1. Click the source
2. Click **Delete**
3. Confirm removal

⚠️ This removes the content from your bot's knowledge immediately.

## Best Practices

### Content Quality

- **Be comprehensive** - Cover all common questions
- **Stay current** - Update outdated content
- **Be specific** - Detailed content = better answers

### Organization

- **Name sources clearly** - "Product FAQ" not "Document 1"
- **Group related content** - Easier to manage
- **Remove duplicates** - Prevents confusion

### Testing

After adding sources:
1. Go to Playground
2. Ask questions about the new content
3. Verify accuracy
4. Adjust if needed

## Troubleshooting

### "Bot doesn't know about X"

- Check if content covers X
- Verify source is processed
- Try rephrasing the question

### "Outdated information"

- Refresh website sources
- Re-upload updated documents

### "Processing stuck"

- Large files take longer
- Check file format is supported
- Contact support if >24 hours

## Related

- [Playground](/assistants/playground) - Test your knowledge base
- [Settings](/assistants/settings) - Configure retrieval
