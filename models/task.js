'use-strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  task_name:{
    type: String,
    required: true
  },
  tags:{
    type: Array,
    required: false
  },
  deadline_at:{
    type: Date,
    required: false
  },
  userid:{ type: Schema.Types.ObjectId, ref: 'User' },
  status:{
    type: String,
    required: true
  }
},
  {
    timestamps:
    {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
);

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
