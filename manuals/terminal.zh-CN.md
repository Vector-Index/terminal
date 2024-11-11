# Web Terminal 手册
[English](terminal.en.md) | [简体中文](terminal.zh-CN.md)

本手册提供了配置和自定义您的基于 Web 的终端应用程序设置的全面指南。每个设置都允许您修改终端的行为和外观，从而完全控制用户体验。

## 设置概览

### 1. 选择主题
此选项允许您为终端界面选择视觉主题。主题会调整终端的颜色、样式和整体外观，提供符合您偏好的定制体验。

- **可用主题**：终端包含多个预定义的主题，可以在 [Gogh 主题预览](https://gogh-co.github.io/Gogh/) 中查看。
- **加载主题**：要访问更多主题，请点击“添加更多主题”按钮。这将从 `themes.json` 文件中加载主题，并使它们在主题下拉菜单中可用。

### 2. 添加更多主题
点击“添加更多主题”按钮会发起 HTTP 请求，从外部源获取可用主题列表。一旦获取，这些主题将添加到下拉菜单中，允许您从更广泛的选择中进行选择。

- **默认行为**：如果不点击此按钮，终端只会显示默认主题。

### 3. 字体大小（px）
“字体大小”选项允许您调整整个终端的字体大小，包括输入区域、命令提示符和输出文本。

- **默认大小**：默认字体大小为 **14px**。
- **可调整范围**：您可以输入任何像素值，以满足您的舒适性和可读性需求。

### 4. 代理
“代理”设置允许您指定一个代理 URL，作为 HTTP/HTTPS 请求目标 API 端点的 **CORS 代理**。

- **用途**：这在进行 API 请求时特别有用，可以绕过 CORS 限制。
- **认证**：您可以为代理选择性地提供 API 密钥，尽管大多数预配置的 API 不需要认证。

### 5. 提示符
“提示符”字段允许您自定义出现在终端提示符中的静态文本。此提示符文本是静态的，不会动态更改。

- **自定义**：与传统终端提示符不同，此设置不支持动态占位符（如当前目录或用户名）。

### 6. 输出文本颜色
“颜色”设置控制终端中显示的输出文本的颜色。

- **颜色选项**：从 **8 种终端支持的颜色**中进行选择，以区分输出，使重要信息更容易识别。

### 7. 打开编辑器
“打开编辑器”按钮会启动一个基于 Web 的代码编辑器，您可以在其中修改终端的配置和行为。

- **功能**：编辑器允许您调整设置、添加 JavaScript 函数或修改终端功能。
- **脚本支持**：终端支持自定义脚本并包含常见功能。您可以在 [此 GitHub 仓库](https://github.com/Vector-Index/terminal/tree/main/scripts/js) 中找到示例，或探索 [终端仓库](https://github1s.com/Vector-Index/terminal)。此外，提供了两个主要模块用于脚本编写：
  - **[Fuse.js](https://www.fusejs.io/)**：一个用于增强搜索功能的模糊搜索库。
  - **[Cheerio](https://cheerio.js.org/docs/intro)**：一个用于服务器端 DOM 操作的库。

### 8. 复制 URL
点击“复制 URL”按钮会生成一个可分享的 URL，其中包含您当前终端配置的快照。

- **目的**：这对于保存或与他人分享您的自定义终端设置非常有用。
- **无需认证**：生成的 URL 可以在无需任何认证或访问限制的情况下分享。

### 9. 返回
“返回”按钮会关闭设置菜单，并返回到终端界面。

- **保存更改**：更改会动态保存，因此无需额外的保存操作或页面重新加载。
- **更改效果**：大多数设置会立即生效，无需刷新终端。

---

## 配置指南

可以以 JSON 格式加载配置。以下是帮助您结构化配置设置的示例模式。

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "config": {
      "type": "object",
      "properties": {
        "data": {
          "type": "object",
          "properties": {
            "help": {
              "type": "string"
            },
            "proxy": {
              "type": "string",
              "format": "uri-template"
            },
            "urls": {
              "type": "object",
              "additionalProperties": {
                "type": "string",
                "format": "uri"
              }
            },
            "mqtt": {
              "type": "object",
              "properties": {
                "broker": {
                  "type": "string",
                  "format": "uri"
                },
                "options": {
                  "type": "object",
                  "additionalProperties": true
                }
              },
              "required": ["broker"]
            }
          },
          "required": ["help", "proxy", "mqtt"]
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
                    "type": "string",
                    "enum": ["javascript"]
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
                    "type": "string",
                    "enum": ["python"]
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
    },
    "prompt": {
      "type": "string"
    },
    "intro": {
      "type": "string"
    },
    "settings": {
      "type": "boolean"
    },
    "load": {
      "type": "boolean"
    }
  },
  "required": ["config", "intro", "settings", "load"]
}
```

