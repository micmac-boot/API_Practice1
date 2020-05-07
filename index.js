const USERS_API = "https://jsonplaceholder.typicode.com/users";

async function callApi() {
  const res = await window.fetch(USERS_API);
  const users = await res.json();   // JSON形式にして見やすくしている。
  console.log(users);
}

callApi();

// then 
function callApiWithThen() {
  const users = fetch(USERS_API)
    .then(function (res) {      //つなぐ書き方はこういうのがあるよ
      return res.json();
    })
    .then(function (users) {
      console.log(users);
    });
}
//以上が一段落目とは別のやり方。fetchを書くやり方。


// XMLHttpRequest
function callApiWithXhr() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", USERS_API);
  xhr.responseType = "json";
  xhr.send();
  xhr.onload = function () {
    console.log(xhr.response);
  };
}