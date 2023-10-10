function openTab(tabName) {
    // Hide all tab contents
    const tabContents = document.getElementsByClassName("tab-content");
    for (const content of tabContents) {
        content.style.display = "none";
    }

    
    const tabButtons = document.getElementsByClassName("tab-button");
    for (const button of tabButtons) {
        button.classList.remove("active");
    }

    // Show the clicked tab content and mark the button as active
    document.getElementById(tabName).style.display = "block";
    document.querySelector(`[data-tab="${tabName}"]`).classList.add("active");

    // Fetch and load data from Jikan API based on the tab
    if (tabName === "tab1") {
        fetchDataForTab1();
    } else if (tabName === "tab2") {
        fetchDataForTab2();
    } else if (tabName === "tab3") {
        fetchDataForTab3();
    }
}

function fetchDataForTab1() {
    const apiUrl = 'https://api.jikan.moe/v4/anime/33/full';

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Handle and display overview data here
        let anime = data.data
        const overviewContent = document.getElementById("tab1");
        overviewContent.innerHTML = `
          <h2>Overview</h2>
          <p>Title: ${anime.title}</p>
          <p>Score: ${anime.score}</p>
          <p>Episodes: ${anime.episodes}</p>
          <p>Synopsis: ${anime.synopsis}</p>
        `;
      })
      .catch(error => {
        // Handle errors here
        console.error('API fetch error:', error);
      });
}

function fetchDataForTab2() {
    const charactersUrl =  'https://api.jikan.moe/v4/anime/33/characters'

    fetch(charactersUrl)
    .then((res) => res.json())
    .then((res) => {
        const charactersContent = document.getElementById("tab2");

        charactersContent.innerHTML = ""

        res.data.forEach((char)=>{
            // characters.push({name: char.character.name, url: char.character.images.jpg.image_url})
            let url = char.character.images.jpg.image_url
            let name =  char.character.name

            let characterHTML = `
                <div class="character">
                    <img src="${url}" alt="${name}" />
                    <h2>${name}</h2>
                </div>
            `

            charactersContent.insertAdjacentHTML('beforeend', characterHTML)
        })
    })
}

function fetchDataForTab3() {
    const episodesUrl = 'https://api.jikan.moe/v4/anime/33/episodes'
    fetch(episodesUrl)
    .then((res) => res.json())
    .then((res) => {
        const episodeContent = document.getElementById('tab3');
        
        episodeContent.innerHTML = ""


        res.data.forEach((ep, i) =>{
            let score = ep.score
            let title = ep.title

            let episodeHTML =`
                <p>${i + 1}. ${title} (${score})</p>
            `

            episodeContent.insertAdjacentHTML('beforeend', episodeHTML)
        })
     })
}

// Open the default tab (e.g., Overview)
openTab("tab1");
