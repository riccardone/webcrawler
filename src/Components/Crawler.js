import React, { Component } from 'react'
import { Button, Grid, Row, Col, FormGroup, FormControl } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify'
import Urls from './Urls'

class Crawler extends Component {
  constructor(props) {
    super(props)

    this.state = {
      url: 'https://wiprodigital.com',
      urls: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    // preserve the initial state in a new object
    this.baseState = this.state
  }

  handleSubmit(event) {
    event.preventDefault();
    var _this = this;
    fetch('http://localhost:5000/api/crawler', {
      method: "POST",
      redirect: 'follow',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url: _this.state.url })
    })
      .then(response => response.json())
      .then((responseJson) => {
        _this.setState({ urls: responseJson })
        toast.info('found ' + responseJson.length + ' links')
      }).catch(function (error) {
        toast.error(error.message)
      });
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value

    if (name === "url") {
      this.setState({ url: value })
    }
    if (name === "urls") {
      this.setState({ urls: value })
    }
  }

  render() {
    const divStyle = {
      margin: '5px'
    };

    return (
      <div>
        <ToastContainer
              hideProgressBar
              newestOnTop
          />
        <form onSubmit={this.handleSubmit} ref={(el) => this.myFormRef = el}>
          <FormGroup controlId="formBasicText">
            <Grid>
              <Row>
                <Col xs={10} md={10} lg={10}>
                  <FormControl style={divStyle} value={this.state.url} onChange={this.handleChange} name="url" placeholder="url to crawl" />
                </Col>
                <Col xs={2} md={2} lg={2}>
                  <Button bsStyle="primary" type="submit">Crawl</Button>
                </Col>
                <Col xs={12} md={12} lg={12}>
                  <Urls urls={this.state.urls} />
                </Col>
              </Row>
            </Grid>
          </FormGroup>
        </form>
      </div>
    );
  }
}

export default Crawler;
