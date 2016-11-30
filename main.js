function getData(data) {
    var title = data.results.map(results => `${results.title} ${results.price} ${results.Shop.shop_name}`)
    var picture = data.results.map(results => `${results.Images[0].url_170x135}`)
        // console.log(picture)
        // console.log(title)

    title.forEach(function(item) {
        var list = [item]
        var name = document.createElement('li')
        var names = document.createTextNode(item)
        name.appendChild(names)
        $('.listings').append(name)

    })



    picture.forEach(function(visual) {
        var pics = [visual]
        var imgs = document.createElement('IMG')
        imgs.src = pics
        $('.listings').append(imgs)


    })
}
//
// function getData(data) {
//     var title = data.results.map(results => `${results.title} ${results.price} ${results.Shop.shop_name}`)
//     var picture = data.results.map(results => `${results.Images[0].url_170x135}`)
//         // console.log(picture)
//         // console.log(title)
//
//     var mainTitle = title.forEach(function(item) {
//         var list = [item]
//         var name = document.createElement('li')
//         var names = document.createTextNode(item)
//         name.appendChild(names)
//         $('.listings').append(name)
//
//     })
//     console.log(mainTitle)
//
//
//
//     var mainPictures = picture.forEach(function(visual) {
//         var pics = [visual]
//         var imgs = document.createElement('IMG')
//         imgs.src = pics
//         $('.listings').append(imgs)
//
//     })
//
//     var combine = mainTitle + mainPictures
//     function makeUL(array) {
//     var list = document.createElement('ul');
//
//     for (var i = 0; i < array.length; i++) {
//         var item = document.createElement('li');
//         item.appendChild(document.createTextNode(array[i]));
//         list.appendChild(item);
//     }
//     return list;
// }
// document.getElementById('.listings').append(makeUL(combine));
//
//
//
// }
