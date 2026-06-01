


// const projects = [
//   {
//     id: 1,
//     title: "E-Commerce Website",
//     category: "Frontend",
//   },
//   {
//     id: 2,
//     title: "Crypto Dashboard",
//     category: "Web3",
//   },
//   {
//     id: 3,
//     title: "Task Manager",
//     category: "Frontend",
//   },
//   {
//     id: 4,
//     title: "NFT Marketplace",
//     category: "Web3",
//   },
//   {
//     id: 5,
//     title: "Student Safety System",
//     category: "Fullstack",
//   },
// ];

// // const filteredprojects = projects.filter(project => project.title.includes(input.value));
// // console.log(filteredprojects); 

// // funtion to display projects
// const projectContainer = document.querySelector('.projectcontainer');
// const displayprojects = (projectToShow) =>{
//     projectContainer.innerHTML = "";

//     projectToShow.forEach((project) =>{
//         const projectCard = document.createElement("div");

//         projectCard.innerHTML = `
//         <h3>${project.title}</h3>
//         <p>${project.category}</p>
//         `;

//         // to add this card to the project container i create in my html file
//         projectContainer.appendChild(projectCard);


//     })
// }
// const form = document.getElementById('form');
// const input = document.getElementById('desktop-search');
// form.addEventListener("input", (e)=>{
//     e.preventDefault();
//     console.log("Stored");
//     console.log(form);
// console.log(input);
// console.log(projectContainer);
    
//     const searchTerm = e.target.value.toLowerCase();
//     const filteredProjects = projects.filter(project => project.title.toLowerCase().includes(searchTerm));
//     displayprojects(filteredProjects)
//    console.log("project filtere")
// })
// displayprojects(projects) 
 


const input = document.getElementById('desktop-search');
const suggestionsContainer = document.getElementById('suggestions');
const projects = [
  { id: 1, title: "E-Commerce Website" , link: "https://umbathreads.dream.space/home"},
  { id: 2, title: "Landing Page" , link: "https://fidelis-martha.github.io/Aurascalesolution/#Home"},
  { id: 3, title: "Task Manager" , link: "https://fidelis-martha.github.io/To-Do-List-App/" },
  { id: 4, title: "NFT Marketplace" , link: "https://umbathreads.dream.space/home" },
  { id: 5, title: "Student Safety System" },
];

input.addEventListener('input', (e)=>{
    const term = e.target.value.toLowerCase();
    if(term === "" ){
        suggestionsContainer.innerHTML = "";
        return;
    }

    // if (term !== projects.title) {
    //     suggestionsContainer.innerHTML = "no result found";
        
    // }
 
    const filtered = projects.filter(project=> project.title.toLowerCase().includes(term));
    console.log("filter",filtered);
    renderSuggestions(filtered);
})

const renderSuggestions = (list) =>{
    suggestionsContainer.innerHTML = "";
    list.forEach((project)=>{
    const item = document.createElement("div");
    item.style.cursor = "pointer";
    item.classList.add("p-2", "hover:bg-gray-200", "w-full", "bg-purple-100", "mt-0", "rounded");

    
    
  item.innerHTML = `
        <h3>${project.title}</h3>
        
     `;


    // item.textContent = project.title;
    suggestionsContainer.appendChild(item);

    item.addEventListener("click", ()=>{
        window.location.href = project.link;
    }) 
    suggestionsContainer.appendChild(item);
    })
}