fetch('https://jsonplaceholder.typicode.com/todo')
      .then(response => {
        if(!response.ok){
            throw new Error(response)
        }
        return response.json()
      })
      .then(json => console.log(json))