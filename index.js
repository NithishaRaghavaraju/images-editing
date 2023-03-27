const upload = document.getElementsByClassName("upload")[0];
const inputFile = document.getElementsByClassName("inputFile")[0];
const savedImage = document.getElementsByClassName("saved-image")[0];
const Result = document.getElementsByClassName("result")[0];
var uploadedImage = "";


upload.addEventListener("click", function () {
    inputFile.click(inputFile.value);
});

inputFile.addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        Result.src = reader.result;
        // savedImage.style.background = `url(${uploadedImage})`;
    });
    reader.readAsDataURL(this.files[0]);
});
