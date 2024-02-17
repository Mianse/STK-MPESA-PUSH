const axios = require("axios")

const createToken = async (req,res,next)=>{
    const secret = "VglEAQNPPQUBwWEV7vTGphly70F6RYZWR2AWAUUt7ZB8uBfVUOtYPpoFacB7an8F"
    const consumer = "6sxC6G7ppG29TFSEuWDxwviIlkncle3gvlPlNglLIMNYEpcv"
    const auth = new Buffer.from(`${consumer}: ${secret}`).toString("base64")

    await axios.get(
        "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
        {
         headers:{
            authorization: `Basic ${auth}`
         }   
        }
    ).then((data)=>{
        console.log(data.data)
        next()
   })
    .catch((err)=>{
        console.log(err)
        res.status(400).json(err.message)
    })

}

module.exports = {createToken}