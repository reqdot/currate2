import _ from 'lodash';
import React, { Component } from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { Card } from 'reactstrap';
import '../../css/topButton.css';

class MyNews extends Component {
  componentDidMount() {
    this.props.fetchNews(this.props.auth._id);
  }

  renderNews() {
    return _.map(this.props.myNews, result => {
      return (
        <div
          style={{ width: '90%', marginLeft: '55px', paddingTop: '8px' }}
          key={result.title}
        >
          <Card
            header
            className="bg-info"
            style={{ textAlign: 'left', color: 'white', opacity: '0.7' }}
          >
            &nbsp;&nbsp;&nbsp;{result.title}&nbsp;&nbsp;( Search Date :&nbsp;{
              result.date
            }&nbsp;)
          </Card>
          <Card body outline color="grey">
            <br />
            News URL :&nbsp;&nbsp;
            <a
              href={result.url}
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              {result.url}
            </a>
            <br />
            &nbsp;&nbsp;
            <span className="blockquote" style={{ fontSize: 'medium' }}>
              {result.description}
            </span>
          </Card>
        </div>
      );
    }).reverse();
  }

  render() {
    return (
      <div className="container" style={{ minWidth: '1080px' }}>
        <div
          style={{
            marginTop: '40px',
            textAlign: 'center',
            color: 'darkgrey'
          }}
        >
          <h4> Here are your crawling results!</h4>
        </div>
        <div>{this.renderNews()}</div>
        <div id="topButton">
          <a href="#top">t▲p</a>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    myNews: state.myNews
  };
}

export default connect(mapStateToProps, actions)(MyNews);
