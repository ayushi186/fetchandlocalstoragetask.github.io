addItem({"id":1,"name":"cerulean","year":2000,"color":"#98B2D1","pantone_value":"15-4020"});

async function fetchColorsList(){
await fetch('https://reqres.in/api/unknown')
.then(dataWrappedByPromise => dataWrappedByPromise.json())
.then(data => {
    // you can access your data here
    console.log(data.data);
    const colorList = data.data;
    localStorage.setItem("colorList", JSON.stringify(colorList));  
})

await loadColorsFromStorage(localStorage);
}
    
async function loadColorsFromStorage(localStorage){
    //TODO implement this function
   let  colors = JSON.parse( localStorage.getItem('colorList' ) );
   console.log(colors);
   colors.forEach((color) => {
     addItem(color);
   })
}

async function addItem(item){
    const itemHTML = '<div class="card" style="width: 18rem;">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text">'+item.pantone_value+'</p>\n' +
        '        <div style="background:'+item.color+';">'+item.color+'</div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

//fetchColorsList();


function clearData (){
    localStorage.removeItem('colorList');
    location.reload();
}
//loadColorsFromStorage();

document.querySelector("#clear").addEventListener("click", clearData);
document.querySelector("#load").addEventListener("click", fetchColorsList);

