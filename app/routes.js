const express = require('express')
const getDefaultData = require('./user_data')
var userData = getDefaultData()
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
    res.redirect(`/records/${nhsNumber}/validate`)
  }

  if (nhsNumber.length !== 10) {
    req.session.nhsNumberError = 'Invalid nhs number - nhs numbers need to be 10 numerical digits'
  } else {
    req.session.nhsNumberError = `Unknown nhs number - No data for ${nhsNumber} was found in the system`
  }

  res.redirect('/home')
})

// Branching
router.get('/records/:nhsNumber/validate', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names
  const nhsNumber = req.params['nhsNumber']
  const dobError = req.session.dobConfirmError

  res.render('validate', { nhs_number: nhsNumber, error: dobError })
})

router.post('/records/:nhsNumber/validate', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const nhsNumber = req.params['nhsNumber']
  const day = req.session.data['date-of-birth-day']
  const month = req.session.data['date-of-birth-month']
  const year = req.session.data['date-of-birth-year']

  if (day !== '27' || month !== '3' || year !== '1945') {
    req.session.dobConfirmError = `Incorrect date of birth - try: 27 3 1945`
    res.redirect(`/records/${nhsNumber}/validate`)
  } else {
    req.session.dobConfirmError = null
    res.redirect(`/records/${nhsNumber}/summary`)
  }
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

// Branching
router.get('/records/:nhsNumber/summary/edit_phone_number', function (req, res) {
  // Get the answer from session data

  const nhsNumber = req.params['nhsNumber']

  const data = userData[nhsNumber]
  if (data) {
    res.render(`nhs_templates/summary_edit_phone`, data)
  } else {
    req.session.data.nhsNumberError = nhsNumber
    res.redirect('/home')
  }
})

// Branching
router.post('/records/:nhsNumber/summary/edit_phone_number', function (req, res) {
  // Get the answer from session data

  const nhsNumber = req.params['nhsNumber']

  if (userData[nhsNumber]) {
    userData[nhsNumber]['summary']['phone'] = req.body['phone-number']
  }
  res.redirect(`/records/${nhsNumber}/summary`)
})

// Branching
router.get('/records/:nhsNumber/summary/edit_email', function (req, res) {
  // Get the answer from session data

  const nhsNumber = req.params['nhsNumber']

  const data = userData[nhsNumber]
  if (data) {
    res.render(`nhs_templates/summary_edit_email`, data)
  } else {
    req.session.data.nhsNumberError = nhsNumber
    res.redirect('/home')
  }
})

// Branching
router.post('/records/:nhsNumber/summary/edit_email', function (req, res) {
  // Get the answer from session data

  const nhsNumber = req.params['nhsNumber']

  if (userData[nhsNumber]) {
    userData[nhsNumber]['summary']['email'] = req.body['email']
  }
  res.redirect(`/records/${nhsNumber}/summary`)
})


// Branching
router.get('/records/:nhsNumber/supermarkets/register', function (req, res) {
  // Get the answer from session data

  const nhsNumber = req.params['nhsNumber']

  const data = userData[nhsNumber]
  if (data) {
    res.render(`nhs_templates/supermarkets_register`, data)
  } else {
    req.session.data.nhsNumberError = nhsNumber
    res.redirect('/home')
  }
})

router.post('/records/:nhsNumber/supermarkets/register', function (req, res) {
  // Get the answer from session data

  const nhsNumber = req.params['nhsNumber']

  if (userData[nhsNumber]) {
    userData[nhsNumber].supermarkets.registered = {
      value: true,
      action: 'Support tool',
      date: 'Today'
    }
    userData[nhsNumber].supermarkets.inFile = true
  }
  res.redirect(`/records/${nhsNumber}/supermarkets`)
})

router.get('/clear-data', function (req, res) {
  // Get the answer from session data

  userData = getDefaultData()
  res.redirect('/home')
})

module.exports = router
