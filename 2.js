// logic is to take the inputs and store it in the local storage and it will be taken in the next game page as turns tag   

function storeinput() {
    //stroing first player details 
  const inputname1 = document.getElementById("inputname1").value;
  const inputnick1 = document.getElementById("inputnick1").value;
    //storing second player details
  const inputname2 = document.getElementById("inputname2").value;
  const inputnick2 = document.getElementById("inputnick2").value;
  localStorage.setItem("inputname1", inputname1);
  localStorage.setItem("inputname2", inputname2);
  localStorage.setItem("inputnick1",inputnick1);
  localStorage.setItem("inputnick2",inputnick2);
  alert("Input stored in localStorage!");
  window.location.href = '3.html';
}
