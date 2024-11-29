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

        diving: document.getElementById("diving").value,
        handling: document.getElementById("handling").value,
        kicking: document.getElementById("kicking").value,
        reflexes: document.getElementById("reflexes").value,
        speed: document.getElementById("speed").value,
        positioning: document.getElementById("positioning").value,
    };

    displayPlayerData(playerData);
    document.getElementById("playerForm").reset();

});

let playerCounts = {
    'RW':0,
    'LW':0,
    'CF':0,
    'CM': 0,
    'LB':0,
    'RB':0,
    'CB1':0,
    'CB2':0,
    'GK': 0
};
const maxPlayers = {
    'RW':1,
    'LW':1,
    'CF':1,
    'CM': 3,
    'LB':1,
    'RB':1,
    'CB1':1,
    'CB2':1,
    'GK': 1
};

function displayPlayerData(playerData) {
    const position = playerData.position;
    let positionClass = '';
    let backgroundImage = '';
    switch (position) {
        case 'RW':
            positionClass = 'RW';
            backgroundImage = 'url("./images/badge_ballon_dor.webp")';
            break;
        case 'LW':
            positionClass = 'LW';
            backgroundImage = 'url("./images/badge_ballon_dor.webp")';
            break;
        case 'CF':
            positionClass = 'CF';
            backgroundImage = 'url("./images/badge_ballon_dor.webp")';
            break;
        case 'CM':
            positionClass = 'CM';
            backgroundImage = 'url("./images/badge_gold.webp")';
            break;
        case 'CB1':
            positionClass = 'CB1';
            backgroundImage = 'url("./images/gold87.png")';
            break;
        case 'CB2':
            positionClass = 'CB2';
            backgroundImage = 'url("./images/gold87.png")';
            break;
        case 'LB':
            positionClass = 'LB';
            backgroundImage = 'url("./images/gold87.png")';
            break;
        case 'RB':
            positionClass = 'RB';
            backgroundImage = 'url("./images/gold87.png")';
            break;
        case 'GK':
            positionClass = 'GK';
            backgroundImage = 'url("./images/badge_total_rush.webp")';
            break;
        default:
            alert('Position non valide');
            return;
    }
    
    if (playerCounts[positionClass] >= maxPlayers[positionClass]){
        addPlayerToReserve(playerData);
        return;
    }

    const positionDiv = document.querySelector(`.${positionClass}`);

    let playerElement = document.createElement("div");
    playerElement.classList.add("player-item");

    playerElement.style.backgroundImage = backgroundImage;
    playerElement.style.backgroundSize = 'cover';
    playerElement.style.backgroundPosition = 'center';
    playerElement.style.backgroundRepeat = 'no-repeat';

    if (positionSelect.value === 'GK') {
        createGK(playerElement, playerData);
    } else {
        createplayer(playerElement, playerData);
    }
    positionDiv.appendChild(playerElement);
    playerCounts[positionClass]++;
}

function addPlayerToReserve(playerData) {
    const position = playerData.position;
    let backgroundImage = '';

    switch (position) {
        case 'RW':
            positionClass = 'RW';
            backgroundImage = 'url("./images/badge_ballon_dor.webp")';
            break;
        case 'LW':
            positionClass = 'LW';
            backgroundImage = 'url("./images/badge_ballon_dor.webp")';
            break;
        case 'CF':
            positionClass = 'CF';
            backgroundImage = 'url("./images/badge_ballon_dor.webp")';
            break;
        case 'CM':
            positionClass = 'CM';
            backgroundImage = 'url("./images/badge_gold.webp")';
            break;
        case 'CB1':
            positionClass = 'CB1';
            backgroundImage = 'url("./images/gold87.png")';
            break;
        case 'CB2':
            positionClass = 'CB2';
            backgroundImage = 'url("./images/gold87.png")';
            break;
            case 'LB':
            positionClass = 'LB';
            backgroundImage = 'url("./images/gold87.png")';
            break;
            case 'RB':
            positionClass = 'RB';
            backgroundImage = 'url("./images/gold87.png")';
            break;
        case 'GK':
            positionClass = 'GK';
            backgroundImage = 'url("./images/badge_total_rush.webp")';
            break;
        default:
            alert('Position non valide');
            return;
    }
    const reserveDiv = document.querySelector(".Joueurs_de_reserve");

    let playerElement = document.createElement("div");
    playerElement.classList.add("player-item");

    playerElement.style.backgroundImage = backgroundImage;
    playerElement.style.backgroundSize = 'cover';
    playerElement.style.backgroundPosition = 'center';
    playerElement.style.backgroundRepeat = 'no-repeat';

    if (positionSelect.value === 'GK') {
        createGK(playerElement,playerData)
    } else {
        createplayer(playerElement,playerData)
        }
    reserveDiv.appendChild(playerElement);
}

