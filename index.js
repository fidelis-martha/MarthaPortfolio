
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
    const term = e.target.value.trim();
    if(term === "" ){
        suggestionsContainer.innerHTML = "";
        return;
    }
 
    const filtered = projects.filter(project=> project.title.toLowerCase().includes(term));

    if(filtered.length === 0){
        suggestionsContainer.innerHTML = "<p class='p-2'>No results found</p>";
        return;
    }
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
    suggestionsContainer.appendChild(item);

    item.addEventListener("click", ()=>{
        window.location.href = project.link;
    }) 
    suggestionsContainer.appendChild(item);
    })
} 