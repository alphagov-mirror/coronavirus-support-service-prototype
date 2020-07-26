const express = require('express')
const userData = require('./user_data')
const router = express.Router()

// Add your routes here - above the module.exports line
router.get('/home', function (req, res) {
  const nhsNumberError = req.session.nhsNumberError
  req.session.nhsNumberError = null

  res.render('home', { 'error': nhsNumberError })
})

// Branching
router.post('/find', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const nhsNumber = req.session.data['nhs_number']

  if (userData[nhsNumber]) {
    req.session.nhsNumberError = null
    res.redirect(`/records/${nhsNumber}/summary`)
  }

  if (nhsNumber.length !== 10) {
    req.session.nhsNumberError = 'Invalid nhs number - nhs numbers need to be 10 numerical digits'
  } else {
    req.session.nhsNumberError = `Unknown nhs number - No data for ${nhsNumber} was found in the system`
  }

  res.redirect('/home')
})

// Branching
router.get('/records/:nhsNumber/supermarkets', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const nhsNumber = req.params['nhsNumber']

  const data = userData[nhsNumber]
  if (data) {
    res.render(`nhs_templates/supermarkets`, data)
  } else {
    req.session.data.nhsNumberError = nhsNumber
    res.redirect('/home')
  }
})

// Branching
router.get('/records/:nhsNumber/timeline', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const nhsNumber = req.params['nhsNumber']

  const data = userData[nhsNumber]
  if (data) {
    res.render(`nhs_templates/timeline`, data)
  } else {
    req.session.data.nhsNumberError = nhsNumber
    res.redirect('/home')
  }
})

// Branching
router.get('/records/:nhsNumber/deliveries', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const nhsNumber = req.params['nhsNumber']

  const data = userData[nhsNumber]
  if (data) {
    res.render(`nhs_templates/deliveries`, data)
  } else {
    req.session.data.nhsNumberError = nhsNumber
    res.redirect('/home')
  }
})

// Branching
router.get('/records/:nhsNumber/summary', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const nhsNumber = req.params['nhsNumber']

  const data = userData[nhsNumber]
  if (data) {
    res.render(`nhs_templates/summary`, data)
  } else {
    req.session.data.nhsNumberError = nhsNumber
    res.redirect('/home')
  }
})

module.exports = router
