import { Component } from 'react';

export class ImageGalleryItem extends Component {
    state = {
        image: '',
        description: '',
        // status: 'idle',
    };

    render() {
        const { image, description } = this.props;
        return (
            <li className="ImageGalleryItem">

                <img src={image}
                    alt={description}
                    className="ImageGalleryItem-image" />
            </li>
        );
    }
}

export default ImageGalleryItem;