const lampu = document.querySelectorAll(".lampu");
let activeLight = 0;

setInterval(() => {
    gantiLampu();
}, 1000);

function gantiLampu()
{
    lampu[activeLight].className = "lampu";
    activeLight++;

    if(activeLight > 2){
        activeLight = 0;
    }

    const currentLampu = lampu[activeLight];
    currentLampu.classList.add(currentLampu.getAttribute("color"));
}