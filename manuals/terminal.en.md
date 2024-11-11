# Web-Based Terminal App Settings Manual

This manual provides detailed information on configuring and customizing the settings for your web-based terminal app. Each setting allows you to modify how the terminal behaves and appears, giving you control over the user experience.

### 1. Choose a Theme
This option allows you to select a visual theme for the terminal interface. Themes change the colors, styles, and overall look of the terminal.

- **Available Themes**: The available themes are pre-defined and can be previewed at [Gogh Theme Previews](https://gogh-co.github.io/Gogh/).
- **Loading Themes**: Themes will only be available in the dropdown after pressing the "Add More Themes" button, which fetches a list of themes from a `themes.json` file.

### 2. Add More Themes
Clicking this option will initiate an HTTP request to fetch the list of available themes from an external source. This list will populate the dropdown in the "Choose a Theme" option, allowing you to select different visual themes. Without clicking this button, only the default theme is available.

### 3. Font Size (px)
The "Font Size" field allows you to adjust the font size of the entire terminal interface, including the input area, command prompts, and output text.

- **Default Size**: The default font size is set to **14px**.
- **Adjustable Range**: You can enter any pixel value to suit your preferences for readability and comfort.

### 4. Proxy
This setting allows you to specify a proxy URL, which acts as a **CORS proxy** for HTTP/HTTPS requests targeting API endpoints. This is useful for routing certain types of requests.

- **Usage**: Primarily used to bypass CORS limitations for API calls.
- **Authentication**: An API key can be optionally provided, but it is generally not required. Most pre-configured APIs do not need authentication.

### 5. Prompt
The "Prompt" field allows you to customize the static text that appears as the terminal prompt. This prompt text remains constant throughout your session.

- **Customization**: Unlike traditional terminal prompts, this field is static as the app runs in a browser. It doesn't support dynamic placeholders such as current directory or username.

### 6. Color
The "Color" option controls the color of the output text displayed in the terminal.

- **Usage**: Choose from **8 terminal-supported colors** to customize the visual appearance of output messages. This helps differentiate outputs and makes it easier to scan for important information.

### 7. Open Editor
The "Open Editor" button launches a web-based code editor where you can view and modify the terminal's configuration.

- **Capabilities**: The editor allows you to adjust settings, write JavaScript functions, or customize the behavior of the terminal session.
- **Scripting Support**: The terminal supports custom scripts and common functions, which you can explore in [this GitHub repository](https://github.com/yuxiaoli/scripts/tree/main/src/js/terminal). Additionally, two major modules are available for scripting:
  - **[Fuse.js](https://www.fusejs.io/)**: For fuzzy searching.
  - **[Cheerio](https://cheerio.js.org/docs/intro)**: For DOM manipulation.

### 8. Copy URL
Clicking the "Copy URL" button takes a snapshot of the current configuration settings and converts them into a shareable URL.

- **Purpose**: This is useful for saving or sharing your customized terminal configuration.
- **No Authentication Required**: The generated URL can be shared without any authentication requirements.

### 9. Back
Clicking the "Back" button closes the settings menu and returns you to the terminal interface.

- **Saving Changes**: All changes made are saved dynamically, so no manual saving or reloading of the terminal is required.
- **Effect of Changes**: Most settings take effect immediately without needing to refresh the page.

---

Feel free to experiment with these settings to personalize your terminal experience. If you have any further questions, please refer to the FAQ section or contact support for more help.

