const shortid = require("shortid");
const URL = require('../models/url') ;//here url is model we made

async function handleGenerateNewShortURL(req , res){
    const shortId = shortid(8);

    const body = req.body;
    //here body.url is post request made in postman (raw , type : jsom)
//     //{
//     "url" : "https://codeforces.com/contest/1877"
// }

    if(!body.url) return res.status(400).json({error: 'url is required'});
    await URL.create({
        shortId : shortId,
        redirectUrl: body.url,
        visitHistory:[]
    })

    return res.json({id: shortId})
};

async function handleGetAnalytics(req , res){
        const shortId = req.params.shortId;
        const result = await URL.findOne({shortId});
        return res.json({
            totalClicks: result.visitHistory.length,
             analytics: result.visitHistory
        })
}

module.exports = {
    handleGenerateNewShortURL,
    handleGetAnalytics
}