const userContainer = document.createElement("div");
const main = document.querySelector("main");
const nextBtn = document.getElementById("user-next-page");
main.appendChild(userContainer);

const fetchUsers = () => {
	fetch("https://jsonplaceholder.typicode.com/users")
		.then((response) => {
			if (!response.ok) {
				throw new Error("failed to get infos");
			}
			return response.json();
		})
		.then((data) => {
			console.log(data);
			/* for (let i = 0; i < 5; i++) {
				const name = document.createElement("p");
				name.textContent = data[i].name;
				userContainer.appendChild(name);
				console.log(data.name);
			} */
			const arr = [];
		})
		.catch((error) => {
			console.error("Erreur: ", error);
		});
};

fetchUsers();

function displayNextUsers() {
	const data = fetchUsers();
	for (let i = 4; i < 10; i++) {
		const name = document.createElement("p");
		name.textContent = data[i].name;
		userContainer.removeChild();
		userContainer.appendChild(name);
		console.log(data.name);
	}
}

nextBtn.addEventListener("click", displayNextUsers);
