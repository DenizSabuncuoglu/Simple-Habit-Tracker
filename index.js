const inputBox = document.getElementById("inputBox");
const addBtn = document.getElementById("addBtn");
const habitContainer = document.getElementById("habitContainer");

function addHabit(){
    if(inputBox.value === ''){
        alert("Please Write A Habit Name!");
    } else {
        const habitDiv = document.createElement("div");
        habitDiv.classList.add("habit");

        habitDiv.innerHTML =`
            <h2>${inputBox.value}</h2>
            <div class="days">
              <div class="monday">
                <span>M</span>
                <img src="icons/unchecked.png"/>
              </div>
              <div class="tuesday">
                <span>T</span>
                <img src="icons/unchecked.png" />
              </div>
              <div class="wednesday">
                <span>W</span>
                <img src="icons/unchecked.png" />
              </div>
              <div class="thursday">
                <span>T</span>
                <img src="icons/unchecked.png" />
              </div>
              <div class="friday">
                <span>F</span>
                <img src="icons/unchecked.png" />
              </div>
              <div class="saturday">
                <span>S</span>
                <img src="icons/unchecked.png" />
              </div>
              <div class="sunday">
                <span>S</span>
                <img src="icons/unchecked.png" />
              </div>
            </div>
            <img src="icons/trash-solid.svg" class="deleteBtn" />
        `;

        // Toggle checked class on each day icon
    const dayIcons = habitDiv.querySelectorAll(".days img");
    dayIcons.forEach(icon =>{
        icon.addEventListener("click", function(){
            icon.classList.toggle("checked");
        });
    })

        // Delete button
        habitDiv.querySelector(".deleteBtn").addEventListener("click", () => {
            habitDiv.remove();
        });
        
        habitContainer.appendChild(habitDiv);
        inputBox.value = '';
       
        
    }

}


inputBox.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        addHabit();
    }
})
