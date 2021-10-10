import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ImageGalleryItem from '../ImageGalleryItem';

class ImageGallery extends Component {
    state = {
    images: '',
    }
   
    render() {
        return (
            <ul className="ImageGallery">
                {this.props.images.map(
                    ({ id, webformatURL, largeImageURL, tags }, index) => (
                        <ImageGalleryItem
                            onModalClick={() => this.props.onModalClick(index)}
                            key={`${id}}-${uuidv4()}`}
                            image={webformatURL}
                            modalImage={largeImageURL}
                            description={tags.split(',')[0]}
                        />
                    ),
                )}
            </ul>
        );
    }
}
export default ImageGallery;