var React = require('react');
var headerArea = require('./headerArea.jsx');
var detailArea = require('./detailArea.jsx');

var containerBox = React.createClass({

  render: function () {
      return (
          <div>
            <headerArea text={this.props.title} />
            <detailArea text={this.props.detail} />
          </div>
      );
  }

});

module.exports = containerBox;
