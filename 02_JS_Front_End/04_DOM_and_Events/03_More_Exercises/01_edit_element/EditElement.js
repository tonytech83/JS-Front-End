function editElement(element, match, replacer) {
    const textContent = element.textContent.trim();
    let newTextContent = textContent.split(match).join(replacer);

    element.textContent = newTextContent;

}