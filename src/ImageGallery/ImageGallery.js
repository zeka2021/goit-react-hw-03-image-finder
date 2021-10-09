import { Component } from 'react';

class ImageGallery extends Component {
   
    render() {
        return (
            <ul className="ImageGallery">
                {this.props.query}
            </ul>
        )
    }
}
export default ImageGallery;