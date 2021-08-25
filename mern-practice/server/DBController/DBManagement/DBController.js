async function Create(schema, detail, response) {
    console.log(detail);
    const data = await new schema(detail);
    data.save((err, user) => {
        if (err) {
            console.log(err);
            response(err, null);
        } else {
            console.log(data, 'data');
            response(null, user);
        }
    });
}

async function GetSchemaData(schema, response) {
    const data = await schema.find({}).populate('user');
    response(null, data);
}

async function GetDataByEmail(schema, email) {
    try {
        const employee = await schema.findOne({
            email: email,
        });
        return employee;
    } catch (err) {
        console.log(err);
    }
}

async function UpdateData(schema, detail, response) {
    try {
        const { oldName, newName } = detail;
        const editUser = await schema.findOneAndUpdate(
            { employeeName: oldName },
            { employeeName: newName },
            { new: true },
            (err, doc) => {
                if (err) return response(err, null);
                response(null, doc);
            }
        );
    } catch (err) {
        console.log(err);
    }
}

async function DeleteData(schema, detail) {
    try {
        const { name } = detail;
        const deleteUser = await schema.findOneAndDelete({
            employeeName: name,
        });
        return deleteUser;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    Create,
    GetSchemaData,
    UpdateData,
    DeleteData,
    GetDataByEmail,
};