function deleteT(event) {
    let playerElement = event.currentTarget.closest(".player-item");
    const position = playerElement.querySelector(".position_joueur").textContent;
    
    if (position) {
        if (position === 'CF') {
            playerCounts['CF']--; 
        } else if (position === 'RW') {
            playerCounts['RW']--;
        } else if (position === 'LW') {
            playerCounts['LW']--;
        } else if (position === 'CM') {
            playerCounts['CM']--;
        } else if (position === 'LB') {
            playerCounts['LB']--;
        } else if (position === 'CB1') {
            playerCounts['CB1']--;
        } else if (position === 'CB2') {
            playerCounts['CB2']--;
        } else if (position === 'RB') {
            playerCounts['RB']--;
        } else if (position === 'GK') {
            playerCounts['GK']--;
        }
    }
    playerElement.remove();
}
function delete_joueur_reserve(event) {
    let playerElement = event.currentTarget.closest(".player-item");
    playerElement.remove();
}

function edit_GK(event) {

    const nameElements = document.getElementsByClassName("name");
    document.getElementById("name").value = nameElements[0].textContent;
    const photoElements = document.getElementsByClassName("photo_joueur");
    document.getElementById("photo").value = photoElements[0].src;
    // const positionElements = document.getElementById("position");
    // document.getElementById("position").value = positionElements[0].textContent;
    // const NationalityElements = document.getElementsByClassName("Nationality");
    // document.getElementById("Nationality").value = NationalityElements[0].textContent;
    // const flagElements = document.getElementsByClassName("flag");
    // document.getElementById("flag").value = flagElements[0].textContent;
    // const clubElements = document.getElementsByClassName("club");
    // document.getElementById("club").value = clubElements[0].textContent;
    // const logoElements = document.getElementsByClassName("logo");
    // document.getElementById("logo").value = logoElements[0].textContent;
    // const ratingElements = document.getElementsByClassName("rating");
    // document.getElementById("rating").value = ratingElements[0].textContent;
    // const paceElements = document.getElementsByClassName("pace");
    // document.getElementById("pace").value = paceElements[0].textContent;
    // const TirElements = document.getElementsByClassName("Tir");
    // document.getElementById("Tir").value = TirElements[0].textContent;
    // const passingElements = document.getElementsByClassName("passing");
    // document.getElementById("passing").value = passingElements[0].textContent;
    // const dribblingElements = document.getElementsByClassName("dribbling");
    // document.getElementById("dribbling").value = dribblingElements[0].textContent;
    // const defendingElements = document.getElementsByClassName("defending");
    // document.getElementById("defending").value = defendingElements[0].textContent;
    // const physicalElements = document.getElementsByClassName("physical");
    // document.getElementById("physical").value = physicalElements[0].textContent;
    const divingElements = document.getElementsByClassName("d");
    document.getElementById("diving").value = divingElements[0].textContent;
    const handlingElements = document.getElementsByClassName("handling");
    document.getElementById("handling").value = handlingElements[0].textContent;
    const kickingElements = document.getElementsByClassName("kicking");
    document.getElementById("kicking").value = kickingElements[0].textContent;
    const reflexesElements = document.getElementsByClassName("reflexes");
    document.getElementById("reflexes").value = reflexesElements[0].textContent;
    const speedElements = document.getElementsByClassName("speed");
    document.getElementById("speed").value = speedElements[0].textContent;
    const positioningElements = document.getElementsByClassName("positioning");
    document.getElementById("positioning").value = positioningElements[0].textContent;

    // document.getElementById("defending").value = .textContent;
    // document.getElementById("physical").value = .textContent;
    // document.getElementById("diving").value = .textContent;
    // document.getElementById("handling").value = .textContent;
    // document.getElementById("kicking").value = .textContent;
    // document.getElementById("reflexes").value = .textContent;
    // document.getElementById("speed").value = .textContent;
    // document.getElementById("positioning").value = .textContent;

    // document.getElementById("club").style.display = "none";
    // document.getElementById("editButton").style.display = "inline-block";
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

function createGK(playerElement, playerData) {
    const infoDiv = document.createElement("div");
    infoDiv.classList.add("info");

    const img = document.createElement("img");
    img.classList.add("photo_joueur");
    img.src = playerData.photo;
    img.alt = "";
    img.width = 50;
    img.height = 50;
    infoDiv.appendChild(img);

    const nameStrong = document.createElement("strong");
    nameStrong.textContent = playerData.name;
    nameStrong.classList.add("name");
    infoDiv.appendChild(nameStrong);

    const infoJoueurDiv = document.createElement("div");
    infoJoueurDiv.classList.add("information_joueur");

    const divingP = document.createElement("p");
    divingP.innerHTML = `DIV<span class="d"> ${playerData.diving}</span>`;
    divingP.classList.add("diving");
    infoJoueurDiv.appendChild(divingP);

    const handlingP = document.createElement("p");
    handlingP.innerHTML = `HAN<span> ${playerData.handling}</span>`;
    handlingP.classList.add("handling");

    infoJoueurDiv.appendChild(handlingP);

    const kickingP = document.createElement("p");
    kickingP.innerHTML = `KIC<span> ${playerData.kicking}</span>`;
    kickingP.classList.add("kicking");

    infoJoueurDiv.appendChild(kickingP);

    const reflexesP = document.createElement("p");
    reflexesP.innerHTML = `REF<span> ${playerData.reflexes}</span>`;
    reflexesP.classList.add("reflexesP")
    infoJoueurDiv.appendChild(reflexesP);

    const speedP = document.createElement("p");
    speedP.innerHTML = `SPE<span> ${playerData.speed}</span>`;
    infoJoueurDiv.appendChild(speedP);

    const positioningP = document.createElement("p");
    positioningP.innerHTML = `POS<span> ${playerData.positioning}</span>`;
    infoJoueurDiv.appendChild(positioningP);

    infoDiv.appendChild(infoJoueurDiv);

    const position = document.createElement("strong");
    position.classList.add("position_joueur");
    position.textContent = playerData.position;
    infoDiv.appendChild(position);

    const actionDiv = document.createElement("div");
    actionDiv.classList.add("action");

    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fa-solid", "fa-trash");
    let positionClass = document.getElementById('position').value

    if(playerCounts[playerData.position] >= maxPlayers[playerData.position]){
        trashIcon.onclick = function(event) {
            delete_joueur_reserve(event);
        };
        actionDiv.appendChild(trashIcon);
    }else{
        trashIcon.onclick = function(event) {
            deleteT(event);
        };
        actionDiv.appendChild(trashIcon);
    }

    const editIcon = document.createElement("i");
    editIcon.classList.add("fa-solid", "fa-pen-to-square");
    editIcon.onclick = function(event) {
        edit_GK(event);
    };
    actionDiv.appendChild(editIcon);
    
    playerElement.appendChild(infoDiv);
    playerElement.appendChild(actionDiv);
}

function createplayer(playerElement, playerData){
    const infoDiv = document.createElement("div");
    infoDiv.classList.add("info");

    const img = document.createElement("img");
    img.classList.add("photo_joueur");
    img.src = playerData.photo;
    img.alt = "";
    img.width = 50;
    img.height = 50;
    infoDiv.appendChild(img);

    const nameStrong = document.createElement("strong");
    nameStrong.textContent = playerData.name;
    infoDiv.appendChild(nameStrong);

    const infoJoueurDiv = document.createElement("div");
    infoJoueurDiv.classList.add("information_joueur");

    const paceP = document.createElement("p");
    paceP.innerHTML = `PAC<span> ${playerData.pace}</span>`;
    infoJoueurDiv.appendChild(paceP);

    const shootingP = document.createElement("p");
    shootingP.innerHTML = `SHO<span> ${playerData.shooting}</span>`;
    infoJoueurDiv.appendChild(shootingP);

    const passingP = document.createElement("p");
    passingP.innerHTML = `PAS<span> ${playerData.passing}</span>`;
    infoJoueurDiv.appendChild(passingP);

    const dribblingP = document.createElement("p");
    dribblingP.innerHTML = `DRI<span> ${playerData.dribbling}</span>`;
    infoJoueurDiv.appendChild(dribblingP);

    const defendingP = document.createElement("p");
    defendingP.innerHTML = `DEF<span> ${playerData.defending}</span>`;
    infoJoueurDiv.appendChild(defendingP);

    const physicalP = document.createElement("p");
    physicalP.innerHTML = `PHY<span> ${playerData.physical}</span>`;
    infoJoueurDiv.appendChild(physicalP);

    infoDiv.appendChild(infoJoueurDiv);

    const position = document.createElement("strong");
    position.classList.add("position_joueur");
    position.textContent = playerData.position;
    infoDiv.appendChild(position);

    const actionDiv = document.createElement("div");
    actionDiv.classList.add("action");

    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fa-solid", "fa-trash");
    if(playerCounts[playerData.position] >= maxPlayers[playerData.position]){
        trashIcon.onclick = function(event) {
            delete_joueur_reserve(event);
        };
        actionDiv.appendChild(trashIcon);
    }else{
        
        trashIcon.onclick = function(event) {
            deleteT(event);
        };
        actionDiv.appendChild(trashIcon);
    }
    const editIcon = document.createElement("i");
    editIcon.classList.add("fa-solid", "fa-pen-to-square");
    editIcon.onclick = function(event) {
        edit_joueur(event);
    };
    actionDiv.appendChild(editIcon);
    playerElement.appendChild(infoDiv);
    playerElement.appendChild(actionDiv);
}