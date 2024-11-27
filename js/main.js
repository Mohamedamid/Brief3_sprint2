var positionSelect = document.getElementById('position');
var goalkeeperFields = document.querySelectorAll('.gardiyan');
var playerFields = document.querySelectorAll('.joueur');

positionSelect.addEventListener('click', function () {
    if (positionSelect.value === 'GK') {
        goalkeeperFields.forEach(field => field.style.display = 'flex');
        playerFields.forEach(field => field.style.display = 'none');
    } else {
        goalkeeperFields.forEach(field => field.style.display = 'none');
        playerFields.forEach(field => field.style.display = 'flex');
    }
});

document.getElementById("playerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const playerData = {
        name: document.getElementById("name").value,
        photo: document.getElementById("photo").value,
        position: document.getElementById("position").value,
        nationality: document.getElementById("Nationality").value,
        flag: document.getElementById("flag").value,
        club: document.getElementById("club").value,
        logo: document.getElementById("logo").value,
        rating: document.getElementById("rating").value,
        pace: document.getElementById("pace").value,
        shooting: document.getElementById("shooting").value,
        passing: document.getElementById("passing").value,
        dribbling: document.getElementById("dribbling").value,
        defending: document.getElementById("defending").value,
        physical: document.getElementById("physical").value,

        diving: document.getElementById("pace").value,
        handling: document.getElementById("shooting").value,
        kicking: document.getElementById("passing").value,
        reflexes: document.getElementById("dribbling").value,
        speed: document.getElementById("defending").value,
        positioning: document.getElementById("physical").value,
    };

    displayPlayerData(playerData);

    document.getElementById("playerForm").reset();
});

const maxPlayers = {
    'Attaque': 3,
    'milieu': 3,
    'Defense': 4,
    'garde': 1
};

let playerCounts = {
    'Attaque': 0,
    'milieu': 0,
    'Defense': 0,
    'garde': 0
};

function displayPlayerData(playerData) {
    const position = playerData.position;
    let positionClass = '';
    let backgroundImage = '';
    
    switch (position) {
        case 'RW':
        case 'LW':
        case 'CF':
            positionClass = 'Attaque';
            backgroundImage = 'url("./images/badge_ballon_dor.webp")';
            break;
        case 'CM':
        case 'CDM':
            positionClass = 'milieu';
            backgroundImage = 'url("./images/badge_gold.webp")';
            break;
        case 'CB':
            positionClass = 'Defense';
            backgroundImage = 'url("./images/gold87.png")';
            break;
        case 'GK':
            positionClass = 'garde';
            backgroundImage = 'url("./images/badge_total_rush.webp")';
            break;
        default:
            alert('Position non valide');
            return;
    }

    if (playerCounts[positionClass] >= maxPlayers[positionClass]) {
        addPlayerToReserve(playerData);
        return;
    }

    const positionDiv = document.querySelector(`.${positionClass}`);

    const playerElement = document.createElement("div");
    playerElement.classList.add("player-item");
    playerElement.setAttribute("onclick", "modifier(event)");

    playerElement.style.backgroundImage = backgroundImage;
    playerElement.style.backgroundSize = 'cover';
    playerElement.style.backgroundPosition = 'center';
    playerElement.style.backgroundRepeat = 'no-repeat';

    if (positionSelect.value === 'GK') {
        playerElement.innerHTML = `
        <div class="info">
        <img class="photo_joueur" src="${playerData.photo}" alt="" width="50" height="50">
        <strong>${playerData.name}</strong>
        <div class="information_joueur">
        <p>DIV<span> ${playerData.diving}</span></p>
        <p>HAN<span> ${playerData.handling}</span></p>
        <p>KIC<span> ${playerData.kicking}</span></p>
        <p>REF<span> ${playerData.reflexes}</span></p>
        <p>SPE<span> ${playerData.speed}</span></p>
        <p>POS<span> ${playerData.positioning}</span></p>
        </div>
        <strong class="position_joueur">${playerData.position}</strong>
        </div>
        <div class="action">
        <i class="fa-solid fa-trash" onclick="deleteT(event)"></i>
        <i class="fa-solid fa-pen-to-square" onclick="edit_GK(event)"></i>
        </div>
    `;
    } else {
        playerElement.innerHTML = `
        <div class="info">
        <img class="photo_joueur" src="${playerData.photo}" alt="" width="50" height="50">
        <strong>${playerData.name}</strong>
        <div class="information_joueur">
        <p>PAC<span> ${playerData.pace}</span></p>
        <p>SHO<span> ${playerData.shooting}</span></p>
        <p>PAS<span> ${playerData.passing}</span></p>
        <p>DRI<span> ${playerData.dribbling}</span></p>
        <p>DEF<span> ${playerData.defending}</span></p>
        <p>PHY<span> ${playerData.physical}</span></p>
        </div>
        <strong class="position_joueur">${playerData.position}</strong>
        </div>
        <div class="action">
        <i class="fa-solid fa-trash" onclick="deleteT(event)"></i>
        <i class="fa-solid fa-pen-to-square" onclick="edit_joueur(event)"></i>
        </div>
    `;
    }

    positionDiv.appendChild(playerElement);

    playerCounts[positionClass]++;
}

