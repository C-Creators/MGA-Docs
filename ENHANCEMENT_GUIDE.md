# MGA-Docs Enhancement Guide

This guide documents the standard patterns for enhancing documentation pages with Astro Starlight interactive components.

## Standard Import Statement

Every `.mdx` file should include this import statement after the frontmatter:

```mdx
---
title: Page Title
description: Page description
---

import { Aside, Badge, Card, CardGrid, LinkCard, Steps, Tabs, TabItem, FileTree } from '@astrojs/starlight/components';
```

---

## Component Patterns

### 1. Converting :::tip Blocks to Aside Components

**Before (Markdown):**
```markdown
:::tip[Helpful Tip]
This is helpful information for users.
:::
```

**After (MDX):**
```mdx
<Aside type="tip" title="Helpful Tip">
This is helpful information for users.
</Aside>
```

**Aside Types:**
- `type="note"` - Blue, for general information
- `type="tip"` - Purple, for helpful tips
- `type="caution"` - Orange, for warnings
- `type="danger"` - Red, for critical warnings

**Examples:**
```mdx
<Aside type="note">
General information the user should know.
</Aside>

<Aside type="tip" title="Pro Tip">
A helpful suggestion to improve workflow.
</Aside>

<Aside type="caution" title="Warning">
Something the user should be careful about.
</Aside>

<Aside type="danger" title="Critical">
Something that could cause data loss or security issues.
</Aside>
```

---

### 2. Related Topics with CardGrid + LinkCard

**Pattern:**
```mdx
## Related Topics

<CardGrid>
  <LinkCard
    title="Topic Name"
    description="Brief description of what users will learn"
    href="/path/to/page/"
  />
  <LinkCard
    title="Another Topic"
    description="Another helpful resource"
    href="/path/to/other-page/"
  />
</CardGrid>
```

---

### 3. Getting Started with Steps Component

**Pattern:**
```mdx
## Getting Started

<Steps>
1. **First step title**
   
   Description of the first step with any details needed.

2. **Second step title**
   
   Description of the second step.

3. **Third step title**
   
   Final step description.
</Steps>
```

**Note:** Steps wraps an ordered list and adds visual styling. Each step can contain multiple paragraphs, code blocks, or other content.

---

### 4. Multi-Option Content with Tabs

**Pattern for Platform-Specific Instructions:**
```mdx
<Tabs syncKey="platform">
  <TabItem label="npm" icon="seti:npm">
    ```bash
    npm install package-name
    ```
  </TabItem>
  <TabItem label="pnpm" icon="seti:pnpm">
    ```bash
    pnpm add package-name
    ```
  </TabItem>
  <TabItem label="yarn" icon="seti:yarn">
    ```bash
    yarn add package-name
    ```
  </TabItem>
</Tabs>
```

**Pattern for Different Methods:**
```mdx
<Tabs>
  <TabItem label="Method A">
    Content for method A...
  </TabItem>
  <TabItem label="Method B">
    Content for method B...
  </TabItem>
</Tabs>
```

**syncKey:** Use `syncKey` to synchronize tab selection across the page (e.g., all "npm" tabs switch together).

---

### 5. Feature Cards with CardGrid

**Pattern:**
```mdx
## Features

<CardGrid>
  <Card title="Feature Name" icon="star">
    Description of this feature and its benefits.
  </Card>
  <Card title="Another Feature" icon="rocket">
    Description of another feature.
  </Card>
  <Card title="Third Feature" icon="setting">
    Description of the third feature.
  </Card>
</CardGrid>
```

---

### 6. Badge Usage Guidelines

**Status Badges:**
```mdx
<Badge text="New" variant="success" />
<Badge text="Beta" variant="caution" />
<Badge text="Deprecated" variant="danger" />
<Badge text="Updated" variant="tip" />
<Badge text="Required" variant="note" />
```

**Size Options:**
```mdx
<Badge text="Small" size="small" />
<Badge text="Medium" size="medium" />
<Badge text="Large" size="large" />
```

**Inline Usage:**
```mdx
## Features <Badge text="New" variant="success" size="small" />

This section covers the new features...
```

---

### 7. FileTree for Directory Structures

**Pattern:**
```mdx
<FileTree>
- src/
  - components/
    - Header.astro
    - Footer.astro
  - content/
    - docs/
      - index.mdx
      - getting-started.mdx
  - styles/
    - global.css
- astro.config.mjs
- package.json
</FileTree>
```

