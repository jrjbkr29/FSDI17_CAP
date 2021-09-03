import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTasks, addTask } from "../../actions/tasks";

import { FAQ } from "./FAQ";
import tasks from "../../reducers/tasks";

const dashComponentStyle = {
  textAlign: "center",
};
const formComponentStyle = {
  textAlign: "center",
  width: "50rem",
};

export class Dashboard extends Component {
  state = {
    test_type: '',
    test_environment: '',
    work_order: '',
    serial_num: '',
    part_num: '',
    prod_name: '',
    prod_desc: '',
    task_desc: '',
    poc_email: '',
    link_doc: '',
    support_type: '',
    assignee: '',
    resource: '',
    location: '',
    department: '',
    status: '',
  };

  static propTypes = {
    tasks: PropTypes.array.isRequired,
    getTasks: PropTypes.func.isRequired,
    addTask: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getTasks();
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const {
      test_type,
      test_environment,
      work_order,
      serial_num,
      part_num,
      prod_name,
      prod_desc,
      task_desc,
      poc_email,
      link_doc,
      support_type,
      assignee,
      resource,
      location,
      department,
      status,
    } = this.state;
    const task = {
      test_type,
      test_environment,
      work_order,
      serial_num,
      part_num,
      prod_name,
      prod_desc,
      task_desc,
      poc_email,
      link_doc,
      support_type,
      assignee,
      resource,
      location,
      department,
      status,
    };
    this.props.addTask(task);
    this.setState({
      test_type: "",
      test_environment: "",
      work_order: "",
      serial_num: "",
      part_num: "",
      prod_name: "",
      prod_desc: "",
      task_desc: "",
      poc_email: "",
      link_doc: "",
      support_type: "",
      assignee: "",
      resource: "",
      location: "",
      department: "",
      status: "",
    });
  };

