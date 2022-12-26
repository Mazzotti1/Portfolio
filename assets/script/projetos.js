// Make Cards
const sectionCards = document.querySelector("section.cards");
const card = document.querySelector("div.card");


const gifs = [
  {
    title: "Jogo da memoria com Html, JS puro e CSS Animation <br><br>",
    thumb: "./assets/icons/jogo da memoria.gif",
    gif_id: "1",
    git:"https://github.com/Mazzotti1/Jogo-da-memoria",
    link:"https://jogo-da-memoria-liard.vercel.app/",

  },
  {
    title: "Jogo da velha com HTML, Css e JS <br><br><br>",
    thumb: "./assets/icons/jogo da velha.gif",
    gif_id: "2",
    git:"https://github.com/Mazzotti1/JogoDaVelha",
    link:"https://jogo-da-velha-plum-phi.vercel.app/"
  },
  {
    title: "Página de Registro/login com banco de dados",
    thumb: "./assets/icons/login.gif",
    gif_id: "3",
    link:"https://github.com/Mazzotti1/API-REST-Login",
    git:"https://github.com/Mazzotti1/API-REST-Login"
  },
  {
    title: "Projeto em desenvolvimento, procurando evoluir sempre!",
    thumb: "./assets/icons/build.png",
    gif_id: "3",
    link:"#home",
    git:"#home"
  }

];


gifs.map(gif => {
  const cardClone = card.cloneNode(true);
  cardClone.setAttribute("id", gif.gif_id);
  cardClone.querySelector("img").src = gif.thumb;
  cardClone.querySelector(".title").innerHTML = gif.title;
  cardClone.querySelector(".linkGit").href = gif.git;
  cardClone.querySelector(".linkCard").href = gif.link;
  sectionCards.appendChild(cardClone);

});


card.remove();