**Notes:**
- Use `-` for files and directories
- Indent with 2 spaces for nesting
- Directories should end with `/`
- Bold items with `**filename**` to highlight

---

### 8. Common Icon Reference

Available icons for Cards and other components:

| Icon Name | Use Case |
|-----------|----------|
| `star` | Featured/important items |
| `rocket` | Performance, launch, getting started |
| `pencil` | Editing, customization |
| `setting` | Configuration, settings |
| `document` | Documents, files, content |
| `puzzle` | Plugins, integrations, extensions |
| `add-document` | Creating new content |
| `approve-check` | Success, completed |
| `warning` | Cautions, warnings |
| `error` | Errors, danger |
| `information` | Info, notes |
| `external` | External links |
| `comment` | Conversations, feedback |
| `bars` | Lists, segments, analytics |
| `random` | Workflows, automation |
| `group` | Users, contacts, teams |
| `email` | Email, notifications |
| `phone` | Phone, communication |
| `graph` | Reports, analytics |
| `list-format` | Lists, categories |
| `magnifier` | Search |
| `heart` | Favorites, likes |
| `youtube` | Video, media |
| `github` | GitHub |
| `discord` | Discord |

---

## Complete Page Template

```mdx
---
title: Page Title
description: Clear description for SEO and page previews
---

import { Aside, Badge, Card, CardGrid, LinkCard, Steps, Tabs, TabItem, FileTree } from '@astrojs/starlight/components';

Brief introduction paragraph explaining what this page covers.

![Screenshot description](../../../assets/screenshots/page-screenshot.png)

## Overview

Main content explaining the feature or concept.

<Aside type="tip" title="Quick Tip">
A helpful tip for users getting started.
</Aside>

## Key Features

<CardGrid>
  <Card title="Feature One" icon="star">
    Description of feature one.
  </Card>
  <Card title="Feature Two" icon="rocket">
    Description of feature two.
  </Card>
</CardGrid>

## Getting Started

<Steps>
1. **Step One**
   
   Description of the first step.

2. **Step Two**
   
   Description of the second step.

3. **Step Three**
   
   Description of the third step.
</Steps>

## Configuration Options

<Tabs>
  <TabItem label="Basic">
    Basic configuration content...
  </TabItem>
  <TabItem label="Advanced">
    Advanced configuration content...
  </TabItem>
</Tabs>

## Best Practices

<Aside type="note">
Important information users should know.
</Aside>

- Best practice one
- Best practice two
- Best practice three

## Troubleshooting

<Aside type="caution" title="Common Issues">
Description of common issues and how to resolve them.
</Aside>

## Related Topics

<CardGrid>
  <LinkCard
    title="Related Page One"
    description="Description of related content"
    href="/section/related-page/"
  />
  <LinkCard
    title="Related Page Two"
    description="Description of related content"
    href="/section/another-page/"
  />
</CardGrid>
```

---

## Migration Checklist

When converting a `.md` file to `.mdx`:

- [ ] Rename file from `.md` to `.mdx`
- [ ] Add component imports after frontmatter
- [ ] Convert all `:::tip`, `:::note`, `:::caution`, `:::danger` blocks to `<Aside>` components
- [ ] Convert "Related Topics" or "Related" sections to `<CardGrid>` with `<LinkCard>`
- [ ] Wrap numbered step-by-step instructions in `<Steps>`
- [ ] Convert feature lists to `<CardGrid>` with `<Card>` (add appropriate icons)
- [ ] Add `<Badge>` for status indicators (New, Beta, etc.)
- [ ] Use `<Tabs>` for multi-option content (platforms, methods)
- [ ] Use `<FileTree>` for directory structure displays
- [ ] Verify all component syntax is correct
- [ ] Test page renders correctly with `pnpm dev`

---

## Troubleshooting

### Common Issues

**Issue:** Components not rendering
- Ensure import statement is present and correct
- Check component names match exactly (case-sensitive)
- Verify file extension is `.mdx` not `.md`

**Issue:** Aside not showing styled
- Make sure type is one of: `note`, `tip`, `caution`, `danger`
- Ensure content is inside the component tags

**Issue:** Steps not numbered
- Ensure you're using an ordered list (`1.`, `2.`, etc.)
- Content must be indented under each number

**Issue:** Tabs not syncing
- Use the same `syncKey` value across all `<Tabs>` components
- Ensure `syncKey` is a string
