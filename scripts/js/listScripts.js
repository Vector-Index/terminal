// List scripts from remote
async function listScripts(extensions) {
    if (!extensions) {
        // extensions = ["js", "py"]
        extensions = ["js"]
    }
    const scripts = []
    for (const extension of extensions) {
        const url = `https://api.github.com/repos/Vector-Index/terminal/contents/scripts/${extension}`
        const responseText = await window.utils.api.get(url)
        // console.log(responseText)
        try {
            const contents = JSON.parse(responseText)
            for (const content of contents) {
                if (content.type === "file" && content.name.endsWith(`.${extension}`)) {
                    scripts.push(content.name)
                }
            }
        } catch (error) {
            return `Error: ${error}`
        }
    }
    return scripts.join("\n")
}
listScripts(kwargs)