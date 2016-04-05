var React = require('react');
var PropTypes = React.PropTypes;
var ImageData = require('../data/images');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


var styles = {
	slider: {
		position: 'fixed',
		top:0,
		left:0,
		width:'100%',
	},
	photo: {
		backgroundSize:'cover',
		width:'100%',
		height:'100%',
		top:0,
		left:0,
		backgroundPosition:'center center',
		backgroundRepeat:'none',
		zIndex:0

	},
	text: {
		position: 'fixed',
		width: '100%',
		height:'10%',
		bottom:0,
		zIndex:0,
		backgroundColor:'rgba(0,0,0,.5)',
		fontFamily:'fantasy',
		fontSize:'25px',
		color:'white',
		textAlign:'center',
		paddingTop: '20px',
		paddingBottom:'40px'
	}
};

var Slide = React.createClass({
	getInitialState: function(){
		return {
			images: ImageData,
			currentImage: 0
		}
	},
	componentDidMount: function(){
		var that = this;
		setInterval(function(){
			if(that.state.currentImage < that.state.images.length-1){
				that.setState({
					currentImage: that.state.currentImage + 1

				});
			}else{
				that.setState({
						currentImage: 0
				});
			}
		}, 3000);

	},
    render: function(){
        return (
          <div style={styles.slider} >
		  	<img src={this.state.images[this.state.currentImage].src} style={styles.photo} className="img img-responsive"/>
            <div style={styles.text} className="col-md-12">{this.state.images[this.state.currentImage].caption}</div>
          </div>
        )
    }
});

module.exports = Slide;
