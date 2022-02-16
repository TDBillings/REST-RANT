const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                  <img src="/images/food-Casey-Lee.jpg" alt="Fancy Salmon" />
                  <div>
                      Photo by <a href="https://unsplash.com/@simplethemes">Casey Lee</a>
                  </div>
              </div>
              <a href="/places"><button className="btn-primary">Places Page</button>
</a>
          </main>
      </Def>
    )
  }

module.exports = home