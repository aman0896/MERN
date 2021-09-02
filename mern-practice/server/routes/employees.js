const express = require('express');
const {
    Create,
    UpdateData,
    DeleteData,
    GetSchemaData,
    GetDataByEmail,
} = require('../DBController/DBManagement/DBController');
const EmployeeSchema = require('../DBController/DBSchema/employeeSchema');
const { FileUpload } = require('../Utils/fileUpload');
const { SignJWt, VerifyToken } = require('../Utils/jwt');
const {
    PasswordEncryption,
    PasswordCheck,
} = require('../Utils/passwordSecurity');
const app = express();

app.use(express.json());

const router = express.Router();

router.get('/read', async (req, res) => {
    GetSchemaData(EmployeeSchema, (err, result) => {
        if (err) {
            return res.json({ err: err });
        }
        res.json({ data: result });
    });
});

router.post('/login', async (req, res) => {
    try {
        if (req.body) {
            console.log(req.body);
            const { email, password } = req.body;
            const token = SignJWt(email);
            console.log(token, 'jwt');
            const employee = await GetDataByEmail(EmployeeSchema, email);
            if (employee) {
                console.log(employee, 'employee');
                const compare = await PasswordCheck(
                    password,
                    employee.password
                );
                if (compare) {
                    return res.json({
                        msg: 'login success',
                        token: token,
                        success: true,
                    });
                } else
                    return res.json({
                        msg: 'login fail incorrect password',
                        success: false,
                    });
            } else
                return res.json({
                    msg: 'login fail user does not exist',
                    success: false,
                });
        }
    } catch (err) {
        res.json(err);
    }
});

router.get('/verify-user', VerifyToken, (req, res) => {
    const data = req.user;
    if (data) {
        return res.json({ data: data, success: true });
    }
});

router.post('/signup', async (req, res) => {
    console.log(req.body, 'check');
    try {
        if (req.body) {
            const { firstname, lastname, password, email, phone } = req.body;
            PasswordEncryption(password, (err, hash) => {
                if (err) return err;
                Create(
                    EmployeeSchema,
                    {
                        firstname: firstname,
                        lastname: lastname,
                        password: hash,
                        phone: phone,
                        email: email,
                    },
                    (err, result) => {
                        if (err) {
                            if (err.code === 11000) {
                                return res.json({
                                    msg: 'Name Already Exist',
                                    success: false,
                                });
                            }
                            return res.json({
                                msg: 'Signup fail',
                                success: false,
                            });
                        }
                        return res.json({
                            msg: 'signu success',
                            success: true,
                        });
                    }
                );
            });
        }
    } catch (err) {
        res.json(err);
    }
});

router.patch('/edit', async (req, res) => {
    try {
        if (req.body) {
            UpdateData(EmployeeSchema, req.body, (err, result) => {
                if (err) {
                    return res.json(err);
                }
                res.json(result);
            });
        }
    } catch (err) {
        res.json(err);
    }
});
router.delete('/delete', async (req, res) => {
    try {
        if (req.body) {
            const data = await DeleteData(EmployeeSchema, req.body);
            if (!data) {
                return res
                    .status(404)
                    .json({ success: false, msg: 'user not found' });
            }
            res.json({ success: true, msg: 'user deleted' });
        }
    } catch (err) {
        res.json(err);
    }
});

router.get('/get', async (req, res) => {
    res.json({ msg: 'hello from server' });
});

var upload = FileUpload();
router.post('/upload', upload.single('image'), (req, res, next) => {});

module.exports = router;
