var data = {
    "products": [
		{
			"title": "Samsung Galaxy J6 Smart Phone 64 GB, 4 GB RAM, Blue",
			"description": "Super AMOLED Display with 1480 x 720 (HD+) Resolution",
			"image": "1.jpeg",
			"quantity":"10"
        },
        {
			"title": "Mi A2 4GB + 64GB | 6GB + 128GB",
			"description": "15.2cm (5.99) large display",
			"image": "2.jpeg",
			"quantity":"20"
		},
		{
			"title": "Apple iphone 32GB",
			"description": "11.4 cm(4.7)display",
			"image": "3.jpeg",
			"quantity":"30"
		},
		{
			"title": "red mi note 6 pro",
			"description": "15.9 cm (6.26 inch) FHD+ Display with Resolution ",
			"image": "4.jpeg",
			"quantity":"40"
		}
    ]
}
// $(function() {
//     $('form').submit(function() {
//         $('#result').text(JSON.stringify($('form')));
//         return false;
//     });
// });
// function delete(ind) {
//     data.products.splice(id, 1);
// }

var i = 0;
 window.onload = function show() {
    document.getElementById('title').innerHTML = '<h1>' +data.products[i].title+'</h1>';
    document.getElementById('desc').innerHTML = '<p>'+data.products[i].description+'</p>';
    document.getElementById('qtty').innerHTML = '<h4>'+data.products[i].quantity+'</h4>';
    document.getElementById('img').innerHTML = '<img src="C:/Users/Gangadhar/Videos/WP/m12/WP week3 exam/MobileCatalog/Product/'+data.products[i].image+'">';
    hideButton('prev');
    // showButton('delete')
 }

 function prevButton() {
     i--;
    //  if(i < 0){
    //     i = 0;
    //     hideButton('prev')
    //     return;
    // }
     showButton('prev')
     showButton('next')
    //  showButton('delete')
    //  delete(i);
     document.getElementById('title').innerHTML = '<h1>' +data.products[i].title+'</h1>';
     document.getElementById('desc').innerHTML = '<p>'+data.products[i].description+'</p>';
     document.getElementById('qtty').innerHTML = '<h4>'+data.products[i].quantity+'</h4>';
     document.getElementById('img').innerHTML = '<img src="C:/Users/Gangadhar/Videos/WP/m12/WP week3 exam/MobileCatalog/Product/'+data.products[i].image+'">';
     if(i == 0) { hideButton('prev') }
 }
 function nextButton() {
    i++;
    // if(i > data.product.length - 1){
    //     i = data.product.length-1;
    //     hideButton('next')
    //     return;
    // }
    showButton('prev')
    showButton('next')
    // showButton('delete')
    // delete(i);
    document.getElementById('title').innerHTML = '<h1>' +data.products[i].title+'</h1>';
    document.getElementById('desc').innerHTML = '<p>'+data.products[i].description+'</p>';
    document.getElementById('qtty').innerHTML = '<h4>'+data.products[i].quantity+'</h4>';
    document.getElementById('img').innerHTML = '<img src="C:/Users/Gangadhar/Videos/WP/m12/WP week3 exam/MobileCatalog/Product/'+data.products[i].image+'">';
    if(i == data.products.length-1) { hideButton('next') }
}
function hideButton(id) {
    console.log(document.getElementById(id).style.visibility)
    document.getElementById(id).style.visibility = 'hidden';
}
function showButton(id) {
    console.log(document.getElementById(id).style.visibility)
    document.getElementById(id).style.visibility = 'visible';
}