function getEle(id) {
    return document.getElementById(id);
}

let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];

function renderHTML() {
    var content = "";

    dataGlasses.forEach(function (dataGlasses, index) {
        content += `
        <div class="col-4">
            <button onclick="choseGlasses('${dataGlasses.id}')" style="border: none">
                 <img src="${dataGlasses.src}" style ="width: 100%; height: 100%;" >
            </button>
        </div>
    `;

    });

    getEle("vglassesList").innerHTML = content;
}

renderHTML();

function choseGlasses(id) {
    var img = "";
    var info = "";
    dataGlasses.forEach(function (dataGlasses, index) {
        // console.log(id);
        // console.log(id, dataGlasses.id);
        if (dataGlasses.id === id) {
            img += `
                 <img src="${dataGlasses.virtualImg}" >
                `;
            info += `
            <h5>${dataGlasses.name} - ${dataGlasses.brand} (${dataGlasses.color})</h5>
            <div class="mb-3">
            <span class="bg-danger py-1 px-2 rounded">${dataGlasses.price}</span> <span class="text-success">Stoking</span>
            </div>
            <div>
            ${dataGlasses.description}
            </div>
            `;

        }
        getEle("avatar").innerHTML = img;
        getEle("glassesInfo").style.display = "inline-block";
        getEle("glassesInfo").innerHTML = info;

    });
};
