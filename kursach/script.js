let mymap = L.map('map').setView([59.936, 30.313], 12);


L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoicmV0cm9zdGFyIiwiYSI6ImNqeDBmYjNwdzBnNGI0Ym51NmtudHV0aGQifQ.tVF5Ly2A6LJoFPnWsjUOfg'
}).addTo(mymap);

// let marker = L.marker([59.926556, 30.325078]).addTo(mymap);
// marker.bindPopup("<b>Gran</b><br>I am a popup.").closePopup();

// var popup = L.popup()
//     .setLatLng([51.5, -0.09])
//     .setContent("I am a standalone popup.")
//     .openOn(mymap);

//     var popup = L.popup();

// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(mymap);
// }

// mymap.on('click', onMapClick);

let coordsArray = [[59.923222, 30.319615],[59.926556, 30.325078],[59.940946, 30.341280],[59.927227, 30.322986], [59.938228, 30.322987],[59.928020, 30.316150]];

let markersArray = [];
coordsArray.forEach(item => {
    markersArray.push(L.marker(item).addTo(mymap));
})


$(".coffee a").click(function(){
    let index = $(this).attr("data-index");
    markersArray[index].bindPopup("<b>" + this.name + "</b><br>кофейня").openPopup()
    console.log(this.name)
})

//можно щелкнуть по маркеру только если до этого целкнуть по лишке
//доработать, чтобы в массив добавлялись имена, а в другой - описания
// let namesArray = ['Характер-кофе', 'Гран']
// let popupsArray = [];

// namesArray.forEach(name => {
//     popupsArray.push(name)
// })

$(".bars a").click(function(){
    index = $(this).attr("data-index");
    markersArray[index].bindPopup("<b>" + this.name + "</b><br>бар ").openPopup()
    console.log(this.name)
})

//добавить модальное окно
//добавить разделение на желтые и зеленые маркеры
//личный кабинет
// mapButton.onclick = function(){
//     L.marker([59.925950, 30.319950])
//         .addTo(map)
//         .bindPopup('Bier zone!!!')
//         .openPopup();
// }



$("#mapButton").click(function(){
    // let a = prompt('введи координаты места')
        L.marker([59.928289, 30.312931])
            .addTo(mymap)
            .bindPopup('Bier zone!!!')
            .openPopup();
    })
