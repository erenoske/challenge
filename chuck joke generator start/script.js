const joke = document.getElementById('joke');
const button = document.getElementById('joke-btn');

function getJoke() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

  xhr.onreadystatechange = function () {
      if(this.readyState === 4 && this.status === 200) {
          const data = JSON.parse(this.responseText);
          const p = document.createElement('p');
          joke.innerHTML = '';
          p.innerHTML = data.value;
  
          joke.appendChild(p);
      }
  }

  xhr.send();
}

getJoke();

button.addEventListener('click', getJoke);
