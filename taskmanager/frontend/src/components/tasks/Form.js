import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTask, get } from '../../actions/tasks'



export class Form extends Component {
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
    }


  static propTypes = {
    addTask: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { test_type, test_environment, work_order, serial_num, part_num, prod_name, prod_desc, task_desc, poc_email, link_doc, support_type, assignee, resource, location, department, status } = this.state;
    const task = { test_type, test_environment, work_order, serial_num, part_num, prod_name, prod_desc, task_desc, poc_email, link_doc, support_type, assignee, resource, location, department, status };
    this.props.addTask(task);
    this.setState({
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
  });
  };

  render() {
    const { test_type, test_environment, work_order, serial_num, part_num, prod_name, prod_desc, task_desc, poc_email, link_doc, support_type, assignee, resource, location, department, status } = this.state;
    return (
      
      <div id="collapseExample" className="collapse  card card-body mt-4 mb-4 form">
        <h2>Add Task</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            {/* 
            <label>Job Type</label>
            <input
              className="form-control"
              type="text"
              name="job_type"
              onChange={this.onChange}
              value={job_type}
            />
            */}
              <label htmlFor="inputType">Type</label>
              <select name="job_type" id="inputType" className="form-control" onChange={this.onChange}
              value={job_type}>
                <option defaultValue>Select: ATP/QTP/DEV</option>
                <option value="atp">ATP</option>
                <option value="qtp">QTP</option>
                <option value="dev">DEV</option>
                <option value="n/a">N/A</option>
              </select>
          </div>
          <div className="form-group">
              <label htmlFor="inputType">Type</label>
              <select name="environment" id="environmentInputType" className="form-control" onChange={this.onChange}
              value={environment}>
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
            <label>Email</label>
            <textarea
              className="form-control"
              type="text"
              name="email"
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Additional Details</label>
            <textarea
              className="form-control"
              type="text"
              name="details"
              onChange={this.onChange}
              value={details}
            />
          </div>
          <div>
          <select hidden name="status" id="statusInputType" className="form-control" readOnly
              value={status}>
                <option defaultValue="new">new</option>
              </select>
          </div>
          <div className="form-group">
            
            <textarea hidden
              className="form-control"
              type="text"
              name="assignedTo"
              onChange={this.onChange}
              value={assignedTo}
            />
          </div>
          <div className="form-group">
            
            <textarea hidden
              className="form-control"
              type="text"
              name="resource"
              onChange={this.onChange}
              value={resource}
            />
          </div>
          <div className="form-group center">
            <button type="submit"  className="btn btn-primary form-btn center">
              Submit
            </button>
          </div>
        </form>
    </div>
    );
  }
}

export default connect(null, { addTask })(Form);