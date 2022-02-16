const React = require('react')
const Def = require('./default')

function places () {
    return (
      <Def>
          <main>
              <h1>Places</h1>
          </main>
      </Def>
    )
  }

  // GET /places
app.get('/', (req, res) => {
   
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
      }]
      res.render('places/index', { places })

  })

module.exports = places