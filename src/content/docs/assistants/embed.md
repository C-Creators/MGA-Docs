---
title: Embed Widget
description: Deploy your AI assistant on your website
---

# Embed Widget

Add your AI assistant to any website with a simple embed code.

## Quick Start

Copy and paste this code before the `</body>` tag:

```html
<script
  src="https://app.mygptassistants.com/widget.js"
  data-bot-id="YOUR_BOT_ID"
  async
></script>
```

Replace `YOUR_BOT_ID` with your actual bot ID (found in bot settings).

## Configuration Options

### Basic Options

```html
<script
  src="https://app.mygptassistants.com/widget.js"
  data-bot-id="YOUR_BOT_ID"
  data-position="bottom-right"
  data-theme="light"
  async
></script>
```

| Option | Values | Default |
|--------|--------|---------|
| `data-position` | `bottom-right`, `bottom-left` | `bottom-right` |
| `data-theme` | `light`, `dark`, `auto` | `auto` |
| `data-open` | `true`, `false` | `false` |

### Advanced Options

```html
<script
  src="https://app.mygptassistants.com/widget.js"
  data-bot-id="YOUR_BOT_ID"
  data-hide-launcher="false"
  data-z-index="9999"
  data-locale="en"
  async
></script>
```

| Option | Description |
|--------|-------------|
| `data-hide-launcher` | Hide the chat bubble |
| `data-z-index` | CSS z-index value |
| `data-locale` | Language code |

## JavaScript API

Control the widget programmatically:

### Open/Close

```javascript
// Open the chat widget
window.MGAWidget.open();

// Close the chat widget
window.MGAWidget.close();

// Toggle open/close
window.MGAWidget.toggle();
```

### Pre-fill Messages

```javascript
// Send a message when chat opens
window.MGAWidget.open({
  message: "I need help with my order"
});
```

### User Identification

```javascript
// Identify logged-in users
window.MGAWidget.identify({
  email: "user@example.com",
  name: "John Doe",
  userId: "user_123"
});
```

### Events

```javascript
// Listen for widget events
window.MGAWidget.on('open', () => {
  console.log('Chat opened');
});

window.MGAWidget.on('close', () => {
  console.log('Chat closed');
});

window.MGAWidget.on('message', (data) => {
  console.log('New message:', data);
});
```

## Platform-Specific Guides

### WordPress

1. Install a custom code plugin (like "Insert Headers and Footers")
2. Paste embed code in the footer section
3. Save and publish

### Shopify

1. Go to **Online Store** → **Themes**
2. Click **Actions** → **Edit code**
3. Find `theme.liquid`
4. Paste before `</body>`
5. Save

### React / Next.js

```jsx
import { useEffect } from 'react';

export default function ChatWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.mygptassistants.com/widget.js';
    script.setAttribute('data-bot-id', 'YOUR_BOT_ID');
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
  return null;
}
```

### Vue.js

```vue
<script setup>
import { onMounted, onUnmounted } from 'vue';

let script;

onMounted(() => {
  script = document.createElement('script');
  script.src = 'https://app.mygptassistants.com/widget.js';
  script.setAttribute('data-bot-id', 'YOUR_BOT_ID');
  script.async = true;
  document.body.appendChild(script);
});

onUnmounted(() => {
  if (script) document.body.removeChild(script);
});
</script>
```

## Troubleshooting

### Widget not appearing

1. Check bot ID is correct
2. Verify bot is active
3. Check browser console for errors
4. Ensure script is before `</body>`

### Widget conflicts with other elements

- Adjust `data-z-index`
- Check for CSS conflicts
- Try different position

### Performance concerns

- Script loads asynchronously
- Widget code is optimized and cached
- Minimal impact on page load

## Related

- [Appearance](/assistants/appearance) - Customize the widget look
- [Settings](/assistants/settings) - Configure bot behavior
