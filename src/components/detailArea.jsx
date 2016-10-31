var React = require('react');

var detailArea = React.createClass({

    render: function(){
        return (
          <div>
            <p>{this.props.text}</p>
          </div>
        );
    }
});

module.exports = detailArea;
