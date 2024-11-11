const url = kwargs.url
window.utils.api.get(url)
    .then((htmlString) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, 'text/html');
        // Access elements as needed
        const images = doc.querySelectorAll('img'); // Selects all <img> elements
        // images.forEach(img => {
        //     // console.log(img.src); // Log or process each image source
        //     window.utils.write(img.src); // Log or process each image source
        // });
        const imgStrings = Array.from(images).map(img => img.outerHTML);
        // console.log(imgStrings)
        const html = imgStrings.join("\n")
        // window.utils.writeLines(html)
        return window.utils.buildUrl(html)
            .then((url) => {
                // window.utils.write(url)
                return url
            })
    })