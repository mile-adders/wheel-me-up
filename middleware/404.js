'use strict';
module.exports =(req,ews,next)=>{
    let error = {error:' Resource Not Found'};
    res.statusCode = 404;
    res.statusMessage = 'Not Found';
    res.setHeader('Content-Type','application/json');
    res.write(Json.stringify(error));
    res.end();
}