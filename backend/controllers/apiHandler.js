exports.getAllActiveJobs = (req, res) => {

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `https://api.recman.no/v2/get/?key=${procces.env.GATSBY_REACT_API_RE_KEY}&scope=job&fields=name,startDate,endDate,salary`
    
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
