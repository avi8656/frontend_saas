import React, { Fragment } from 'react'

const Nav = () => {
    return (
        <Fragment>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <h3>Logo</h3>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </Fragment>
    )
}

export default Nav
