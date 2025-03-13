const projectCardLocalList = [
    {
        title: "FRN Website",
        image: "images/FoodRecoveryNetworkBag.png",
        alt:"FRN Graphic",
        description:"A website redesign project for UCSD's Food Recovery Network",
        link:"https://apn0017.wixstudio.com/1543",
    },
    {
        title: "FRN Website",
        image: "images/FoodRecoveryNetworkBag.png",
        alt:"FRN Graphic",
        description:"A website redesign project for UCSD's Food Recovery Network",
        link:"https://apn0017.wixstudio.com/1543",
    },    
    {
        title: "FRN Website",
        image: "images/FoodRecoveryNetworkBag.png",
        alt:"FRN Graphic",
        description:"A website redesign project for UCSD's Food Recovery Network",
        link:"https://apn0017.wixstudio.com/1543",
    },
    {
        title: "FRN Website",
        image: "images/FoodRecoveryNetworkBag.png",
        alt:"FRN Graphic",
        description:"A website redesign project for UCSD's Food Recovery Network",
        link:"https://apn0017.wixstudio.com/1543",
    },
    {
        title: "FRN Website",
        image: "images/FoodRecoveryNetworkBag.png",
        alt:"FRN Graphic",
        description:"A website redesign project for UCSD's Food Recovery Network",
        link:"https://apn0017.wixstudio.com/1543",
    },
    {
        title: "FRN Website",
        image: "images/FoodRecoveryNetworkBag.png",
        alt:"FRN Graphic",
        description:"A website redesign project for UCSD's Food Recovery Network",
        link:"https://apn0017.wixstudio.com/1543",
    }
];

if (!localStorage.getItem("projects")) {
    localStorage.getItem("projects", JSON.stringify(projectCardLocalList));
}

function loadLocalData() {
    const data = localStorage.getItem("projects");
    if (data) {
        displayCards(JSON.parse(data));
    } else {
        console.log("Local data not found")
    }
}

async function loadRemoteData() {
    try {
        const response = await fetch("https://my-json-server.typicode.com/encheng0706/cse134-hw5-my-json-server/projectCardRemoteList");
        const data = await response.json();
        displayCards(data);
    } catch (error) {
        console.error("Error fetching remote data:", error);
    }
}

function displayCards(projects) {
    const container = document.getElementById("card-container");

    container.innerHTML = "";

    projects.array.forEach(proj => {
        const card = document.createElement("project-card");
        card.setAttribute("title", proj.title);
        card.setAttribute("image", proj.image);
        card.setAttribute("alt", proj.alt);
        card.setAttribute("description", proj.description);
        card.setAttribute("link", proj.link);
        container.appendChild(card);        
    });
}

document.getElementById("load-local").addEventListener("click", loadLocalData);
document.getElementById("load-remote").addEventListener("click", loadRemoteData);