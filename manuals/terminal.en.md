# Web Terminal Manual
[English](terminal.en.md) | [简体中文](terminal.zh-CN.md)

This manual provides a comprehensive guide for configuring and customizing the settings of your web-based terminal application. Each setting allows you to modify how the terminal behaves and appears, giving you full control over the user experience.

## Settings Overview

### 1. Choose a Theme
This option allows you to select a visual theme for the terminal interface. Themes adjust the colors, styles, and overall look of the terminal, providing a tailored experience to suit your preferences.

- **Available Themes**: The terminal includes several pre-defined themes that can be previewed at [Gogh Theme Previews](https://gogh-co.github.io/Gogh/).
- **Loading Themes**: To access additional themes, click the "Add More Themes" button. This will load the themes from a `themes.json` file and make them available in the theme dropdown menu.

### 2. Add More Themes
Clicking "Add More Themes" initiates an HTTP request to fetch a list of available themes from an external source. Once fetched, these themes are added to the dropdown menu, allowing you to choose from a wider selection.

- **Default Behavior**: Without clicking this button, the terminal will only display the default theme.

### 3. Font Size (px)
The "Font Size" option allows you to adjust the font size of the entire terminal, including the input area, command prompts, and output text.

- **Default Size**: The default font size is **14px**.
- **Adjustable Range**: You can enter any pixel value that best suits your comfort and readability needs.

### 4. Proxy
The "Proxy" setting allows you to specify a proxy URL to act as a **CORS proxy** for HTTP/HTTPS requests targeting API endpoints.

- **Usage**: This is particularly useful for bypassing CORS limitations during API requests.
- **Authentication**: You can optionally provide an API key for the proxy, although most pre-configured APIs do not require authentication.

### 5. Prompt
The "Prompt" field allows you to customize the static text that appears as the terminal prompt. This prompt text is static and will not change dynamically.

- **Customization**: Unlike traditional terminal prompts, this setting does not support dynamic placeholders such as current directory or username.

### 6. Output Text Color
The "Color" setting controls the color of output text displayed in the terminal.

- **Color Options**: Choose from **8 terminal-supported colors** to differentiate outputs, making it easier to identify important information at a glance.

### 7. Open Editor
The "Open Editor" button launches a web-based code editor where you can modify the terminal's configuration and behavior.

- **Capabilities**: The editor allows you to adjust settings, add JavaScript functions, or modify terminal features.
- **Scripting Support**: The terminal supports custom scripts and includes common functions. You can find examples in [this GitHub repository](https://github.com/Vector-Index/terminal/tree/main/scripts/js) or explore the [terminal repo](https://github1s.com/Vector-Index/terminal). Additionally, two major modules are available for scripting:
  - **[Fuse.js](https://www.fusejs.io/)**: A fuzzy searching library to enhance search capabilities.
  - **[Cheerio](https://cheerio.js.org/docs/intro)**: A library for server-side DOM manipulation.

### 8. Copy URL
Clicking the "Copy URL" button generates a shareable URL that contains a snapshot of your current terminal configuration.

- **Purpose**: This is useful for saving or sharing your customized terminal settings with others.
- **No Authentication**: The generated URL can be shared without any authentication or access restrictions.

### 9. Back
The "Back" button closes the settings menu and returns you to the terminal interface.

- **Saving Changes**: Changes are saved dynamically, so no additional saving action or page reload is required.
- **Effect of Changes**: Most settings are applied immediately without the need to refresh the terminal.

---

## Configuration Guide

A configuration can be loaded in JSON format. Below is an example schema to help you structure your configuration settings.

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "data": {
      "type": "object",
      "properties": {
        "prompt": {
          "type": "string"
        },
        "intro": {
          "type": "string"
        },
        "help": {
          "type": "string"
        },
        "proxy": {
          "type": "string",
          "pattern": "^https?://.*"
        },
        "urls": {
          "type": "object",
          "additionalProperties": {
            "type": "string"
          }
        },
        "mqtt": {
          "type": "object",
          "properties": {
            "broker": {
              "type": "string",
              "pattern": "^wss?://.*"
            },
            "options": {
              "type": "object",
              "additionalProperties": true
            }
          },
          "required": ["broker"]
        }
      },
      "required": ["prompt", "intro", "help", "proxy", "urls", "mqtt"]
    },
    "scripts": {
      "type": "object",
      "properties": {
        "js": {
          "type": "object",
          "additionalProperties": {
            "type": "object",
            "properties": {
              "text": {
                "type": "string"
              },
              "mode": {
                "type": "string"
              }
            },
            "required": ["text", "mode"]
          }
        },
        "py": {
          "type": "object",
          "additionalProperties": {
            "type": "object",
            "properties": {
              "text": {
                "type": "string"
              },
              "mode": {
                "type": "string"
              }
            },
            "required": ["text", "mode"]
          }
        }
      },
      "required": ["js", "py"]
    }
  },
  "required": ["data", "scripts"]
}
```

