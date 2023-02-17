//
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const multer = require('multer');
const crypto = require('crypto');

const app = express();

//settings
app.use(cors ());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
const port = 3500;

// IMAGE UPLOAD MIDDLEWARE:

//package ID:
const packageID = () => {
    return crypto.randomBytes(5).toString('hex');
}

// Destination
const multerStorage = multer.diskStorage( {
    destination: (req, file, cb) =>{
        cb (null, 'public/packages');
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split('/')[1];
        cb (null, `${file.fieldname}_${Date.now()}.${ext}`)
    }
});

// Filter extension
const filterExtension = (req, file, cb) => {
    if(
        file.mimetype.split('/')[1] === 'jpg' ||
        file.mimetype.split('/')[1] === 'jpeg' ||
        file.mimetype.split('/')[1] === 'png' ||
        file.mimetype.split('/')[1] === 'webp' ||
        file.mimetype.split('/')[1] === 'svg' ||
        file.mimetype.split('/')[1] === 'gif' 
    ){
        return cb (null, true);
    }
    return cb (new Error("File type not supported!"), false);
};

// Calling multer
const upload = multer({
    storage: multerStorage,
    fileFilter: filterExtension
})
const uploadImage = upload.single('package_image');

//DATABASE connection
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'trs',
    port: 3306,
});
const db = pool.promise();

//ENDPOINTS

// ADMIN LOGIN:
const admin = express.Router();
admin.post('/login', (req, res, next) => {
    const sql = 
    `SELECT * FROM admin WHERE username='${req.body.username}'`;
    db.query(sql)
    .then( rows => {
        if(rows[0].length < 1){
            return res.status(404).json({
                statusText: 'Admin not found',
            });
        };
        if(rows[0][0].password !== req.body.password){
            return res.status(404).json({
                statusText: 'Invalid password',
            });
        };
        res.status(201).json({
            statusText: 'login successful'
        });

    })
    .catch(err => {
        res.status(404).json({
            statusText: err.message,
        })
    })
    //console.log(req.body);
});

// ADMIN CREATE PACKAGES:
admin.post('/create_packages',(req, res) => {
    uploadImage(req, res, error => {
        if(error instanceof multer.MulterError){
            return res.status(400).json({
                statusText: error.message,
            });
        }
        else if (error){
            return res.status(400).json({
                statusText: error.message,
            });
        }
        const {...package} = req.body;
        const {path} = req.file;

        const newPackage = {
            package_id: packageID(),
            ...package,
            package_image: path
        };
        sql ='INSERT INTO packages SET?';
        db.query(sql, newPackage)
        .then( (rows) => {
            if(rows[0].affectedRows < 1){
                return res.status(400).json({
                    statusText: "package created successfully",
                });
            }
            res.status(201).json({
                row:rows,
                statusText: "package created successfully",
            });
        })
        .catch( (error) => {
            res.status(400).json({
                statusText: error.message,
            });
        });
        console.log(newPackage);
    });
});

app.use('/admin', admin);

app.listen(port);