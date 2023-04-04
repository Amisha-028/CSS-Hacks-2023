const apiKey = "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";
// const prompt = "Convert this code to python 'cout<<lol<<endl;'";

function handleFetching(prompt) {
  fetch("https://api.openai.com/v1/engines/text-davinci-002/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      prompt,
      max_tokens: 5,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

handleFetching("Convert this code to python 'cout<<lol<<endl;'");
