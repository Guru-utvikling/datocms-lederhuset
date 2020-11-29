exports.getAllActiveJobs = (req, res) => {

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = 'https://api.recman.no/v2/get/?key=201026104029k25a09063e2e073313a9e47dfd3cc09df1256113943&scope=job&fields=name,startDate,endDate,salary'
    
    return fetch(proxyurl + url, {
        method: "GET"
    })
        .then(res => {
            return res(res.data);
        })
        .catch(err => console.log(err));
}

exports.registerCV = (req,res) =>{

}
