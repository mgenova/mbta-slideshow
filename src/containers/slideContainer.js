var React = require('react');
var PropTypes = React.PropTypes;
//var Slide = require('../components/Slide');

/*
var state = {
	images: [],
	currImageIndex: 0
}

var Slides = React.createClass({
  render: function() {
    var slides = this.props.imageData.map(function (slide) {
      return (
        <Slide src={slide.src}
			alt={slide.alt}
			caption={slide.caption}
			duration={slide.duration}
			transition={slide.transition} />
      );
    });
    return (
      <div className="slides">
        {slides}
      </div>
    );
  }
});

var Slide = React.createClass({
	render: function() {
		return (
			<div>
				<img src={this.props.src} alt={this.props.alt} />
				<div>{this.props.caption}</div>
      		</div>
		);
});


var Slideshow = React.createClass({
  render: function() {
    return (
      <div className="slideshow">
        <Slides imageData={this.props.imageData} />
      </div>
    );
  }
});



React.render(<SlideShow images={imageData} />, document.getElementById('app'));
*/

module.exports = slideContainer;
