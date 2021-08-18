import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import  { getFaq }  from "../../actions/tasks";

export class FAQ extends Component {
  static propTypes = {
    faq: PropTypes.array,
    getFaq: PropTypes.func
  };
  
  componentDidMount() {
    getFaq();
}

  render() {
    return (
      <Fragment>
          <div id="carouselExampleIndicators" className="carousel slide carusel-image" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner carusel-image" >
              <div className="carousel-item active">
                <img className="carusel-image" src="https://www.udco.com/Customer-Content/www/photos/Photos/Full/33_satellite-vibe-test.jpg" alt="First slide" width="500" height="350"/>
                <div className="carousel-caption d-none d-md-block">
                  {/*
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>FAQ</th>
                            <th>Answer</th>
                            <th></th>
                        </tr>
                    </thead>    
                        <tbody>
                            { this.props.faq.map(faq => (
                                <tr key={faq.id}>
                                    <td>{ faq.question }</td>
                                    <td>{ faq.answer }</td>
                                    <td><button onClick= {this.props.bind(null, null)} className="btn btn-danger btn-sm">Expand</button></td>
                                </tr>
                            )) }
                        </tbody>
                </table>
                            */}
                </div>
              </div>

              <div className="carousel-item">
                <img className="carusel-image" src="https://scitechengineering.co.za/wp-content/uploads/elementor/thumbs/thermal-humidity-chamber-installation-54611-750x500-o936sddlfhbdy3sk0tw23j1rxi96y2h6oala4bwl38.jpg" alt="Second slide" width="500" height="350"/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>...</h5>
                  <p>...</p>
                </div>
              </div>
              
              <div className="carousel-item">
                <img className="carusel-image" src="https://www.researchgate.net/profile/Scott-Moreland/publication/317318770/figure/fig19/AS:500919290404871@1496439873836/Environmental-testing-of-BiBlade-in-thermalvacuum-chamber-Cold-shroud-end-plate-and-top.png" alt="Third slide" width="500" height="350"/> 
                <div className="carousel-caption d-none d-md-block">
                  <h5>...</h5>
                  <p>...</p>
                </div>    
              </div>
            </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  faq: state.faq.faq
})

export default connect(mapStateToProps, getFaq )(FAQ);
