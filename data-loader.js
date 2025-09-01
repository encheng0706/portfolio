const projectCardLocalList = [
    {
        title: "Homebase Redesign Case Study",
        image: "images/TeamAvailabilityShiftViewFinal.png",
        alt:"Redesigned Example Interface",
        description:"A case study and redesign for scheduling software, incorporating user research and feedback",
        link:"https://encheng0706.github.io/cogs127caseStudy/"
    },
    {
        title: "FRN Website",
        image: "images/FoodRecoveryNetworkBag.png",
        alt:"FRN Graphic",
        description:"A website redesign project for UCSD's Food Recovery Network",
        link:"https://apn0017.wixstudio.com/1543"
    }
];

localStorage.setItem("projects", JSON.stringify(projectCardLocalList));

function loadLocalData() {
    const data = localStorage.getItem("projects");
    if (data) {
        displayCards(JSON.parse(data));
    } else {
        console.log("Local data not found")
    }
}

function displayCards(projects) {
    const container = document.getElementById("project-cards-here");

    container.innerHTML = "";

    projects.forEach(proj => {
        const card = document.createElement("project-card");
        card.setAttribute("title", proj.title);
        card.setAttribute("image", proj.image);
        card.setAttribute("alt", proj.alt);
        card.setAttribute("description", proj.description);
        card.setAttribute("link", proj.link);
        container.appendChild(card);        
    });
}

document.addEventListener("DOMContentLoaded", () => {
    loadLocalData();
})