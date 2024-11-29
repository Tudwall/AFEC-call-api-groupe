const userContainer = document.createElement("div");
const main = document.querySelector("main");
const nextBtn = document.getElementById("user-next-page");
main.appendChild(userContainer);

let indexUser = 1;
let indexComment = 1;
let indexPost = 1;

const displayNextUsers = (arr, min, max) => {
	userContainer.innerHTML = "";
	let array = arr.slice(min, max);
	array.forEach((element) => {
		const name = document.createElement("p");
		name.textContent = element.name;
		userContainer.appendChild(name);
	});
};

/* const change = (index, max) => {
	index = index < max ? index : index - 1;
	index = index > 1 ? index : index + 1;
};
 */

/* const fetch = (url) => {
	fetch(`${url}`).then((response) => {
		if (!response.ok) {
			throw new Error("could not fetch");
		}
		return response.json();
	});
}; */

const fetchUsers = () => {
	fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
		if (!response.ok) {
			throw new Error("failed to get infos");
		}
		return response.json();
	});
};

async function loadData() {
	try {
		await Promise.allSettled(fetchUsers());
	} catch (error) {
		console.error("Une erreur inattendue s'est produite :", error.message);
	}
}

fetchUsers(0, 5);

nextBtn.addEventListener("click", console.log(fetchUsers()));
