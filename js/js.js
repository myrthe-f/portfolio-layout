$(document).ready(function() {
$('#gallery').masonry({
columnWidth: 320,
itemSelector: '.item'
}).imagesLoaded(function() {
$('#gallery').masonry('reload');
});
});
