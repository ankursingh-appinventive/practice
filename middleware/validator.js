const createValidator = (req,res,next) =>{
    // save to database

    if(!req.body){
        //throw error text is required

        return res.json({
            successful: false,
            error: {text :['text is required'] } });
    }
    next();
};

module.exports = createValidator;