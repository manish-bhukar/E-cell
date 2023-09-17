function toggleNav() {
    var navBar = document.getElementById("myTopnav");
    var icon = navBar.querySelector(".icon");
  
    if (navBar.classList.contains("open")) {
      // Close the navbar
      navBar.classList.remove("open");
      icon.textContent = "☰"; // Change back to "☰" when closing
    } else {
      // Open the navbar
      navBar.classList.add("open");
      icon.textContent = "✕"; // Change to "✕" when opening
    }
  
    if (navBar.classList.contains("responsive")) {
      navBar.classList.remove("responsive");
    } else {
      navBar.classList.add("responsive");
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