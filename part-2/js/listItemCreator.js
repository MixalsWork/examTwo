function listItemCreator(listInfo, classOptions) {
    const listItem = document.createElement('li');
    if (classOptions.listItemClass) {
        listItem.className = classOptions.listItemClass;
    }
    if (listInfo.listItemDataId) {
        listItem.dataset.listItemId = listInfo.listItemDataId;
    }
    const listItemText = document.createElement('div');
    if (classOptions.listItemTextClass) {
        listItemText.className = classOptions.listItemTextClass;
    }
    if (listInfo.title) {
        listItemText.innerText = listInfo.title;
      }
    const listItemButton = document.createElement('button');
    if (classOptions.listItemButtonClass) {
        listItemButton.className = classOptions.listItemButtonClass;
    }
    if (listInfo. buttonText) {
        listItemButton.innerText = listInfo.buttonText;
    }
    listItem.appendChild(listItemText);
    listItem.appendChild(listItemButton);
    return listItem;
  }
  // example
  {/*<li class="search__list-item d-flex">
<div class="flex-grow-1 list-group-item list-group-item-action list-group-item-info">A
            simple info list group item</div>
<button type="button" class="search__list-button btn btn-outline-info text-nowrap ">ADD TO
    FAV</button>
                        </li>*/}
  
  