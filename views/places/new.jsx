const React = require('react');
const Def = require('../default');

function new_form(data) {
    let message = ''
    if (data.message) {
        message = (
            <div className="alert alert-danger" role="alert">
                {data.message}
            </div>
        )
    } 
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                {message}
                {/* <div className="newButton" >
                    <a href="/places"><button>Go back to the index</button></a>
                </div> */}
                    <form action="/places" method="POST">
                        <div className="form-group col-sm-6 col-md-4 col-lg-3">
                            <label htmlFor='name' >Place Name : </label>
                            <input
                                className="form-control"
                                id="name"
                                type="text"
                                name="name"
                                required
                            />
                        </div>
                        <div className="form-group col-sm-6 col-md-4 col-lg-3">
                            <label htmlFor='pic' >Place Picture : </label>
                            <input
                                className="form-control"
                                id="pic"
                                type="url"
                                name="pic"
                            />
                        </div>
                        <div className="form-group col-sm-6 col-md-4 col-lg-3">
                            <label htmlFor='city' >City : </label>
                            <input
                                className="form-control"
                                id="city"
                                type="text"
                                name="city"
                            />
                        </div>
                        <div className="form-group col-sm-6 col-md-4 col-lg-3">
                            <label htmlFor='state' >State : </label>
                            <input
                                className="form-control"
                                id="state"
                                type="text"
                                name="state"
                            />
                        </div>
                        <div className="form-group col-sm-6 col-md-4 col-lg-3">
                            <label htmlFor='cuisines' >Cuisines : </label>
                            <input
                                className="form-control"
                                id="cuisines"
                                type="text"
                                name="cuisines"
                                required
                            />
                        </div>
                        <div className="form-group col-sm-6 col-md-4 col-lg-3">
                            <label htmlFor='founded' >Founded Year: </label>
                            <input
                                className="form-control"
                                id="founded"
                                type="number"
                                name="founded" 
                                value={new Date().getFullYear()}
                                />
                        </div>
                        <input
                            className='btn btn-primary'
                            id="submit"
                            type="submit"
                            value="Add Place"
                        />
                    </form>
            </main>
        </Def>
    )
}

module.exports = new_form;
