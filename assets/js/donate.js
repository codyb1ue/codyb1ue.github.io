<script>
function myFunction() {
  var modal = document.createElement("div");
  modal.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); display: flex; justify-content: center; align-items: center;";

  var image = document.createElement("img");
  image.src = "图片的链接";
  image.style.cssText = "max-width: 80%; max-height: 80%;";

  modal.appendChild(image);
  
  var closeButton = document.createElement("button");
  closeButton.innerText = "Close";
  closeButton.style.cssText = "position: absolute; top: 10px; right: 10px; padding: 5px 10px; background-color: transparent; border: none; color: #fff; cursor: pointer;";
  closeButton.onclick = function() {
    modal.remove();
  };

  modal.appendChild(closeButton);
  document.body.appendChild(modal);
}
</script>
