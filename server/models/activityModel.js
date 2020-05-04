const  mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    activity_date: { type: Date, default: Date.now, required: true },
    client_name: { type: String, required: true },
    job_reference: { type: String, required: true, unique: true },
    description_of_activity: { type: String },
    start_time: { type: Date },
    end_time: { type: Date },
    billable_hours: { type: Number },
    rate: { type: Number },
    job_status: { type: String, enum: ['open', 'closed', 'completed'] },
    consultant_remark: { type: String },
    client_remark: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Activity', activitySchema);

