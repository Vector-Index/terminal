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

        // Update prompt and intro
        promptRef.value = config.value.prompt
        if (config.value.intro) {
            window.utils.writeLines(config.value.intro)
        }
        
        return `Fetched config from ${url}`
    } catch (error) {
        return `Error: ${error}`
    }
}
fetchConfig()