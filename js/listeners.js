document.getElementById("addList").addEventListener("click", function () {
  idvalue = "";
  addElements("#container", 10, kodersArr);
});

document.getElementById("orden").addEventListener("change", function () {
  filterAZ();
});

document.getElementById("botones1").addEventListener("click", function () {
  idvalue = document.getElementById("botones1").value;
  filterAZ();
  console.log("botones 1 listener");
});

document.getElementById("botones2").addEventListener("click", function () {
  idvalue = document.getElementById("botones2").value;
  filterAZ();
  console.log("botones 2 listener");
});

document.getElementById("botones3").addEventListener("click", function () {
  idvalue = document.getElementById("botones3").value;
  filterAZ();
  console.log("botones 3 listener");
});
