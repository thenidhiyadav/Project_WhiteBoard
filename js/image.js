/***********************************download Image*******************************/
const downloadTool = document.querySelector(".download-tool");
downloadTool.addEventListener("click", function(e) {
  const a = document.createElement("a");
  a.download="file.png";
  a.href= board.toDataURL("image/png");
  a.click();
  a.remove();
});