const comment = document.createElement("ul");

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
        comment.textContent = data.name;
        document.body.appendChild(comment);
      }
    })
    .catch((error) => {
      console.error("erreur", error);
    });
};

com();