function addPlayerToReserve(playerData) {
    const position = playerData.position;
    let backgroundImage = '';

    switch (position) {
        case 'RW':
        case 'LW':
        case 'CF':
            positionClass = 'Attaque';
            backgroundImage = 'url("./images/badge_ballon_dor.webp")';
            break;
        case 'CM':
        case 'CDM':
            positionClass = 'milieu';
            backgroundImage = 'url("./images/badge_gold.webp")';
            break;
        case 'CB':
            positionClass = 'Defense';
            backgroundImage = 'url("./images/gold87.png")';
            break;
        case 'GK':
            positionClass = 'garde';
            backgroundImage = 'url("./images/badge_total_rush.webp")';
            break;
        default:
            alert('Position non valide');
            return;
    }
    const reserveDiv = document.querySelector(".Joueurs_de_reserve");

    const playerElement = document.createElement("div");
    playerElement.classList.add("player-item");
    playerElement.setAttribute("onclick", "modifier(event)");

    playerElement.style.backgroundImage = backgroundImage;
    playerElement.style.backgroundSize = 'cover';
    playerElement.style.backgroundPosition = 'center';
    playerElement.style.backgroundRepeat = 'no-repeat';

    if (positionSelect.value === 'GK') {
            playerElement.innerHTML = `
            <div class="info">
            <img class="photo_joueur" src="${playerData.photo}" alt="" width="50" height="50">
            <strong>${playerData.name}</strong>
            <div class="information_joueur">
            <p>DIV<span> ${playerData.diving}</span></p>
            <p>HAN<span> ${playerData.handling}</span></p>
            <p>KIC<span> ${playerData.kicking}</span></p>
            <p>REF<span> ${playerData.reflexes}</span></p>
            <p>SPE<span> ${playerData.speed}</span></p>
            <p>POS<span> ${playerData.positioning}</span></p>
            </div>
            <strong class="position_joueur">${playerData.position}</strong>
            </div>
            <div class="action">
            <i class="fa-solid fa-trash" onclick="delete_joueur_reserve(event)"></i>
            <i class="fa-solid fa-pen-to-square" onclick="edit_GK(event)"></i>
            </div>
        `;
        } else {
            playerElement.innerHTML = `
            <div class="info">
            <img class="photo_joueur" src="${playerData.photo}" alt="" width="50" height="50">
            <strong>${playerData.name}</strong>
            <div class="information_joueur">
            <p>PAC<span> ${playerData.pace}</span></p>
            <p>SHO<span> ${playerData.shooting}</span></p>
            <p>PAS<span> ${playerData.passing}</span></p>
            <p>DRI<span> ${playerData.dribbling}</span></p>
            <p>DEF<span> ${playerData.defending}</span></p>
            <p>PHY<span> ${playerData.physical}</span></p>
            </div>
            <strong class="position_joueur">${playerData.position}</strong>
            </div>
            <div class="action">
            <i class="fa-solid fa-trash" onclick="delete_joueur_reserve(event)"></i>
            <i class="fa-solid fa-pen-to-square" onclick="edit_joueur(event)"></i>
            </div>`
            ;
        }
    reserveDiv.appendChild(playerElement);
}

