const React = require('react')
const Def = require('./default')

function home() {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <img src="https://images.unsplash.com/photo-1490474504059-bf2db5ab2348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Chia Fruit Shake" />
                <div>
                    Photo by <a href="https://unsplash.com/@cravethebenefits" target="_blank">Brenda Godinez
                    </a> on
                    <a href="https://unsplash.com/" target="_blank">Unsplash</a>
                </div>
                <a href="/places">
                    <button className="btn btn-primary">PLACES INDEX</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home