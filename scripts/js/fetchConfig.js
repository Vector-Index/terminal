// Fetch remote config
async function fetchConfig() {
    const url = `https://raw.githubusercontent.com/Vector-Index/terminal/refs/heads/main/configs/starter.json`
    const responseText = await window.utils.api.get(url)
    console.log(responseText)
    // Replace/reload the current config
    try {
        config.value = JSON.parse(responseText).config
        data = config.value.data
        scripts = config.value.scripts
        aliases = data.aliases
        
        // Update prompt and intro
        if (data.prompt) {
            promptRef.value = data.prompt
        }
        if (data.intro) {
            window.utils.writeLines(data.intro)
        }
        
        return `Fetched config from ${url}`
    } catch (error) {
        return `Error: ${error}`
    }
}
fetchConfig()