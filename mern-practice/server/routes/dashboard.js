const express = require('express');
const {
    GetSchemaData,
    Create,
} = require('../DBController/DBManagement/DBController');
const dashboard = require('../DBController/DBSchema/dashboard');
const { FileUpload } = require('../Utils/fileUpload');
const app = express();

app.use(express.json());

const router = express.Router();

router.get('/read', async (req, res) => {
    GetSchemaData(dashboard, (err, result) => {
        if (err) {
            return res.json({ err: err });
        }
        res.json({ data: result });
    });
});

var upload = FileUpload();
router.post('/create', upload.single('image'), async (req, res) => {
    const { title, description, user } = req.body;
    const image = req.file.path;
    const data = {
        title: title,
        description: description,
        image: image,
        user: user,
    };

    Create(dashboard, data, (err, result) => {
        if (err) {
            res.json({ err });
        } else {
            res.json(result);
        }
    });
});
module.exports = router;
