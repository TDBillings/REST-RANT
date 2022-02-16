const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET /places')
})

function index (data) {
    let placesFormatted = data.places.map((place) => {
      return (
        <div className="col-sm-6">
          <h2>{place.name}</h2>
          <p className="text-center">
              {place.cuisines}
          </p>
          <img src={place.pic} alt={place.name}>
        </div>
      )
    })
    return (
      <Def>
          <main>
              <h1>PLACES To Rant and Rave About</h1>
              <div className="row">
              {placesFormatted}
              </div>
          </main>
      </Def>
  )
  }

module.exports = router