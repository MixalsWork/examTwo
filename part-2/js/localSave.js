// Создание\добавление в локал сторедж породы с проверкой на дубли
function saveRequestQuery(query) {
  let history;
    if (localStorage.history) {
        history = JSON.parse(localStorage.history)
    } else {
        history = [];
    }
    if(history.includes(query)){
     return
   }
    if(query != null ){
     history.push(query);
    }
    localStorage.history = JSON.stringify(history);
}
// получение елемента Хистори из локал сторедж
function getSavedQueries() {
  return localStorage.getItem('history');
}


