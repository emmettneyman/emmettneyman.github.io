//Image divs
function newImg(pic, id) {
            
  var image = document.createElement('img');
  image.setAttribute("src", pic);
  image.className = 'img-responsive gallery-pics';
  var linkName = 'link' + id;
  document.getElementById(linkName).appendChild(image);
}

function newDiv(id) {
    var newDiv = document.createElement('div');
    newDiv.id = 'div' + id;
    newDiv.className = 'col-lg-3 col-md-4 col-xs-6 thumb';
    newDiv.dataset.toggle = 'modal';
    newDiv.dataset.target= '#myModal' + id;
    document.getElementsByClassName('row')[0].appendChild(newDiv);

}

function newLink(id) {
    var link = document.createElement('a');
    link.id = 'link' + id;
    link.className = 'thumbnail';
    link.href = '#';
    var divName = 'div' + id; 
    document.getElementById(divName).appendChild(link);
}

//Modals
function newModal(id, pic) {
  var modal = document.createElement('div');
  modal.id = 'myModal' + id;
  modal.className = 'modal fade';
  
  var modalContent = document.createElement('div');
  modalContent.className = 'modal-content';
  
  var modalBody = document.createElement('div');
  modalBody.className = 'modal-body';

  var image = document.createElement('img');
  image.setAttribute("src", pic);
  image.className = 'img-responsive';

  var header = document.createElement('div');
  header.className = 'modal-header';
  var closeButton = document.createElement('button');
  closeButton.className = 'btn btn-default';
  closeButton.dataset.dismiss = 'modal';
  closeButton.innerHTML = 'Close';

  header.appendChild(closeButton);
  modalBody.appendChild(image);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(header);
  modal.appendChild(modalContent);
  document.getElementsByClassName('container')[1].appendChild(modal);
}

$(document).ready(function() {
    var images = ["images/Pic1.JPG", "images/Pic2.JPG", "images/Pic3.JPG", "images/Pic4.JPG",]; 
    for (var i = 0; i < images.length; i++) {
        newDiv(i);
        newLink(i);
        newImg(images[i], i);
        var modalName = '#myModal' + i;
        var divName = 'div' + i;
        newModal(i, images[i]);
        $(divName).click(function() {
          $(modalName).modal();
        });
    }

});