'use strict';
/*
// Создаётся объект promise
let promise = new Promise((resolve, reject) => {

 
    setTimeout(() => {
        // переведёт промис в состояние fulfilled с результатом "result"
        reject(new Error("time is out"));
      }, 1000);
});

let a=function(result){
      // первая функция-обработчик - запустится при вызове resolve
      alert("Fulfilled: " + result); // result - аргумент resolve
} 
// promise.then навешивает обработчики на успешный результат или ошибку
promise
  .then(a,
    error => alert("Rejected: " + error.message) // Rejected: время вышло!
  );

  for(let i=0;i<10;i++)
  {
    i++;
  }


  let p = new Promise((resolve, reject) => {
    // то же что reject(new Error("o_O"))
    throw new Error("o_O");
  })
  
  p.catch(alert); // Error: o_O
*/
  function httpGet(url) {

    return new Promise(function(resolve, reject) {
  
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
  
      xhr.onload = function() {
        if (this.status == 200) {
          resolve(this.response);
        } else {
          var error = new Error(this.statusText);
          error.code = this.status;
          reject(error);
        }
      };
  
      xhr.onerror = function() {
        reject(new Error("Network Error"));
      };
  
      xhr.send();
    });
  
  }
  'use strict';

  // сделать запрос
  httpGet(`https://api.github.com/users/KlimenkoAV`)
    // 3. Вывести аватар на 3 секунды (можно с анимацией)
    .then(githubUser => {
      console.log(githubUser);
      githubUser = JSON.parse(githubUser);
  
      let img = new Image();
      img.src = githubUser.avatar_url;
      img.className = "promise-avatar-example";
      document.body.appendChild(img);
  
      setTimeout(() => img.remove(), 3000); // (*)
    });