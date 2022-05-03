const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema({
        name: {
            type: String,
            nullable: true,
        },
        ceo: {
            type: String,
            nullable: true,
        },
        address: {
            type: String,
            nullable: true,
        }
    },
    {
        timestamps: true,
    }
);
module.exports = mongoose.model("Company", companySchema);
