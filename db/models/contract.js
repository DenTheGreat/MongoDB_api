const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contractSchema = new Schema(
    {
        name: {
            type: String,
            nullable: true,
        },
        number: {
            type: String,
            nullable: true,
        },
        sum: {
            type: Number,
            nullable: true,
        },
        date_start: {
            type: Date,
            nullable: true,
        },
        date_finish: {
            type: Date,
            nullable: true,
        },
        prepayment: {
            type: Number,
            nullable: true,
        },
        firm_id: {
            type: [Schema.Types.ObjectId],
            nullable: true,
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Contract', contractSchema);