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
        text: [
          'The user with the nhs number ending 2414... ',
          '',
          'Was previously on the SPL but was removed on 29/05/2020',
          '',
          'Registered for supplies via webform on 30/03/2020',
          '',
          'Had last delivery report code 3: rejected on doorstep on 20/04/2020',
          'Is not scheduled for future deliveries',
          '',
          'Is included in the file sent to supermarkets',
          'Has been confirmed as matched by 2 supermarkets'
        ]
      },
      spl: {
        value: false,
        action: 'Removed',
        date: '29/05/2020'
      },
      supermarkets: {
        registered: {
          value: true,
          action: 'Webform',
          date: '29/03/2020'
        },
        inFile: true,
        matches: {
          asda: false,
          iceland: true,
          lidl: false,
          morrisons: false,
          ocado: false,
          sainsburys: false,
          tesco: true
        }
      },
      deliveries: {
        everRegistered: {
          value: true,
          action: 'Webform',
          date: '29/03/2020'
        },
        currentlyRegistered: {
          value: false,
          action: 'Delivery report',
          date: '29/04/2020'
        },
        inFile: false,
        nextDelivery: {
          value: false,
          date: ''
        }
      },
      timeline: [
        {
          date: '12/03/2020',
          event: 'NHS Shielded Patient List',
          description: 'Added to SPL',
          badge: null,
          eventDetails: [
            { field: 'Address', value: '72 GUILD ST, LONDON' },
            { field: 'Postcode', value: 'SE23 6FH' }
          ]
        },
        {
          date: '29/03/2020',
          event: 'IVR registration',
          description: null,
          badge: {
            text: 'Essential supplies not needed',
            inverted: true
          },
          eventDetails: [
            { field: 'Address', value: '72 GUILD ST, LONDON' },
            { field: 'Postcode', value: 'SE23 6FH' }
          ]
        },
        {
          date: '30/03/2020',
          event: 'Web registration',
          description: null,
          badge: {
            text: 'Essential supplies needed',
            inverted: false
          },
          eventDetails: [
            { field: 'Address', value: '72 Guild Street, Forest Hill' },
            { field: 'Postcode', value: 'SE236FH' }
          ]
        },
        {
          date: '06/04/2020',
          event: 'Delivery report',
          description: 'Successful',
          badge: null,
          eventDetails: [
            { field: 'Address', value: '72 GUILD ST, LONDON' },
            { field: 'Postcode', value: 'SE236FH' },
            { field: 'Result', value: 'Code 1: Success' }
          ]
        },
        {
          date: '13/04/2020',
          event: 'Delivery report',
          description: 'Successful - left on doorstep',
          badge: null,
          eventDetails: [
            { field: 'Address', value: '72 GUILD ST, LONDON' },
            { field: 'Postcode', value: 'SE236FH' },
            { field: 'Result', value: 'Code 2: Success - left box on doorstep' }
          ]
        },
        {
          date: '20/04/2020',
          event: 'Delivery report',
          description: 'Unsuccessful - box rejected',
          badge: {
            text: 'Essential supplies not needed',
            inverted: true
          },
          eventDetails: [
            { field: 'Address', value: '72 GUILD ST, LONDON' },
            { field: 'Postcode', value: 'SE236FH' },
            { field: 'Result', value: 'Code 3: Unsuccessful - box rejected' }
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
        text: [
          'The user with the nhs number ending 5326... ',
          '',
          'Has been on the SPL since 03/05/2020',
          '',
          'Has not registered on this service',
          '',
          'Is not included in the file sent to supermarkets',
          'Has been confirmed as matched by 0 supermarkets'
        ]
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
        inFile: false,
        matches: {
          asda: false,
          iceland: false,
          lidl: false,
          morrisons: false,
          ocado: false,
          sainsburys: false,
          tesco: false
        }
      },
      deliveries: {
        everRegistered: {
          value: false,
          action: '',
          date: ''
        },
        currentlyRegistered: {
          value: false,
          action: '',
          date: ''
        },
        inFile: false,
        nextDelivery: {
          value: false,
          date: ''
        }
      },
      timeline: [
        {
          date: '12/03/2020',
          event: 'NHS Shielded Patient List',
          description: 'Added to SPL',
          badge: null,
          eventDetails: [
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
        phone:
          '07486 900456',
        email:
          'andrew.moseley@example.com',
        text:
          [
            'The user with the nhs number ending 3029... ',
            '',
            'Is on the SPL - added 30/03/2010',
            '',
            'Registered for supplies via webform on 30/05/2020',
            '',
            'Had last delivery report Code 1: Successful on 25/07/2020',
            'Is not scheduled for future deliveries',
            '',
            'Is included in the file sent to supermarkets',
            'Has been confirmed as matched by 3 supermarkets'
          ]
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
            '30/05/2020'
        },
        inFile: true,
        matches:
          {
            asda: true,
            iceland:
              true,
            lidl:
              false,
            morrisons:
              false,
            ocado:
              false,
            sainsburys:
              true,
            tesco:
              false
          }
      },
      deliveries: {
        everRegistered: {
          value: true,
          action:
            'Webform',
          date:
            '30/05/2020'
        },
        currentlyRegistered: {
          value: true,
          action:
            'Webform',
          date:
            '30/05/2020'
        },
        inFile: true,
        nextDelivery:
          {
            value: false,
            date: ''
          }
      },
      timeline: [
        {
          date: '12/03/2020',
          event: 'NHS Shielded Patient List',
          description: 'Added to SPL',
          badge: null,
          eventDetails: [
            { field: 'Address', value: '150 NEWHALL ST, BIRMINGHAM' },
            { field: 'Postcode', value: 'B3 1RY' }
          ]
        },
        {
          date: '29/03/2020',
          event: 'Web registration',
          description: null,
          badge: {
            text: 'Essential supplies needed',
            inverted: false
          },
          eventDetails: [
            { field: 'Address', value: '105 Ravenhurst Street, Bordesley, Birmingham' },
            { field: 'Postcode', value: 'B12 0HB' }
          ]
        },
        {
          date: '06/04/2020',
          event: 'Delivery report',
          description: 'Successful - left on doorstep',
          badge: null,
          eventDetails: [
            { field: 'Address', value: '150 NEWHALL ST, BIRMINGHAM' },
            { field: 'Postcode', value: 'B3 1RY' },
            { field: 'Result', value: 'Code 2: Success - left box on doorstep' }
          ]
        },
        {
          date: '13/04/2020',
          event: 'Delivery report',
          description: 'Unsuccessful - box rejected',
          badge: {
            text: 'Essential supplies not needed',
            inverted: true
          },
          eventDetails: [
            { field: 'Address', value: '150 NEWHALL ST, BIRMINGHAM' },
            { field: 'Postcode', value: 'B3 1RY' },
            { field: 'Result', value: 'Code 2: Success - left box on doorstep' }
          ]
        },
        {
          date: '30/05/2020',
          event: 'Web registration',
          description: null,
          badge: {
            text: 'Essential supplies needed',
            inverted: false
          },
          eventDetails: [
            { field: 'Address', value: '105 Ravenhurst Street, Bordesley, Birmingham' },
            { field: 'Postcode', value: 'B12 0HB' }
          ]
        },
        {
          date: '03/06/2020',
          event: 'Delivery report',
          description: 'Successful',
          badge: null,
          eventDetails: [
            { field: 'Address', value: '105 Ravenhurst Street, Bordesley, Birmingham' },
            { field: 'Postcode', value: 'B12 0HB' },
            { field: 'Result', value: 'Code 1: Success' }
          ]
        },
        {
          date: '10/06/2020',
          event: 'Delivery report',
          description: 'Successful',
          badge: null,
          eventDetails: [
            { field: 'Address', value: '105 Ravenhurst Street, Bordesley, Birmingham' },
            { field: 'Postcode', value: 'B12 0HB' },
            { field: 'Result', value: 'Code 1: Success' }
          ]
        },
        {
          date: '17/06/2020',
          event: 'Delivery report',
          description: 'Successful',
          badge: null,
          eventDetails: [
            { field: 'Address', value: '105 Ravenhurst Street, Bordesley, Birmingham' },
            { field: 'Postcode', value: 'B12 0HB' },
            { field: 'Result', value: 'Code 1: Success' }
          ]
        },
        {
          date: '24/06/2020',
          event: 'Delivery report',
          description: 'Successful',
          badge: null,
          eventDetails: [
            { field: 'Address', value: '105 Ravenhurst Street, Bordesley, Birmingham' },
            { field: 'Postcode', value: 'B12 0HB' },
            { field: 'Result', value: 'Code 1: Success' }
          ]
        },
        {
          date: '01/07/2020',
          event: 'Delivery report',
          description: 'Successful',
          badge: null,
          eventDetails: [
            { field: 'Address', value: '105 Ravenhurst Street, Bordesley, Birmingham' },
            { field: 'Postcode', value: 'B12 0HB' },
            { field: 'Result', value: 'Code 1: Success' }
          ]
        },
        {
          date: '08/07/2020',
          event: 'Delivery report',
          description: 'Successful',
          badge: null,
          eventDetails: [
            { field: 'Address', value: '105 Ravenhurst Street, Bordesley, Birmingham' },
            { field: 'Postcode', value: 'B12 0HB' },
            { field: 'Result', value: 'Code 1: Success' }
          ]
        },
        {
          date: '15/07/2020',
          event: 'Delivery report',
          description: 'Successful',
          badge: null,
          eventDetails: [
            { field: 'Address', value: '105 Ravenhurst Street, Bordesley, Birmingham' },
            { field: 'Postcode', value: 'B12 0HB' },
            { field: 'Result', value: 'Code 1: Success' }
          ]
        },
        {
          date: '22/07/2020',
          event: 'Delivery report',
          description: 'Successful',
          badge: null,
          eventDetails: [
            { field: 'Address', value: '105 Ravenhurst Street, Bordesley, Birmingham' },
            { field: 'Postcode', value: 'B12 0HB' },
            { field: 'Result', value: 'Code 1: Success' }
          ]
        }
      ]
    },
    '2082035560': {
      persona: 'Got first parcel then decided to cancel. Has not been matched by supermarkets',
      summary: {
        nhsNumber: '2082035560',
        name: 'Shilpa Chaghanti',
        dob:
          '5th May 1965',
        latestAddress:
          ['1b Sheaf Street', 'Sheffield', 'S1 2BP'],
        latestAddressLA: 'Sheffield city council',
        nhsAddress:
          ['1 SHEAF ST, SHEFFIELD', 'S1 2BP'],
        nhsAddressLA: 'Sheffield city council',
        phone:
          '0114 272 9003',
        email:
          'shillpa.chaghanti@example.com',
        text:
          [
            'The user with the nhs number ending 5560... ',
            '',
            'Is on the SPL - added 30/03/2020',
            '',
            'Cancelled supplies via webform on 15/04/2020',
            '',
            'Had last delivery report code 2: left on doorstep on 14/04/2020',
            'Is not scheduled for future deliveries',
            '',
            'Is included in the file sent to supermarkets',
            'Has been confirmed as matched by 0 supermarkets'
          ]
      }
      ,
      spl: {
        value: true,
        action:
          'Added',
        date:
          '30/03/2020'
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
        matches:
          {
            asda: false,
            iceland:
              false,
            lidl:
              false,
            morrisons:
              false,
            ocado:
              false,
            sainsburys:
              false,
            tesco:
              false
          }
      },
      deliveries: {
        everRegistered: {
          value: true,
          action:
            'IVR',
          date:
            '01/04/2020'
        }
        ,
        currentlyRegistered: {
          value: false,
          action:
            'Webform',
          date:
            '15/04/2020'
        }
        ,
        inFile: false,
        nextDelivery:
          {
            value: false,
            date:
              ''
          }
      },
      timeline: [
        {
          date: '30/03/2020',
          event: 'NHS Shielded Patient List',
          description: 'Added to SPL',
          badge: null,
          eventDetails: [
            { field: 'Address', value: '1 SHEAF ST, SHEFFIELD' },
            { field: 'Postcode', value: 'S1 2BP' }
          ]
        },
        {
          date: '01/04/2020',
          event: 'IVR registration',
          description: null,
          badge: {
            text: 'Essential supplies needed',
            inverted: false
          },
          eventDetails: [
            { field: 'Address', value: '1 SHEAF ST, SHEFFIELD' },
            { field: 'Postcode', value: 'S1 2BP' }
          ]
        },
        {
          date: '07/04/2020',
          event: 'Delivery report',
          description: 'Successful - left on doorstep',
          badge: null,
          eventDetails: [
            { field: 'Address', value: '1 SHEAF ST, SHEFFIELD' },
            { field: 'Postcode', value: 'S1 2BP' },
            { field: 'Result', value: 'Code 2: Success - left on doorstep' }
          ]
        },
        {
          date: '14/04/2020',
          event: 'Delivery report',
          description: 'Successful - left on doorstep',
          badge: null,
          eventDetails: [
            { field: 'Address', value: '1 SHEAF ST, SHEFFIELD' },
            { field: 'Postcode', value: 'S1 2BP' },
            { field: 'Result', value: 'Code 2: Success - left on doorstep' }
          ]
        },
        {
          date: '15/04/2020',
          event: 'Web registration',
          description: null,
          badge: {
            text: 'Essential supplies not needed',
            inverted: true
          },
          eventDetails: [
            { field: 'Address', value: '1b Sheaf Street, Sheffield' },
            { field: 'Postcode', value: 'S1 2BP' }
          ]
        }
      ]
    }
  }
}

module.exports = getDefaultData
