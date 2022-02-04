function fetchData() {
    fetch("https://reqres.in/api/users?page=2")
    .then ((response) => {
        if(!response.ok) {
            throw new Error("Error");
        } 
        return response.json();
    })
    .then((data) => {
        const html = data.data
            .map((user) => {
            /* return `"<p>Zovem se ${user.first_name}</p>`; */
            return `
            <div class="user">
            <p> <img src = "${user.avatar}" alt="${user.first_name}"></p>
            <p> Zovem se ${user.first_name}</p>
            <p>Moj mail je ${user.first_email}</p>
            </div>`;
    })
    .join("");
    document.querySelector("#api").innerHTML = html;
})
.catch((error) => {
    console.log(error);
});
}

fetchData();