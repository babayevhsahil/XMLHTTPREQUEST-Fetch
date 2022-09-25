let btn = document.querySelector('#btn');
btn.addEventListener('click',() => {
  fetch('https://randomuser.me/api/?results=100')
  .then(response => response.json())
  .then(data => {
    let item = '';
    console.log(data.results);
    data.results.forEach(user => {
      item += `
      <div class="col-lg-3">
      <div class="card">
        <img class="card-img-top" src=${user.picture.large} alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${user.email}</h5>
          <p class="card-text">${user.name.first} ${user.name.last}</p>
        </div>
        </div>
    </div>
      `
    })
    document.getElementById('box').innerHTML = item;
  })
  .catch(err => console.log(err))
})