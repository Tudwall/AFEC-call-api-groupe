const commentcontainer = document.querySelector("ul");

const com = () => {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => {
      if (!response.ok) {
        throw new Error("erreur réseau");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);

      for (let i = 0; i < 20; i++) {
        const comment = document.createElement("li");
        comment.textContent = data[i].name;
        commentcontainer.appendChild(comment);
      }
    })
    .catch((error) => {
      console.error("erreur", error);
    });
};

com();
