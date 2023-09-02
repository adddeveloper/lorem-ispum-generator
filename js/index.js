const loremIpsum = "Lorem ipsum dolor sit amet.";

document.getElementById("generate").addEventListener("click", generateLoremIpsum);

function generateLoremIpsum() {
    const numParagraphs = parseInt(document.getElementById("paragraphs").value);
    const outputElement = document.getElementById("output");
    
    const words = loremIpsum.split(' ');
    let loremText = "";

    for (let i = 0; i < numParagraphs; i++) {
        let paragraph = "";
        for (let j = 0; j < words.length; j++) {
            const randomIndex = Math.floor(Math.random() * words.length);
            paragraph += words[randomIndex] + ' ';
        }
        loremText += "<p>" + paragraph + "</p>";
    }

    outputElement.innerHTML = loremIpsum+loremText;
}
