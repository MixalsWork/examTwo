let searchInput = document.querySelector('.search__input');
let searchButton = document.querySelector('.search__button');
let historyList = document.querySelector('.history__list');
let searchList = document.querySelector('.search__list');
let favorite = document.querySelector('.favorite');
let newList = [];

function createListOfDog(breedsArray) {
  return breedsArray.map(element => element.name);
}

function createCard(query){
  getBreedByStringPromise(query)
    .then(breedInfo => {
        const customClasses = {
            containerClass: `card item-${breedInfo.breed.id}`,
            cardBodyClass:'card-body',
            imgClass: 'card-img-top',
            titleClass: 'card-title',
            descriptionClass: 'card-text'
        };
        const cardInfo = {
          containerId:breedInfo.breed.id,
          imgSrc: breedInfo.img.url,
          imgAlt: breedInfo.breed.name,
          title: breedInfo.breed.name,
          description: {
            life_span: breedInfo.breed.life_span,           
            temperament:breedInfo.breed.temperament,
            bred_for: breedInfo.breed.bred_for,
            breed_group: breedInfo.breed.breed_group,
          }
        };
        const breedCard = cardConstructor(cardInfo, customClasses);
        favorite.appendChild(breedCard);
        $('.favorite').slick("refresh");
})
}
$(document).ready(() => {
  addToHistoryFromLocalStorage()
  getAllBreedsPromise().then(breedsArray => {
    newList = createListOfDog(breedsArray);
    autocomplete(searchInput, newList);
  });
  searchButton.addEventListener('click', () => {
    getAllBreedSearch(searchInput.value)
      .then(breedInfo => {
        while (searchList.firstChild) {
          searchList.removeChild(searchList.firstChild);
        } // Удаляем список результатов поиска перед выводом нового
        breedInfo.forEach(element => {
          const customClasses = {
            listItemClass: 'search__list-item d-flex',
            listItemTextClass: 'flex-grow-1 list-group-item list-group-item-action list-group-item-info',
            listItemButtonClass: 'search__list-button btn btn-outline-info text-nowrap'
          };
          const listInfo = {
            title: element,
            buttonText: 'ADD TO FAV',
          };
          const breedListItem = listItemCreator(listInfo, customClasses);
          searchList.appendChild(breedListItem);
          let searchListButton = document.querySelectorAll('.search__list-button')
          searchListButton.forEach(element => {
            element.addEventListener('click', addToHistoryList)
          })
        });
      })
  })
});


  
