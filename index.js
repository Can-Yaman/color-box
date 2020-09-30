const colors = [{
        colorNum: 2,
        colorName: "blue",
    },
    {
        colorNum: 3,
        colorName: "yellow",
    },
    {
        colorNum: 4,
        colorName: "red",
    },
    {
        colorNum: 5,
        colorName: "green",
    },
    {
        colorNum: 9,
        colorName: "purple",
    },
    {
        colorNum: 11,
        colorName: "pink",
    },
];

function onStart() {
    let colorBox = "";
    colors.forEach((color) => {
        colorBox += `<div class="gridContainer--box"  >
    <div class="gridContainer--box__colorNum" id ="${color.colorName}"><p>${color.colorNum}</p></div>
    <div class="gridContainer--box__colorName">${color.colorName}</div>
</div>`;
    });
    document.querySelector(".gridContainer").innerHTML = colorBox;
    document.querySelector("#send").addEventListener("click", lightsOn);
    document.querySelector("#reset").addEventListener("click", lightsOff);
}
onStart();

function lightsOn() {
    let givenNumber = document.querySelector("input").value;
    zeroDiveders = [];
    colors.forEach((color) => {
        if (givenNumber % color.colorNum == 0) {
            zeroDiveders.push(color.colorName);
        }
    });
    console.log(zeroDiveders);
    if (zeroDiveders.length === 0) {
        alert("This number can not be divided by these numbers without residue");
    } else {
        zeroDiveders.forEach((color) => {
            document.querySelector(`#${color}`).style.background = color;
        });
    }
}

function lightsOff() {
    lightItems = document.querySelectorAll(".gridContainer--box__colorNum");

    lightItems.forEach((item) => {
        item.style.background = "white";
        document.querySelector("input").value = undefined;
    });
}