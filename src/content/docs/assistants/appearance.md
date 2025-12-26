---
title: Appearance & Branding
description: Customize the look and feel of your chat widget
---

# Appearance & Branding

Make your AI assistant match your brand with full visual customization.

## Widget Customization

### Colors

Configure your brand colors:

| Setting | Description |
|---------|-------------|
| **Primary Color** | Main accent color for buttons and highlights |
| **Background Color** | Widget background |
| **Text Color** | Primary text color |
| **User Message Color** | Background for user messages |
| **Bot Message Color** | Background for bot responses |

### Logo & Images

- **Bot Avatar** - Image shown next to bot messages
- **Header Logo** - Logo in the widget header
- **Launcher Icon** - Custom icon for the chat button

Supported formats: PNG, JPG, SVG (recommended size: 64x64px for avatars)

## Widget Settings

### Display Options

- **Widget Position** - Bottom-right or bottom-left
- **Widget Size** - Compact, standard, or expanded
- **Mobile Behavior** - Full-screen on mobile devices
- **Z-Index** - Layer ordering for your page

### Messages

| Setting | Description |
|---------|-------------|
| **Welcome Message** | First message displayed when chat opens |
| **Placeholder Text** | Input field placeholder |
| **Offline Message** | Shown when bot is unavailable |

### Branding

- **Show "Powered by"** - Toggle platform branding
- **Custom Footer** - Add your own footer text or links

## Advanced Customization

### Custom CSS

Inject custom CSS to override default styles:

```css
/* Example: Custom font */
.mga-widget {
  font-family: 'Your Font', sans-serif;
}

/* Example: Rounded corners */
.mga-message {
  border-radius: 16px;
}
```

### Theme Presets

Choose from preset themes:
- **Light** - Clean white background
- **Dark** - Dark mode interface
- **Auto** - Follows user's system preference

## Preview

Use the live preview to see changes in real-time before publishing.

## Saving Changes

1. Make your customizations
2. Click **Preview** to see changes
3. Click **Save** to apply to your live widget

## Related

- [Embed](/assistants/embed) - Deploy your customized widget
- [Settings](/assistants/settings) - Configure bot behavior
