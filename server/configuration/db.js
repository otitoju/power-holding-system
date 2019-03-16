if(process.env.NODE_ENV === 'production'){
    module.exports = {
        mongoURI:'mongodb://otitoju:sci15csc067@ds247830.mlab.com:47830/AEDC'
    }
}
else {
    module.exports = {
        mongoURI:'mongodb://localhost:27017/AEDC'   
    }
}