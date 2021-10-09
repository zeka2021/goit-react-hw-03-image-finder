import { Component } from 'react';

class ImageGalleryItems extends Component {
    state = {
        query: '',
        page: 1,
    }
     componentDidUpdate(prevProps, prevState) {
        if (prevProps.queru !== this.props.query) {
            fetch('https://pixabay.com/api/?q=&{this.props.query}&page=номер_страницы&key=23014981-34d5a6a0e1a39309eb24c48f7&image_type=photo&orientation=horizontal&per_page=12')
                .then(res => res.json())
                .then(console.log);

        }
    }
    render() {
        return (
            <li className="ImageGalleryItem">
  <img src="" alt="" className="ImageGalleryItem-image" />
</li>
        )
    }
}
export default ImageGalleryItems;