function deleteT(event) {
    let playerElement = event.currentTarget.closest(".player-item");

    const position = playerElement.querySelector(".position_joueur").textContent;
    
    if (position) {
        if (position === 'CF') {
            alert(`You can add another player in the ${position} position.`);
            playerCounts['Attaque']--; 
        } else if (position === 'CM') {
            alert(`You can add another player in the ${position} position.`);
            playerCounts['milieu']--;
        } else if (position === 'CB') {
            alert(`You can add another player in the ${position} position.`);
            playerCounts['Defense']--;
        } else if (position === 'GK') {
            alert(`You can add another player in the ${position} position.`);
            playerCounts['garde']--;
        }
    }
    playerElement.remove();

}
function delete_joueur_reserve(event) {
    let playerElement = event.currentTarget.closest(".player-item");
    playerElement.remove();
}

function edit_GK(event) {
    alert('ggggggggggggg')

    currentRow = event.currentTarget.closest("tr");
    document.getElementById("name").value = currentRow.cells[0].textContent;
    document.getElementById("photo").value = currentRow.cells[1].textContent;
    document.getElementById("position").value = currentRow.cells[2].textContent;
    document.getElementById("Nationality").value = currentRow.cells[3].textContent;
    document.getElementById("flag").value = currentRow.cells[1].textContent;
    document.getElementById("club").value = currentRow.cells[2].textContent;
    document.getElementById("logo").value = currentRow.cells[3].textContent;
    document.getElementById("rating").value = currentRow.cells[1].textContent;
    document.getElementById("pace").value = currentRow.cells[2].textContent;
    document.getElementById("Tir").value = currentRow.cells[3].textContent;
    document.getElementById("passing").value = currentRow.cells[1].textContent;
    document.getElementById("dribbling").value = currentRow.cells[2].textContent;
    document.getElementById("defending").value = currentRow.cells[3].textContent;
    document.getElementById("physical").value = currentRow.cells[1].textContent;
    document.getElementById("diving").value = currentRow.cells[2].textContent;
    document.getElementById("handling").value = currentRow.cells[3].textContent;
    document.getElementById("kicking").value = currentRow.cells[3].textContent;
    document.getElementById("reflexes").value = currentRow.cells[1].textContent;
    document.getElementById("speed").value = currentRow.cells[2].textContent;
    document.getElementById("positioning").value = currentRow.cells[3].textContent;

    document.getElementById("club").style.display = "none";
    document.getElementById("editButton").style.display = "inline-block";
}

function save_GK() {
    currentRow.cells[0].textContent = document.getElementById("title").value;
    currentRow.cells[1].textContent = document.getElementById("description").value;
    currentRow.cells[2].textContent = document.getElementById("date").value;
    currentRow.cells[3].textContent = document.getElementById("options").value;
    document.getElementById("addtaskform").reset();
    document.getElementById("editButton").style.display = "none";
    document.getElementById("ajouter").style.display = "flex";
    currentRow = null;
}

function edit_joueur(event) {
    alert('hhhhhhhhhh')
    currentRow = event.currentTarget.closest("tr");
    document.getElementById("title").value = currentRow.cells[0].textContent;
    document.getElementById("description").value = currentRow.cells[1].textContent;
    document.getElementById("date").value = currentRow.cells[2].textContent;
    document.getElementById("options").value = currentRow.cells[3].textContent;
    document.getElementById("ajouter").style.display = "none";
    document.getElementById("editButton").style.display = "inline-block";
}

function save_joueur() {
    if (!currentRow) return;
    currentRow.cells[0].textContent = document.getElementById("title").value;
    currentRow.cells[1].textContent = document.getElementById("description").value;
    currentRow.cells[2].textContent = document.getElementById("date").value;
    currentRow.cells[3].textContent = document.getElementById("options").value;
    document.getElementById("addtaskform").reset();
    document.getElementById("editButton").style.display = "none";
    document.getElementById("ajouter").style.display = "flex";
    currentRow = null;
}