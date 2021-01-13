
exports.getAllActiveJobs = (req, res) => {

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = 'https://api.recman.no/v2/get/?key=201026104029k25a09063e2e073313a9e47dfd3cc09df1256113943&scope=job&fields=name,startDate,endDate,salary'

    return fetch(proxyurl + url, {
        method: "GET"
    })
        .then(res => {

            return res.json()

        })
        .catch(err => console.log(err));
}

/*exports.registerCV = (req,res,firstName,lastName,email,gender,dob) =>{

    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          key: process.env.REACT_API_RE_KEY,
          scope: "candidate",
          operation: "insert",
          data: {
            firstName: "Damian ",
            lastName: "Kursa",
            email: "damian@guru-utvikling.no",
            gender: "male",
            dob: "1900-12-1",
          },
        }),
      }
      fetch("https://api.recman.no/v2/post/", requestOptions)
        .then(async (response) => {
          const data = await response.json()
      
          // check for error response
          if (!response.ok) {
            // get error message from body or default to response status
            const error = (data && data.message) || response.status
            return Promise.reject(error)
          }
      
          this.setState({ postId: data.id })
        })
        .catch((error) => {
          this.setState({ errorMessage: error.toString() })
          console.error("There was an error!", error)
        })
} */
