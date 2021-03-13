const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const incidentSchema = new Schema({
  date:"String",
  Time:String,
  Guardname:String,
  Organisation:String,
  SiteName:String,
  Incident:String,
  Actions:String
  }, {
    timestamps: true,
  });
  
  const Incident= mongoose.model('Incident', incidentSchema);
  
  module.exports = Incident;