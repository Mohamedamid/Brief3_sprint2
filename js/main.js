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
        flag: document.getElementById("flag").value,
        club: document.getElementById("club").value,
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
if(playerData.position === 'GK'){
    if(!playerData.name || !playerData.photo || !playerData.position || !playerData.flag || !playerData.club || !playerData.rating || !playerData.diving || !playerData.handling || !playerData.kicking || !playerData.reflexes || !playerData.speed || !playerData.positioning){
        alert('chi input khawya')
    }else{
        displayPlayerData(playerData);
        document.getElementById("playerForm").reset();
    }
}else{
    if(!playerData.name || !playerData.photo || !playerData.position || !playerData.flag || !playerData.club || !playerData.rating || !playerData.pace || !playerData.shooting || !playerData.passing || !playerData.dribbling || !playerData.defending || !playerData.physical){
        alert('chi input khawya')
    }else{
        displayPlayerData(playerData);
        document.getElementById("playerForm").reset();
    }
}
    
});

let playerCounts = {
    'RW':0,'LW':0,'CF':0,'CM': 0,'LB':0,'RB':0,'CB1':0,'CB2':0,'GK': 0
};
const maxPlayers = {'RW':1,'LW':1,'CF':1,'CM': 3,'LB':1,'RB':1,'CB1':1,'CB2':1,'GK': 1
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
let currentRow;
function edit_GK(event) {
    
    currentRow = event.currentTarget.closest(".player-item");

    let nameElement = currentRow.querySelector(".name").textContent;
    let photoElement = currentRow.querySelector(".photo_joueur").src;
    let positionElement = currentRow.querySelector(".position_joueur").textContent;
    let divingElement = currentRow.querySelector(".d").textContent;
    let clubElement = currentRow.querySelector(".club").src;
    let flagElement = currentRow.querySelector(".flag").src;
    let ratingElement = currentRow.querySelector(".rating").textContent;
    let handlingElement = currentRow.querySelector(".hand").textContent;
    let kickingElement = currentRow.querySelector(".kic").textContent;
    let reflexesElement = currentRow.querySelector(".fer").textContent;
    let speedElement = currentRow.querySelector(".speed").textContent;
    let positioningElement = currentRow.querySelector(".pos").textContent;

    document.getElementById("name").value = nameElement
    document.getElementById("photo").value = photoElement
    document.getElementById("position").value = positionElement
    document.getElementById("flag").value = flagElement
    document.getElementById("club").value = clubElement
    document.getElementById("rating").value = parseInt(ratingElement);
    document.getElementById("diving").value = parseInt(divingElement);
    document.getElementById("handling").value = parseInt(handlingElement);
    document.getElementById("kicking").value = parseInt(kickingElement);
    document.getElementById("reflexes").value = parseInt(reflexesElement);
    document.getElementById("speed").value = parseInt(speedElement);
    document.getElementById("positioning").value = parseInt(positioningElement);
    document.getElementById("addButton").style.display = "none";
    document.getElementById("btn_joueur").style.display = "none";
    document.getElementById("btn_GK").style.display = "inline-block";
    var positionSelect = document.getElementById('position');
    var goalkeeperFields = document.querySelectorAll('.gardiyan');
    var playerFields = document.querySelectorAll('.joueur');
    if (positionSelect.value === 'GK') {
        goalkeeperFields.forEach(field => field.style.display = 'flex');
        playerFields.forEach(field => field.style.display = 'none');
    } else {
        goalkeeperFields.forEach(field => field.style.display = 'none');
        playerFields.forEach(field => field.style.display = 'flex');
    }
}

function save_GK() {
    if (!currentRow) return;
    let nameElement = document.getElementById("name").value;
    let photoElement = document.getElementById("photo").value;
    let positionElement = document.getElementById("position").value;
    let flagElement = document.getElementById("flag").value;
    let clubElement = document.getElementById("club").value;
    let ratingElement = parseInt(document.getElementById("rating").value);
    let divingElement = parseInt(document.getElementById("diving").value);
    let handlingElement = parseInt(document.getElementById("handling").value);
    let kickingElement = parseInt(document.getElementById("kicking").value);
    let reflexesElement = parseInt(document.getElementById("reflexes").value);
    let speedElement = parseInt(document.getElementById("speed").value);
    let positioningElement = parseInt(document.getElementById("positioning").value);
    if(!nameElement || !photoElement || !positionElement || !clubElement || !flagElement || !ratingElement || !divingElement || !handlingElement || !kickingElement || !reflexesElement || !speedElement || !positioningElement){
        alert('input vide')
    }else{
        currentRow.querySelector(".name").textContent = nameElement;
        currentRow.querySelector(".photo_joueur").src = photoElement;
        currentRow.querySelector(".position_joueur").textContent = positionElement;
        currentRow.querySelector(".club").src = clubElement;
        currentRow.querySelector(".flag").src = flagElement;
        currentRow.querySelector(".rating").textContent = ratingElement;
        currentRow.querySelector(".d").textContent = divingElement;
        currentRow.querySelector(".hand").textContent = handlingElement;
        currentRow.querySelector(".kic").textContent = kickingElement;
        currentRow.querySelector(".fer").textContent = reflexesElement;
        currentRow.querySelector(".speed").textContent = speedElement;
        currentRow.querySelector(".pos").textContent = positioningElement;
        document.querySelector("form").reset();
        document.getElementById("addButton").style.display = "inline-block";
        document.getElementById("btn_GK").style.display = "none";
        document.getElementById("btn_joueur").style.display = "none";
        currentRow = null;
    }
}

function edit_joueur(event) {
    currentRow = event.currentTarget.closest(".player-item");
    let nameElement = currentRow.querySelector(".name").textContent;
    let photoElement = currentRow.querySelector(".photo_joueur").src;
    let positionElement = currentRow.querySelector(".position_joueur").textContent;
    let clubElement = currentRow.querySelector(".club").src;
    let flagElement = currentRow.querySelector(".flag").src;
    let ratingElement = currentRow.querySelector(".rating").textContent;
    let paceElement = currentRow.querySelector(".pace").textContent;
    let shootingElement = currentRow.querySelector(".sho").textContent;
    let passingElement = currentRow.querySelector(".pas").textContent;
    let dribblingElement = currentRow.querySelector(".dri").textContent;
    let defendingElement = currentRow.querySelector(".def").textContent;
    let physicalElement = currentRow.querySelector(".phy").textContent;
    document.getElementById("name").value = nameElement
    document.getElementById("photo").value = photoElement
    document.getElementById("position").value = positionElement
    document.getElementById("flag").value = flagElement
    document.getElementById("club").value = clubElement
    document.getElementById("rating").value = parseInt(ratingElement);
    document.getElementById("pace").value = parseInt(paceElement);
    document.getElementById("shooting").value = parseInt(shootingElement);
    document.getElementById("passing").value = parseInt(passingElement);
    document.getElementById("dribbling").value = parseInt(dribblingElement);
    document.getElementById("defending").value = parseInt(defendingElement);
    document.getElementById("physical").value = parseInt(physicalElement);
    document.getElementById("addButton").style.display = "none";
    document.getElementById("btn_joueur").style.display = "inline-block";
    document.getElementById("btn_GK").style.display = "none";
    var positionSelect = document.getElementById('position');
    var goalkeeperFields = document.querySelectorAll('.gardiyan');
    var playerFields = document.querySelectorAll('.joueur');
    if (positionSelect.value === 'GK') {
        goalkeeperFields.forEach(field => field.style.display = 'flex');
        playerFields.forEach(field => field.style.display = 'none');
    } else {
        goalkeeperFields.forEach(field => field.style.display = 'none');
        playerFields.forEach(field => field.style.display = 'flex');
    }
}

function save_joueur() {
    if (!currentRow) return;
    let nameElement = document.getElementById("name").value;
    let photoElement = document.getElementById("photo").value;
    let positionElement = document.getElementById("position").value;
    let flagElement = document.getElementById("flag").value;
    let clubElement = document.getElementById("club").value;
    let ratingElement = parseInt(document.getElementById("rating").value);
    let shootingElement = parseInt(document.getElementById("shooting").value);
    let paceElement = parseInt(document.getElementById("pace").value);
    let passingElement = parseInt(document.getElementById("passing").value);
    let dribblingElement = parseInt(document.getElementById("dribbling").value);
    let defendingElement = parseInt(document.getElementById("defending").value);
    let physicalElement = parseInt(document.getElementById("physical").value);
    if(!nameElement || !photoElement || !positionElement || !flagElement || !clubElement || !ratingElement || !shootingElement || !paceElement || !passingElement || !dribblingElement || !defendingElement || !physicalElement){
        alert("input vide")
    }else{
        currentRow.querySelector(".name").textContent = nameElement;
        currentRow.querySelector(".photo_joueur").src = photoElement;
        currentRow.querySelector(".position_joueur").textContent = positionElement;
        currentRow.querySelector(".club").src = clubElement;
        currentRow.querySelector(".flag").src = flagElement;
        currentRow.querySelector(".rating").textContent = ratingElement;
        currentRow.querySelector(".sho").textContent = shootingElement;
        currentRow.querySelector(".pace").textContent = paceElement;
        currentRow.querySelector(".pas").textContent = passingElement;
        currentRow.querySelector(".dri").textContent = dribblingElement;
        currentRow.querySelector(".def").textContent = defendingElement;
        currentRow.querySelector(".phy").textContent = physicalElement;
        document.querySelector("form").reset();
        document.getElementById("addButton").style.display = "inline-block";
        document.getElementById("btn_joueur").style.display = "none";
        document.getElementById("btn_GK").style.display = "none";
        currentRow = null;
    }
    
}

function createGK(playerElement, playerData) {
    const infoDiv = document.createElement("div");
    infoDiv.classList.add("info");

    const infoDiv1 = document.createElement("div");
    infoDiv1.classList.add("info1");

    const flagClubDiv = document.createElement("div");
    flagClubDiv.classList.add("flag-club");

    const flagImg = document.createElement("img");
    flagImg.classList.add("flag");
    flagImg.src = playerData.flag;
    flagImg.style.width = '15px';

    const logoImg = document.createElement("img");
    logoImg.classList.add("club");
    logoImg.src = playerData.club;
    logoImg.style.width = '15px';

    flagClubDiv.appendChild(flagImg);
    flagClubDiv.appendChild(logoImg);

    infoDiv1.appendChild(flagClubDiv);

    const img = document.createElement("img");
    img.classList.add("photo_joueur");
    img.src = playerData.photo; 
    img.width = 50;
    img.height = 50;
    infoDiv1.appendChild(img);

    const ratingSpan = document.createElement("span");
    ratingSpan.classList.add("rating");

    ratingSpan.textContent = playerData.rating;
    infoDiv1.appendChild(ratingSpan);

    infoDiv.appendChild(infoDiv1);

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
    handlingP.innerHTML = `HAN<span class="hand"> ${playerData.handling}</span>`;
    handlingP.classList.add("handling");
    infoJoueurDiv.appendChild(handlingP);

    const kickingP = document.createElement("p");
    kickingP.innerHTML = `KIC<span class="kic"> ${playerData.kicking}</span>`;
    kickingP.classList.add("kicking");
    infoJoueurDiv.appendChild(kickingP);

    const reflexesP = document.createElement("p");
    reflexesP.innerHTML = `REF<span class="fer"> ${playerData.reflexes}</span>`;
    reflexesP.classList.add("reflexesP")
    infoJoueurDiv.appendChild(reflexesP);

    const speedP = document.createElement("p");
    speedP.innerHTML = `SPE<span class="speed"> ${playerData.speed}</span>`;
    infoJoueurDiv.appendChild(speedP);

    const positioningP = document.createElement("p");
    positioningP.innerHTML = `POS<span class="pos"> ${playerData.positioning}</span>`;
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

    if(playerCounts[playerData.position] >= maxPlayers[playerData.position]){
        trashIcon.onclick = function(event) {delete_joueur_reserve(event)};
        actionDiv.appendChild(trashIcon);
    }else{
        trashIcon.onclick = function(event) {deleteT(event)};
        actionDiv.appendChild(trashIcon);
    }

    const editIcon = document.createElement("i");
    editIcon.classList.add("fa-solid", "fa-pen-to-square");
    editIcon.onclick = function(event) {edit_GK(event)};
    actionDiv.appendChild(editIcon);
    
    playerElement.appendChild(infoDiv);
    playerElement.appendChild(actionDiv);
}

function createplayer(playerElement, playerData){
    const infoDiv = document.createElement("div");
    infoDiv.classList.add("info");

    const infoDiv1 = document.createElement("div");
    infoDiv1.classList.add("info1");

    const flagClubDiv = document.createElement("div");
    flagClubDiv.classList.add("flag-club");

    const flagImg = document.createElement("img");
    flagImg.classList.add("flag");
    flagImg.src = playerData.flag;
    flagImg.style.width = '15px';

    const logoImg = document.createElement("img");
    logoImg.classList.add("club");
    logoImg.src = playerData.club;
    logoImg.style.width = '15px';

    flagClubDiv.appendChild(flagImg);
    flagClubDiv.appendChild(logoImg);

    infoDiv1.appendChild(flagClubDiv);

    const img = document.createElement("img");
    img.classList.add("photo_joueur");
    img.src = playerData.photo;
    img.width = 50;
    img.height = 50;
    infoDiv1.appendChild(img);

    const ratingSpan = document.createElement("span");
    ratingSpan.classList.add("rating");

    ratingSpan.textContent = playerData.rating;
    infoDiv1.appendChild(ratingSpan);
    infoDiv.appendChild(infoDiv1);

    const nameStrong = document.createElement("strong");
    nameStrong.textContent = playerData.name;
    nameStrong.classList.add("name");
    infoDiv.appendChild(nameStrong);

    const infoJoueurDiv = document.createElement("div");
    infoJoueurDiv.classList.add("information_joueur");

    const paceP = document.createElement("p");
    paceP.innerHTML = `PAC<span class="pace"> ${playerData.pace}</span>`;
    paceP.classList.add("pac");
    infoJoueurDiv.appendChild(paceP);

    const shootingP = document.createElement("p");
    shootingP.innerHTML = `SHO<span class="sho"> ${playerData.shooting}</span>`;
    infoJoueurDiv.appendChild(shootingP);

    const passingP = document.createElement("p");
    passingP.innerHTML = `PAS<span class="pas"> ${playerData.passing}</span>`;
    infoJoueurDiv.appendChild(passingP);

    const dribblingP = document.createElement("p");
    dribblingP.innerHTML = `DRI<span class="dri"> ${playerData.dribbling}</span>`;
    infoJoueurDiv.appendChild(dribblingP);

    const defendingP = document.createElement("p");
    defendingP.innerHTML = `DEF<span class="def"> ${playerData.defending}</span>`;
    infoJoueurDiv.appendChild(defendingP);

    const physicalP = document.createElement("p");
    physicalP.innerHTML = `PHY<span class="phy"> ${playerData.physical}</span>`;
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
        trashIcon.onclick = function(event) {delete_joueur_reserve(event)};
        actionDiv.appendChild(trashIcon);
    }else{
        trashIcon.onclick = function(event) {deleteT(event)};
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