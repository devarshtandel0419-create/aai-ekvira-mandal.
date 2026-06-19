document.addEventListener("DOMContentLoaded", () => {

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.forEach(item =>
                item.classList.remove("active")
            );

            link.classList.add("active");

        });

    });

});

function openModal(){
    document.getElementById("volunteerModal").style.display = "block";
}

function closeModal(){
    document.getElementById("volunteerModal").style.display = "none";
}

window.onclick = function(event){

    const modal =
    document.getElementById("volunteerModal");

    if(event.target == modal){
        modal.style.display = "none";
    }

}

const volunteers = [
 "धवल पाटील",
 "रोहित शिंदे",
 "सागर पवार",
 "अमोल कदम",
 "प्रशांत जाधव"
];


const galleryData = {

    ganpati:{

        2025:[
            "Images/Ganpati/2025/1.jpg",
            "Images/Ganpati/2025/2.jpg",
            "Images/Ganpati/2025/3.jpg",
            'Images/Ganpati/2025/4.jpg'
        ],

        2024:[
            "Images/Ganpati/2024/1.jpg",
            "Images/Ganpati/2024/2.jpg",
            "Images/Ganpati/2024/3.jpg",
            "Images/Ganpati/2024/4.jpg"
            
        ],

        2023:[
            "Images/Ganpati/2023/1.jpg",
            "Images/Ganpati/2023/2.jpg",
            "Images/Ganpati/2023/3.jpg",
            "Images/Ganpati/2023/4.jpg"
            
        ]
    },

    devi:{

        2025:[
            "Images/DevI/2025/1.jpg",
            "Images/DevI/2025/2.jpg",
            "Images/DevI/2025/3.jpg",
            "Images/DevI/2025/4.jpg"
            
        ],

        2024:[
            "Images/DevI/2024/1.jpg",
            "Images/DevI/2024/2.jpg",
            "Images/DevI/2024/3.jpg",
            "Images/DevI/2024/4.jpg"
            
        ],

        2023:[
            "Images/DevI/2023/1.jpg",
            "Images/DevI/2023/2.jpg",
            "Images/DevI/2023/3.jpg",
            "Images/DevI/2023/4.jpg"
            
        ]
    }
};

let currentCategory = "ganpati";

loadYears();

function showCategory(category, btn){

    currentCategory = category;

    document
    .querySelectorAll(".tab-btn")
    .forEach(tab => tab.classList.remove("active"));

    btn.classList.add("active");

    loadYears();
}

function loadYears(){

    const years =
    Object.keys(galleryData[currentCategory]);

    let html = "";

    years.forEach(year => {

        html += `
        <div class="folder-card"
            onclick="openYear('${year}')">

            <h3>📁 ${year}</h3>

        </div>
        `;
    });

    document.getElementById("yearFolders")
    .innerHTML = html;

    document.getElementById("galleryPhotos")
    .innerHTML = "";
}

function openYear(year){

    const photos =
    galleryData[currentCategory][year];

    let html = "";

    photos.forEach(photo => {

        html += `
        <img src="${photo}"
             class="photo-card"
             onclick="previewImage('${photo}')">
        `;
    });

    document.getElementById("galleryPhotos")
    .innerHTML = html;
}

function previewImage(src){

    document.getElementById("previewModal")
    .style.display = "flex";

    document.getElementById("previewImage")
    .src = src;
}

function closePreview(){

    document.getElementById("previewModal")
    .style.display = "none";
}

const cards = document.querySelectorAll('.member-card');

cards.forEach(card => {

    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0px)';
    });

});


function selectType(button){

    document
    .querySelectorAll(".type-btn")
    .forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");
}

function sendWhatsAppBooking(){

    const visarjanType =
    document.querySelector(".type-btn.active").innerText;

    const mandalName =
    document.getElementById("mandalName").value;

    const mobile =
    document.getElementById("mobile").value;

    const visarjanSpot =
    document.getElementById("visarjanSpot").value;

    const mandalLocation =
    document.getElementById("mandalLocation").value;

    const murtiHeight =
    document.getElementById("murtiHeight").value;

    const visarjanDate =
    document.getElementById("visarjanDate").value;

    const arrivalTime =
    document.getElementById("arrivalTime").value;

    if(
        !mandalName ||
        !mobile ||
        !visarjanSpot ||
        !mandalLocation ||
        !murtiHeight ||
        !visarjanDate ||
        !arrivalTime
    ){
        alert("कृपया सर्व माहिती भरा.");
        return;
    }

    const message =
`🙏 नवीन विसर्जन बुकिंग

📌 विसर्जन प्रकार : ${visarjanType}

🏛 मंडळाचे नाव : ${mandalName}

📍 मंडळाचे ठिकाण : ${mandalLocation}

📏 मूर्ती उंची : ${murtiHeight} फूट

📱 मोबाईल : ${mobile}

🌊 विसर्जन ठिकाण : ${visarjanSpot}

📅 विसर्जन तारीख : ${visarjanDate}

🕒 पोहोचण्याची वेळ : ${arrivalTime}`;

    const whatsappURL =
`https://wa.me/918655848773?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL,"_blank");
}

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener('click',function(e){

        e.preventDefault();

        const target =
        document.querySelector(
            this.getAttribute('href')
        );

        if(target){

            target.scrollIntoView({
                behavior:'smooth'
            });

        }

    });

});
