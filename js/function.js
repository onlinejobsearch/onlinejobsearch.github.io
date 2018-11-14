
// saving users input into local storage 
var button = document.getElementById('submit'); 
var form = document.getElementById('findjobs');

var findjobs = []
button.addEventListener('click', (e) => {
    e.preventDefault()

  let Jobtitles = document.getElementById('Jobtitles').value || undefined
  let location = document.getElementById('Location').value || undefined
  let x = document.getElementById("Distance").selectedIndex;
  let Distance = document.getElementsByClassName("distanceoption")[x].value || undefined;
  let SalaryMin = document.getElementById('SalaryMin').value || undefined
  let SalaryMax = document.getElementById('SalaryMax').value || undefined
  let y = document.getElementById("Salarytype").selectedIndex;
  let Salarytype = document.getElementsByClassName("salaryoption")[y].value || undefined;
  let z = document.getElementById("Postedinthe").selectedIndex;
  let Postedinthe = document.getElementsByClassName("postoption")[z].value || undefined;

    let job = {
        title: Jobtitles,
        location: location,
        distance: Distance,
        minSalary: SalaryMin,
        maxSalary: SalaryMax,
        type: Salarytype,
        time: Postedinthe  
    }

    findjobs.push(job);

    // Stores the JavaScript object as a string
    localStorage.setItem('findjobs', JSON.stringify(findjobs));

    console.log(localStorage.getItem('findjobs'))

    window.location.pathname = '/table.html'

})