function addToHistoryList() {
    let historyCurrentList = document.querySelectorAll('.history__list-text')
    let historyCurrentArray= [];
    historyCurrentList.forEach(element => {
      historyCurrentArray.push(element.innerHTML)
      return historyCurrentArray
    });
    if(historyCurrentArray.includes(this.previousSibling.innerHTML)){
      return
    }else{
      saveRequestQuery(this.previousSibling.innerHTML);
      getBreedByStringPromise(this.previousSibling.innerHTML);
      addToHistoryListLocal(this.previousSibling.innerHTML);
      createCard(this.previousSibling.innerHTML)
    }
}