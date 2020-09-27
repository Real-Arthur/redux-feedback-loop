import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

class Success extends Component {
    /// sends admin back to home page
    back = () => {
        this.props.history.push('/')
    }

    render() {
        console.log('admin props', this.props.feedback)
        return(
          <Box display="flex" width={1/4} justifyContent="center" flexDirection="row" flexWrap="wrap">
            <TableContainer component={Paper} >
              <Table aria-label="simple table" >
            <TableHead>
              <TableRow>
                <TableCell align="right">Feeling</TableCell>
                <TableCell align="right">Comprehension</TableCell>
                <TableCell align="right">Support</TableCell>
                <TableCell align="right">Comments</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                  {/* Render database info on DOM */}
                  {this.props.feedback.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="right">{row.feeling}</TableCell>
              <TableCell align="right">{row.understanding}</TableCell>
              <TableCell align="right">{row.support}</TableCell>
              <TableCell align="right">{row.comments}</TableCell>
            </TableRow>
                ))}
            </TableBody>
              </Table>
            </TableContainer>
              <Button variant="contained" color="primary" onClick={() => this.back()}>HOME</Button>
          </Box>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        feedback: reduxState.feedbackReducer
    }
}

export default connect(mapStateToProps)(withRouter(Success));