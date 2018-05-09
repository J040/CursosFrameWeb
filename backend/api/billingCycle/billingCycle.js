const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Informe o nome do credito"] },
  value: { type: Number, min: 0, required: [true, "Informe o valor do credito"] }
})

const debtSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Informe o nome do débito"] },
  value: { type: Number, min: 0, required: [true, "Informe o valor do débito"] },
  status: { type: String, required: false, uppercase: true, enum: ['PAGO', 'PENDENTE', 'AGENDADO'] }
})

const billingCycleSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Informe o nome da BillingCycle"] },
  month: { type: Number, min: [1, "Mês não existente"], max: [12, "Mês não existente"], required: [true, "Informe o mês da BillingCycle"] },
  year: { type: Number, min: 1970, max: 2100, required: [true, "Informe o ano da BillingCycle"] },
  credits: [creditSchema],
  debts: [debtSchema]
})

module.exports = restful.model('BillingCycle', billingCycleSchema)
