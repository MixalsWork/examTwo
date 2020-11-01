// Удаление из списка фаворит пород
function deleteFromHistory(){
    this.parentNode.remove();
    let temp = document.querySelectorAll(`.${this.parentNode.dataset.listItemId}`);
    for(let i =0; i<temp.length;i++){
      temp[i].innerHTML =''
      temp[i].remove()
    }
    deleteFromLocalStorage(this.previousSibling.innerHTML)
    $('.favorite').slick("refresh");
  }
// Удаление породы из локал сторедж
  function deleteFromLocalStorage(value){
    let temp = JSON.parse(getSavedQueries());
    temp = temp.filter(function(item) { 
      return item !== value
  })
    temp = JSON.stringify(temp)
    localStorage.setItem('history',temp)
  }
// Создание списка фаворит пород из локал сторедж после перезагрузки страницы
function addToHistoryFromLocalStorage(){
    let myHistory = JSON.parse(getSavedQueries())  
    historyList.innerHTML ='';
    myHistory.forEach(element => {
        getBreedByStringPromise(element)
        .then(breedInfo => {
          const customClasses = {
            listItemClass: 'history__list-item d-flex',
            listItemTextClass: 'history__list-text flex-grow-1 list-group-item list-group-item-action list-group-item-info',
            listItemButtonClass: 'history__list-button btn btn-outline-danger text-nowrap'
          };
          const listInfo = {
            title: breedInfo.breed.name,
            listItemDataId:`item-${breedInfo.breed.id}`,
            buttonText: 'DELETE',
          };
          const breedListItem = listItemCreator(listInfo, customClasses);
          historyList.appendChild(breedListItem);
          let historyListButton = document.querySelectorAll('.history__list-button')
          historyListButton.forEach(element => {
            element.addEventListener('click', deleteFromHistory)
          });
          createCard(element)
          $('.favorite').slick("refresh");
        })
    });
  }
// Добавление из результата поиска в список фаворит , навешивание на кнопки функций  и обновление слайдера
function addToHistoryListLocal(query) {
  getBreedByStringPromise(query)
  .then(breedInfo => {
    const customClasses = {
      listItemClass: 'history__list-item d-flex',
      listItemTextClass: 'history__list-text flex-grow-1 list-group-item list-group-item-action list-group-item-info',
      listItemButtonClass: 'history__list-button btn btn-outline-danger text-nowrap'
    };
    const listInfo = {
      title: breedInfo.breed.name,
      listItemDataId:`item-${breedInfo.breed.id}`,
      buttonText: 'DELETE',
    };
    const breedListItem = listItemCreator(listInfo, customClasses);
    historyList.appendChild(breedListItem);
    let historyListButton = breedListItem.lastChild;
    historyListButton.addEventListener('click', deleteFromHistory)
    
    $('.favorite').slick("refresh");
  })

}