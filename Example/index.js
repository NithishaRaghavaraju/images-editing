const upload = document.getElementsByClassName("upload")[0];
const inputFile = document.getElementsByClassName("inputFile")[0];
const savedImage = document.getElementsByClassName("saved-image")[0];
const Result = document.getElementsByClassName("result")[0];
const editedImage = document.getElementById('cropped_result');
var uploadedImage = "";

upload.addEventListener("click", function () {
    inputFile.click(inputFile.value);
});
const rotateButton = document.getElementById('rotate-button');
const Transform = document.getElementById('Transform-img');

// Set initial rotation and cropping values
let rotation = 0;

// Add event listeners to buttons
rotateButton.addEventListener('click', () => {
  rotation += 90;
  editedImage.style.transform = `rotate(${rotation}deg)`;
});
  
Transform.addEventListener('click', () => {
    editedImage.classList.toggle('flip-x');
  });

const heartBtn = document.getElementById('heart-btn');
const rectBtn = document.getElementById('rectangle-btn');
const circleBtn = document.getElementById('circle-btn');
const squareBtn = document.getElementById('square-btn');
  
  heartBtn.addEventListener('click', () => {
    editedImage.classList.toggle('heart-clip');
    editedImage.classList.remove('rect-clip');
    editedImage.classList.remove('circle-clip');
    editedImage.classList.remove('square-clip');
  });
  
  rectBtn.addEventListener('click', () => {
    editedImage.classList.toggle('rect-clip');
    editedImage.classList.remove('heart-clip');
    editedImage.classList.remove('circle-clip');
    editedImage.classList.remove('square-clip');
  });
  
  circleBtn.addEventListener('click', () => {
    editedImage.classList.toggle('circle-clip');
    editedImage.classList.remove('heart-clip');
    editedImage.classList.remove('rect-clip');
    editedImage.classList.remove('square-clip');
  });
  squareBtn.addEventListener('click', () => {
    editedImage.classList.toggle('square-clip');
    editedImage.classList.remove('heart-clip');
    editedImage.classList.remove('rect-clip');
    editedImage.classList.remove('circle-clip');
  });
inputFile.addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        Result.src = reader.result;
        // savedImage.style.background = `url(${uploadedImage})`;
    });
    reader.readAsDataURL(this.files[0]);
});
function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $('#blah').attr('src', e.target.result)
      };
      reader.readAsDataURL(input.files[0]);
      setTimeout(initCropper, 1000);
    }
  }
  function initCropper(){
    console.log("Came here")
    var image = document.getElementById('blah');
    var cropper = new Cropper(image, {
      aspectRatio: 16 / 9,
      crop: function(e) {
        console.log(e.detail.x);
        console.log(e.detail.y);
      }
    });
  
    // On crop button clicked
    document.getElementById('crop_button').addEventListener('click', function(){
      var imgurl =  cropper.getCroppedCanvas().toDataURL();
      var img = document.createElement("img");
      img.src = imgurl;
      document.getElementById('cropped_result').src=img.src;
      // document.getElementById("cropped_result").appendChild(img);
    })
  }