function getDefaultData () {
  return {
    '9730412414': {
      persona: 'Was removed from the SPL',
      summary: {
        nhsNumber: '9730412414',
        name: 'Sarah Philips',
        dob: '5 January 1978',
        latestAddress: ['72 Guild Street', 'London', 'SE23 6FH'],
        latestAddressLA: 'Lewisham',
        nhsAddress: ['72 GUILD ST, LONDON', 'SE23 6FH'],
        nhsAddressLA: 'Lewisham',
        phone: '07700 900457',
        email: 'sarah.philips@example.com',
        deceased: false,
        dod: ''
      },
      spl: {
        value: false,
        action: 'Removed',
        date: '14/09/2020'
      },
      supermarkets: {
        registered: {
          value: true,
          action: 'Webform',
          date: '05/09/2020'
        }
      },
      timeline: [
        {
          date: '12/03/2020',
          event: 'Added to SPL',
          description: 'Added to the shielded patient list',
          badges: [],
          eventDetails: [
            { field: 'SPL Source', value: 'Initial SPL' },
            { field: 'Address', value: '72 GUILD ST, LONDON' },
            { field: 'Postcode', value: 'SE23 6FH' }
          ]
        },
        {
          date: '01/09/2020',
          event: 'Web registration',
          description: null,
          badges: [{
            text: 'Care needs: no',
            inverted: true
          }, {
            text: 'Supermarket slots: no',
            inverted: true
          }],
          eventDetails: [
            { field: 'Address', value: '72 Guild Street, Forest Hill' },
            { field: 'Postcode', value: 'SE236FH' }
          ]
        },
        {
          date: '05/09/2020',
          event: 'Web registration',
          description: null,
          badges: [{
            text: 'Care needs: no',
            inverted: true
          }, {
            text: 'Supermarket slots: yes',
            inverted: false
          }],
          eventDetails: [
            { field: 'Address', value: '72 Guild Street, Forest Hill' },
            { field: 'Postcode', value: 'SE236FH' }
          ]
        },
        {
          date: '14/09/2020',
          event: 'Removed from the shielded patient list',
          description: 'Removed from SPL',
          badges: [],
          eventDetails: [
            { field: 'SPL Source', value: 'GP WEEKLY UPDATE' },
            { field: 'Reason', value: 'No further need to shield' }
          ]
        }
      ]
    },
    '97807475326': {
      persona: 'Has not registered',
      summary: {
        nhsNumber: '97807475326',
        name: 'Emmanuel Richards',
        dob: '3 July 1945',
        latestAddress: ['58 LEICESTER RD', 'WIGSTON', 'LE18 1DR'],
        latestAddressLA: 'Leicester',
        nhsAddress: ['58 LEICESTER RD', 'WIGSTON', 'LE18 1DR'],
        nhsAddressLA: 'Leicester',
        phone: '07745 103029',
        email: '',
        deceased: false,
        dod: ''
      },
      spl: {
        value: true,
        action: 'Added',
        date: '29/03/2020'
      },
      supermarkets: {
        registered: {
          value: false,
          action: '',
          date: ''
        },
        inFile: false
      },
      timeline: [
        {
          date: '12/08/2020',
          event: 'Added to SPL',
          description: 'Added to the shielded patient list',
          badges: [],
          eventDetails: [
            { field: 'SPL Source', value: 'GP WEEKLY UPDATE' },
            { field: 'Address', value: '58 LEICESTER RD, WIGSTON' },
            { field: 'Postcode', value: 'LE18 1DR' }
          ]
        }
      ]
    },
    '0111053029': {
      persona: 'Has different address from NHS address',
      summary: {
        nhsNumber: '0111053029',
        name: 'Andrew Moseley',
        dob:
          '17 June 1946',
        latestAddress:
          ['105 Ravenhurst Street', 'Bordesley', 'Birmingham', 'B12 0HB'],
        latestAddressLA: 'Birmingham city council',
        nhsAddress:
          ['150 HIGH ST, TEWKESBURY', 'GL20 5JU'],
        nhsAddressLA: 'Tewkesbury borough council',
        phone: '07486 900456',
        email: 'andrew.moseley@example.com',
        deceased: false,
        dod: ''
      },
      spl: {
        value: true,
        action: 'Added',
        date: '30/03/2020'
      },
      supermarkets: {
        registered: {
          value: true,
          action:
            'Webform',
          date:
            '10/09/2020'
        },
        inFile: true
      },
      timeline: [
        {
          date: '12/03/2020',
          event: 'Added to SPL',
          description: 'Added to the shielded patient list',
          badges: [],
          eventDetails: [
            { field: 'SPL Source', value: 'Initial SPL' },
            { field: 'Address', value: '150 HIGH ST, TEWKESBURY' },
            { field: 'Postcode', value: 'GL20 5JU' }
          ]
        },
        {
          date: '5/09/2020',
          event: 'Web registration',
          description: null,
          badges: [{
            text: 'Care needs: yes',
            inverted: true
          }, {
            text: 'Supermarket slots: no',
            inverted: false
          }],
          eventDetails: [
            { field: 'Address', value: '105 Ravenhurst Street, Bordesley, Birmingham' },
            { field: 'Postcode', value: 'B12 0HB' }
          ]
        },
        {
          date: '10/09/2020',
          event: 'Web registration',
          description: null,
          badges: [{
            text: 'Care needs: no',
            inverted: false
          }, {
            text: 'Supermarket slots: yes',
            inverted: true
          }],
          eventDetails: [
            { field: 'Address', value: '105 Ravenhurst Street, Bordesley, Birmingham' },
            { field: 'Postcode', value: 'B12 0HB' }
          ]
        }
      ]
    },
    '2082035560': {
      persona: 'Deceased',
      summary: {
        nhsNumber: '2082035560',
        name: 'Shilpa Chaghanti',
        dob: '5th May 1965',
        latestAddress: ['1b Sheaf Street', 'Sheffield', 'S1 2BP'],
        latestAddressLA: 'Sheffield city council',
        nhsAddress: ['1 SHEAF ST, SHEFFIELD', 'S1 2BP'],
        nhsAddressLA: 'Sheffield city council',
        phone: '0114 272 9003',
        email:
          'shillpa.chaghanti@example.com',
        deceased: true,
        dod: '14th Sept 2020'
      },
      spl: {
        value: false,
        action:
          'Removed',
        date:
          '14/09/2020'
      },
      supermarkets: {
        registered: {
          value: true,
          action:
            'IVR',
          date:
            '01/04/2020'
        },
        inFile: true,
      },
      timeline: [
        {
          date: '30/03/2020',
          event: 'NHS Shielded Patient List',
          description: 'Added to SPL',
          badge: null,
          eventDetails: [
            { field: 'SPL Source', value: 'Initial SPL' },
            { field: 'Address', value: '1 SHEAF ST, SHEFFIELD' },
            { field: 'Postcode', value: 'S1 2BP' }
          ]
        },
        {
          date: '01/09/2020',
          event: 'Web registration',
          description: null,
          badges: [{
            text: 'Care needs: yes',
            inverted: false
          }, {
            text: 'Supermarket slots: yes',
            inverted: false
          }],
          eventDetails: [
            { field: 'Address', value: '1 Sheaf Street, Sheffield' },
            { field: 'Postcode', value: 'S1 2BP' }
          ]
        },
        {
          date: '14/09/2020',
          event: 'Deceased',
          description: 'Patient deceased according to shielded patient list',
          badges: [],
          eventDetails: [
            { field: 'SPL Source', value: 'GP WEEKLY SPL' },
            { field: 'Reason', value: 'Deceased' }
          ]
        }
      ]
    }
  }
}

module.exports = getDefaultData
