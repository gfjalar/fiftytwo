/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <h2 className="topLeft absolute withMargin">
                {this.props.frequency} Hz
            </h2>
        );
    }
});
