var React = require('react');

var headerArea = React.createClass({

  render: function () {
      return (
        <div>
          <h3>{this.props.text}</h3>
        </div>
      );
  }

});

module.exports = headerArea;
