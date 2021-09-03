import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTasks, deleteTask, getFaq, getRes, getEmp } from '../../actions/tasks';

import TaskCard from '../layout/taskCard';

export class Tasks extends Component {
    static propTypes = {
        tasks: PropTypes.array.isRequired,
        getTasks: PropTypes.func.isRequired,
        deleteTask: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getTasks();
    }
    render() {
        let tasks = this.props.tasks
        return (
            <Fragment>
                <h2>Tasks</h2>
                {/*
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Job Type</th>
                            <th>Work Order</th>
                            <th>Serial Number</th>
                            <th>Part Number</th>
                            <th>email</th>
                            <th>Details</th>
                            <th>Created</th>
                            <th></th>
                        </tr>
                    </thead>    
                        <tbody>
                            { this.props.tasks.map(task => (
                                <tr key={task.id}>
                                    <td>{ task.job_type }</td>
                                    <td>{ task.work_order }</td>
                                    <td>{ task.serial_num }</td>
                                    <td>{ task.part_num }</td>
                                    <td>{ task.email }</td>
                                    <td>{ task.details }</td>
                                    <td>{ task.created_at }</td>
                                    <td><button onClick= {this.props.deleteTask.bind(this, task.id)} className="btn btn-danger btn-sm">Delete</button></td>
                                </tr>
                            )) }
                        </tbody>
                </table>
                 */}
                <div className="container task-card-container">
                    <div className="row">
                    {this.props.tasks.map((task) => <TaskCard key={task.id} keyId={task.id} work_order={task.work_order} serial_num={task.serial_num} part_num={task.part_num} prod_name={task.prod_name} prod_desc={task.prod_desc} task_desc={task.task_desc} poc_email={task.poc_email} link_doc={task.link_doc} support_type={task.support_type} created_at={task.created_at} test_type={task.test_type} test_environment={task.test_environment} assignee={task.assignee} resource={task.resource} location={task.location} department={task.department} created_by={task.created_by} status={task.status}  />)}
                    </div>
                </div>
                
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    tasks: state.tasks.tasks,
})

export default connect(mapStateToProps, { getTasks, deleteTask })(Tasks);
