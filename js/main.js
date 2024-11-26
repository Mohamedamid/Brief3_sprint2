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
    `;
    } else {
        playerElement.innerHTML = `
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
    `;
    } else {
        playerElement.innerHTML = `
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
    `;
    }

    reserveDiv.appendChild(playerElement);
}

function modifier(event) {
    const playerElement = event.target.closest('.player-item');

    const playerNameElement = playerElement.querySelector('strong');
    const playerPhotoElement = playerElement.querySelector('.photo_joueur');
    const positionElement = playerElement.querySelector('.position_joueur');
    
    const nationality = playerElement.querySelector('.information_joueur p:nth-child(1) span')?.textContent || '';
    const flag = playerElement.querySelector('.flag')?.src || ''; // العلم
    const club = playerElement.querySelector('.club')?.textContent || ''; // النادي
    const logo = playerElement.querySelector('.logo')?.src || ''; // الشعار
    const rating = playerElement.querySelector('.rating')?.textContent || ''; // التقييم

    const playerName = playerNameElement ? playerNameElement.textContent : '';
    const playerPhoto = playerPhotoElement ? playerPhotoElement.src : '';
    const position = positionElement ? positionElement.textContent : '';

    let pace = playerElement.querySelector('.pace')?.textContent || '';
    let shooting = playerElement.querySelector('.shooting')?.textContent || '';
    let passing = playerElement.querySelector('.passing')?.textContent || '';
    let dribbling = playerElement.querySelector('.dribbling')?.textContent || '';
    let defending = playerElement.querySelector('.defending')?.textContent || '';
    let physical = playerElement.querySelector('.physical')?.textContent || '';

    let diving = playerElement.querySelector('.diving')?.textContent || '';
    let handling = playerElement.querySelector('.handling')?.textContent || '';
    let kicking = playerElement.querySelector('.kicking')?.textContent || '';
    let reflexes = playerElement.querySelector('.reflexes')?.textContent || '';
    let speed = playerElement.querySelector('.speed')?.textContent || '';
    let positioning = playerElement.querySelector('.positioning')?.textContent || '';

    // ملء الحقول في النموذج
    document.getElementById('name').value = playerName;
    document.getElementById('photo').value = playerPhoto;
    document.getElementById('position').value = position;
    document.getElementById('Nationality').value = nationality;
    document.getElementById('flag').value = flag;
    document.getElementById('club').value = club;
    document.getElementById('logo').value = logo;
    document.getElementById('rating').value = rating;

    // ملء البيانات الخاصة بالمحترفين
    document.getElementById('pace').value = pace;
    document.getElementById('shooting').value = shooting;
    document.getElementById('passing').value = passing;
    document.getElementById('dribbling').value = dribbling;
    document.getElementById('defending').value = defending;
    document.getElementById('physical').value = physical;

    // ملء البيانات الخاصة بحراس المرمى (إن كانت موجودة)
    document.getElementById('diving').value = diving;
    document.getElementById('handling').value = handling;
    document.getElementById('kicking').value = kicking;
    document.getElementById('reflexes').value = reflexes;
    document.getElementById('speed').value = speed;
    document.getElementById('positioning').value = positioning;

    // تغيير العرض بين النموذج العادي وحارس المرمى
    if (position === 'GK') {
        // عرض الحقول الخاصة بحارس المرمى
        document.querySelector('.gardiyan').style.display = 'flex';
        document.querySelector('.joueur').style.display = 'none';
    } else {
        // عرض الحقول الخاصة باللاعبين العاديين
        document.querySelector('.gardiyan').style.display = 'none';
        document.querySelector('.joueur').style.display = 'flex';
    }
}

