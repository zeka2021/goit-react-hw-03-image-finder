import { Component } from 'react';
import s from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
    state = {
        image: '',
        modalImage: '',
        description: '',
        onModalClick: '',
        // status: 'idle',
    };

    render() {
        const { image, modalImage, description, onModalClick } = this.props;
        return (
            <li className={s.ImageGalleryItem} onClick={onModalClick}>

                <img src={image}
                    alt={description}
                    data-src={modalImage}
                    className={s.ImageGalleryItemImage} />
            </li>
        );
    }
}

export default ImageGalleryItem;