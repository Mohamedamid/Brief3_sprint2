document.getElementById("playerForm").addEventListener("submit", function(event) {
    event.preventDefault();  // منع تقديم النموذج بشكل افتراضي

    // الحصول على البيانات من النموذج
    const playerData = {
        name: document.getElementById("name").value,
        photo: document.getElementById("photo").value,
        position: document.getElementById("position").value, // الحصول على المركز
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
    };

    // إضافة اللاعب إلى الملعب
    displayPlayerData(playerData);

    // إعادة تعيين النموذج بعد الإضافة
    document.getElementById("playerForm").reset();
});

// تحديد عدد اللاعبين الأقصى لكل مركز بناءً على التشكيلة 3-4-3
const maxPlayers = {
    'Attaque': 3,    // أقصى عدد من المهاجمين
    'milieu': 3,      // أقصى عدد من لاعبي الوسط
    'Defense': 4,     // أقصى عدد من المدافعين
    'garde': 1        // أقصى عدد من الحراس
};

let playerCounts = {
    'Attaque': 0,     // عدد المهاجمين
    'milieu': 0,      // عدد لاعبي الوسط
    'Defense': 0,     // عدد المدافعين
    'garde': 0        // عدد الحراس
};

function displayPlayerData(playerData) {
    const position = playerData.position;  // الحصول على المركز
    let positionClass = '';  // تحديد فئة المركز

    // تحديد الفئة المناسبة بناءً على المركز
    switch (position) {
        case 'RW':
        case 'LW':
        case 'CF':
            positionClass = 'Attaque';
            break;
        case 'CM':
        case 'CDM':
            positionClass = 'milieu';
            break;
        case 'CB':
            positionClass = 'Defense';
            break;
        case 'GK':
            positionClass = 'garde';
            break;
        default:
            alert('المركز غير موجود!');  // إعلام المستخدم إذا كانت القيمة غير صحيحة
            return;
    }

    // التحقق إذا كان المركز قد امتلأ
    if (playerCounts[positionClass] >= maxPlayers[positionClass]) {
        // إضافة اللاعب إلى الاحتياط إذا كان المركز ممتلئًا
        addPlayerToReserve(playerData);
        return;
    }

    // العثور على الـ div بناءً على الفئة المحددة
    const positionDiv = document.querySelector(`.${positionClass}`);

    // إنشاء عنصر جديد للاعب
    const playerElement = document.createElement("div");
    playerElement.classList.add("player-item");  // إضافة فئة لتنسيق اللاعب

    // إضافة معلومات اللاعب (الصورة والاسم)
    playerElement.innerHTML = `
        <img src="${playerData.photo}" alt="" width="50" height="50">
        <strong>${playerData.name}</strong>
        <strong>${playerData.position}</strong>
    `;

    // إضافة اللاعب إلى div المخصص للمركز
    positionDiv.appendChild(playerElement);

    // تحديث عدد اللاعبين في المركز
    playerCounts[positionClass]++;
}

// دالة لإضافة اللاعب إلى الاحتياط
function addPlayerToReserve(playerData) {
    const reserveDiv = document.querySelector(".Joueurs_de_reserve");

    // إنشاء عنصر جديد للاعب في الاحتياط
    const playerElement = document.createElement("div");
    playerElement.classList.add("player-item");  // إضافة فئة لتنسيق اللاعب

    // إضافة معلومات اللاعب (الصورة والاسم)
    playerElement.innerHTML = `
        <img src="${playerData.photo}" alt="" width="50" height="50">
        <strong>${playerData.name}</strong>
        <strong>${playerData.position}</strong>
    `;

    // إضافة اللاعب إلى الاحتياط
    reserveDiv.appendChild(playerElement);
}
