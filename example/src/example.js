'use strict';

var React = require('react');
var ReactTelephoneInput = require('react-telephone-input');

var App = React.createClass({
    render() {
        return (
            <div>
                <ReactTelephoneInput
                  defaultCountry='ru'
                  onFocus={ function () { console.log('focus', arguments); } }
                  onBlur={ function () { console.log('blur', arguments); } }
                />
            </div>
        );
    }
});

React.render(<App />, document.getElementById('app'));