  render() {
    let form_data = this.props.tasks
    const {
      test_type,
      test_environment,
      work_order,
      serial_num,
      part_num,
      prod_name,
      prod_desc,
      task_desc,
      poc_email,
      link_doc,
      support_type,
      assignee,
      resource,
      location,
      department,
      status,
    } = this.state;

    return (
      <Fragment>
        <div className="center dashboard" style={dashComponentStyle}>
          <div className="center" style={formComponentStyle}>
            <button
              className="btn btn-primary"
              type="button"
              data-toggle="collapse"
              data-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Create New Request
            </button>
          </div>
          <div className="form" style={formComponentStyle}>
            <div
              id="collapseExample"
              className="collapse  card card-body mt-4 mb-4 form"
            >
              <h2>Add Task</h2>
              <form onSubmit={this.onSubmit}>
              <div>
                <input type="radio" value="atp" name="job_type" /> ATP
                <input type="radio" value="qtp" name="job_type" /> QTP
                <input type="radio" value="dev" name="job_type" /> DEV
              </div>
      {/*
                <div className="form-group">
                  <label htmlFor="inputType">Type</label>
                  <select
                    name="job_type"
                    id="inputType"
                    className="form-control"
                    onChange={this.onChange}
                    value={test_type}
                  >
                      { form_data.map(
                        (TestType) => 
                                <option key={TestType.id} value={TestType.test_name}>
                                    {TestType.test_name}
                                </option>
                    ) 
                    }
                     
                    <option defaultValue>Select: ATP/QTP/DEV</option>
                    <option value="atp">ATP</option>
                    <option value="qtp">QTP</option>
                    <option value="dev">DEV</option>
                    <option value="n/a">N/A</option>
                    
                  </select>
                </div> */}
                <div className="form-group">
                  <label htmlFor="inputType">Type</label>
                  <select
                    name="environment"
                    id="environmentInputType"
                    className="form-control"
                    onChange={this.onChange}
                    value={test_environment}
                  >
                      {/* */}{/*
                    { form_data.map(
                        (TestEnvironment) => 
                                <option key={TestEnvironment.id} value={TestEnvironment.environment_name}>
                                    {TestEnvironment.environment_name}
                                </option>
                    ) 
                    }
                    */}
                    <option defaultValue>Select: Vibe/Thermal/Shock</option>
                    <option value="vibe">Vibe</option>
                    <option value="thermal">Thermal</option>
                    <option value="shock">Shock</option>
                    <option value="none">N/A</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Work Order</label>
                  <input
                    className="form-control"
                    type="work_order"
                    name="work_order"
                    onChange={this.onChange}
                    value={work_order}
                  />
                </div>
                <div className="form-group">
                  <label>Serial Number</label>
                  <textarea
                    className="form-control"
                    type="text"
                    name="serial_num"
                    onChange={this.onChange}
                    value={serial_num}
                  />
                </div>
                <div className="form-group">
                  <label>Part Number</label>
                  <textarea
                    className="form-control"
                    type="text"
                    name="part_num"
                    onChange={this.onChange}
                    value={part_num}
                  />
                </div>
                <div className="form-group">
                  <label>Product Name</label>
                  <textarea
                    className="form-control"
                    type="text"
                    name="prod_name"
                    onChange={this.onChange}
                    value={prod_name}
                  />
                </div>
                <div className="form-group">
                  <label>Product Description</label>
                  <textarea
                    className="form-control"
                    type="text"
                    name="prod_desc"
                    onChange={this.onChange}
                    value={prod_desc}
                  />
                </div>
                <div className="form-group">
                  <label>Task Description</label>
                  <textarea
                    className="form-control"
                    type="text"
                    name="task_desc"
                    onChange={this.onChange}
                    value={task_desc}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <textarea
                    className="form-control"
                    type="text"
                    name="poc_email"
                    onChange={this.onChange}
                    value={poc_email}
                  />
                </div>
                <div className="form-group">
                  <label>Link to Test Requirement</label>
                  <textarea
                    className="form-control"
                    type="text"
                    name="link_doc"
                    onChange={this.onChange}
                    value={link_doc}
                  />
                </div>
                <div className="form-group">
                  <label>Support Required?</label>
                  <textarea
                    className="form-control"
                    type="text"
                    name="support_type"
                    onChange={this.onChange}
                    value={support_type}
                  />
                </div>
                <div>
                  <select
                    hidden
                    name="status"
                    id="statusInputType"
                    className="form-control"
                    readOnly
                    value={status}
                  >
                    <option defaultValue="new">new</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea
                    hidden
                    className="form-control"
                    type="text"
                    name="assignee"
                    onChange={this.onChange}
                    value={assignee}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    hidden
                    className="form-control"
                    type="text"
                    name="resource"
                    onChange={this.onChange}
                    value={resource}
                  />
                </div>
                <div className="form-group center">
                  <button
                    type="submit"
                    className="btn btn-primary form-btn center"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="faq">
            <div
              id="carouselExampleIndicators"
              className="carousel slide carusel-image"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div className="carousel-inner carusel-image">
                <div className="carousel-item active">
                  <img
                    className="carusel-image"
                    src="https://www.udco.com/Customer-Content/www/photos/Photos/Full/33_satellite-vibe-test.jpg"
                    alt="First slide"
                    width="500"
                    height="350"
                  />
                  <div className="carousel-caption d-none d-md-block"></div>
                </div>

                <div className="carousel-item">
                  <img
                    className="carusel-image"
                    src="https://scitechengineering.co.za/wp-content/uploads/elementor/thumbs/thermal-humidity-chamber-installation-54611-750x500-o936sddlfhbdy3sk0tw23j1rxi96y2h6oala4bwl38.jpg"
                    alt="Second slide"
                    width="500"
                    height="350"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    
                  </div>
                </div>

                <div className="carousel-item">
                  <img
                    className="carusel-image"
                    src="https://www.researchgate.net/profile/Scott-Moreland/publication/317318770/figure/fig19/AS:500919290404871@1496439873836/Environmental-testing-of-BiBlade-in-thermalvacuum-chamber-Cold-shroud-end-plate-and-top.png"
                    alt="Third slide"
                    width="500"
                    height="350"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>...</h5>
                    <p>...</p>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  tasks: [state.tasks.tasks],
});

export default connect(mapStateToProps, { getTasks, addTask })(Dashboard);
