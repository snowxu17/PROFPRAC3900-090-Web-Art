(function () {

  alert("Hello, this is your nightmare calling.");

  let paragraphs = document.getElementsByTagName('p');
  for (let i = 0; i < paragraphs.length; i++)
  {
    // paragraphs[i].innerHTML = "food";
    let pText = paragraphs[i].innerHTML;
    // console.log(pText);

    let words = pText.split(" ");
    // console.log(words);
    let newPara = "";
    for (let j = 0; j < words.length; j++)
    {
      console.log(words[j]);

      if(words[j] == "An")
      {
        console.log("found it");
        words[j] = "HAHAHAHAHHHHHHHHHH";
      }

      newPara = newPara + " " + words[j];
    }

    console.log(newPara);

    // paragraphs[i].innerHtml = newPara;
    paragraphs[i].textContent = newPara;
  }

  let hs = document.getElementsByTagName('h1');
  for (let i = 0; i < hs.length; i++)
  {
    hs[i].innerHTML = "SCREAM";
    hs[i].setAttribute("style", "color:red");
  }

  let h2s = document.getElementsByTagName('h2');
  for (let i = 0; i < h2s.length; i++)
  {
    h2s[i].innerHTML = "Scream more";
    h2s[i].setAttribute("style", "color:yellow");
  }

  let h3s = document.getElementsByTagName('h3');
  for (let i = 0; i < h3s.length; i++)
  {
    h3s[i].innerHTML = "Keep screaming";
    h3s[i].setAttribute("style", "color:yellow");
  }

  let h4s = document.getElementsByTagName('h4');
  for (let i = 0; i < h4s.length; i++)
  {
    h4s[i].innerHTML = "More screamig";
  }

  let divs = document.getElementsByTagName('div');
  for (let i = 0; i < divs.length; i++)
  {
    divs[i].style.backgroundImage = "url('https://media.giphy.com/media/x48svp0jT2FMX1iRvu/giphy.gif')";
  }

  let elts = document.getElementsByTagName('a');
  for (let i = 0; i < elts.length; i++)
  {
    elts[i].setAttribute("style", "background:url('nothingness')");
  }

  let buts = document.getElementsByTagName('institution-links');
  for (let i = 0; i < buts.length; i++)
  {
    // buts[i].title = "Bye";
  }

  let images = document.getElementsByTagName('img');
  for (let i = 0; i < images.length; i++)
  {
    images[i].src = 'https://media.giphy.com/media/8maSJL7Xu9ybIvGP0p/giphy.gif';
  }

  document.body.style.backgroundImage = "url('https://media.giphy.com/media/x48svp0jT2FMX1iRvu/giphy.gif')"
  document.body.style.backgroundRepeat = "repeat";
})();

// javascript:(function (){let s = document.createElement('script');s.src="http://127.0.0.1:3000/07_bookmarklets/bookmarklet.js";document.body.appendChild(s);})();



// (function (){
//   let s = document.createElement('script');
//   s.src="http://127.0.0.1:3000/07_bookmarklets/bookmarklet.js";
//   document.body.appendChild(s);
// })();
