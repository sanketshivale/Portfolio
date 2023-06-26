const path =require('path');
exports.getHome = (req,res)=>{
    const filePath = path.join(__dirname, '../views', 'home.html');
    res.sendFile(filePath);
}

