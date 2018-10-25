let fruit = ["apple", "orange", "kiwi"];
console.log(fruit[1]);

fruit.push("mango");
console.log(fruit);

let paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);

let pText = paragraphs[0].innerHTML;
console.log(pText);

let words = pText.split(" ")
console.log(words);

for (let i = 0; i < words.length; i++){
  console.log(words[i]);

  if(words[i] == "a")
  {
    console.log("found it");
    words[i] = "HAHA";
  }

  let createdP = document.createElement('p');
  createdP.textContent = words[i];
  document.body.appendChild(createdP);
}
