/*var React = require('react');
//var io = require('socket.io-client');
//var CONFIG = require('../config/config');
//var Slide = require('../components/slide');
var PropTypes = React.PropTypes;
var slideContainer = require('../containers/slideContainer');


var App = React.createClass({
    render: function(){
        return (
          <div>
            <Image
              src={this.props.src}
              alt={this.props.alt}/>

            <Caption>{this.props.caption}</Caption>
          </div>
        )
    }
});









/*
var App = React.createClass({
    getInitialState: function(){
        return {
            status: 'disconnected',
            class: 'label label-danger pull-right',
            title: ''
        }
    },
    componentWillMount: function(){
        this.socket = io(CONFIG.url);
        this.socket.on('connect', this.connect);
        this.socket.on('disconnect', this.disconnect);
        this.socket.on('welcome', this.welcome);
    },
    connect: function(){
        this.setState({status: 'connected', class: 'label label-success pull-right'});
    },
    disconnect: function(){
        this.setState({status: 'disconnected', class: 'label label-danger pull-right'});
    },
    welcome: function(serverState){
        this.setState({title: serverState.title});
    },
	render: function(){
		return (
			<div className="row">
                <div className="col-md-12">
                     <Slide status={this.state.status} class={this.state.class} title={this.state.title}/>
                </div>
			</div>
		)
	}
});
*/
 
