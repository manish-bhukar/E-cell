function mynavbar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

var clickedBtnId = [];
const clickableDivs = document.querySelectorAll('.box3_');
console.log(clickableDivs)
var isReverting = false;
clickableDivs.forEach((div) => {/*traversal of complete 9 boxes*/
    div.addEventListener('click', function () {
        console.log(div);
        if (isReverting) return;
        if (div.id === "b9") {/*when b9 clicked reverting become true and start traversing from zero*/
            isReverting = true;
            retracePath(0);
        } else {
            handleButtonClick(div);
            clickedBtnId.push(div);
        }
    });
});

function retracePath(idx) {
    if (idx === clickedBtnId.length) {/*when completely traverse the array array become empty */
        clickedBtnId = [];
        isReverting = false;
        return;
    }
    clickedBtnId[idx].style.backgroundColor = "#00407A";

    setTimeout(() => {
        retracePath(idx + 1);
    }, 500);/* after every .5second the color changes*/
}

function handleButtonClick(div) {
    div.style.backgroundColor = "red";
}