import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class DataHub extends Component {

    render() {
        
        return (
            <Fragment>
            <div className="input-group">
              <input type="text" className="form-control" aria-label="Text input with dropdown button" />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                  <div role="separator" className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Separated link</a>
                </div>
            </div>


              <div className="card-group">
  <div className="card">
    <img className="card-img-top" src="..." alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="..." alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="..." alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>


              <nav aria-label="...">
  <ul className="pagination">
    <li className="page-item disabled">
      <span className="page-link">Previous</span>
    </li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item active">
      <span className="page-link">
        2
        <span className="sr-only"></span>
      </span>
    </li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item">
      <a className="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>

</div>
            </Fragment>
        )
    }
}



export default (DataHub);
