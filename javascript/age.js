getAge = (dob)=>{
  let today = new Date();
  let birthdate = new Date(dob);
  let age = today.getFullYear() - birthdate.getFullYear();
  let m = today.getMonth() - birthdate.getMonth();
  if(m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
    age = age - 1;
  }
  return age;
}

(()=>{
  let age = document.querySelector('#age');
  age.textContent = getAge("7/20/1989");
})();
