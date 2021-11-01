//getting the thesaurus terms for a synonym

//define the term 
function defineAll(word) {

    let term = word
    
    //define the URL to call
    function defineURL(search) {
      let newUrl = 'https://www.openthesaurus.de/synonyme/search?q=' + search + '&format=application/json'
      return (newUrl)
    }
  
      //call the function
      let url = defineURL(term)
  
    //call the api
      fetch(url)
      .then(x => x.json())
      .then(function (y) {
          if (y.synsets.length > 0) {
              for (let i = 0; i < y.synsets.length; i++) {
                  for (let m = 0; m < y.synsets[i].terms.length; m++) {
                      console.log(y.synsets[i].terms[m].term)
                  }
              }
          }
          else {
              console.log('no synonyms found')
          }
      })
  }
  
  //write down synonym
  defineAll('sauer')