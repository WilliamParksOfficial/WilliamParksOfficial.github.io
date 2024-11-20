document.addEventListener("DOMContentLoaded", async () => {
  replaceTagWithFile("CNav","/globals/html/nav.html")

});

/**
 * Replaces all instances of a given tag with the contents of a specified file.
 * @param {string} tagName - The name of the custom tag to replace (e.g., "customNav").
 * @param {string} filePath - The path to the file whose content will replace the tag.
 */
function replaceTagWithFile(tagName, filePath) {
  // Find all matching elements
  const customElements = document.querySelectorAll(tagName);

  // Only fetch if there are matching tags
  if (customElements.length > 0) {
    fetch(filePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load file: ${response.statusText}`);
        }
        return response.text();
      })
      .then((fileContent) => {
        // Replace each tag with the fetched content
        customElements.forEach((element) => {
          element.innerHTML = fileContent;
          element.classList.forEach(className => {
            const modFileContent=fileContent;
            switch (className) {
              case "home":
                element.querySelector('#home').classList.add('current-page');
              break;
              
              case "roles":
                element.querySelector('#roles').classList.add('current-page');
              break;

              case "teams":
                element.querySelector('#teams').classList.add('current-page');
              break;

              case "dark":
                element.querySelector('.nav-logo').src="/images/acps/ACPSLogoTransparentDark.png"
              break;
            
              default:
              console.log(className," non-custom class name in custom element");
              break;
            }
            

          });
        });
      })
      .catch((error) => {
        console.error(`Error fetching file for ${tagName}: ${error}`);
      });
  }
}