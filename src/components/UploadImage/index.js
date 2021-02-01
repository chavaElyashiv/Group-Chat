
import React from 'react';
import ImageUploader from 'react-images-upload';

export default class UploadImage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { pictures: [] };
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(pictureFiles, pictureDataURLs) {
        console.log(pictureFiles);
        this.setState({
            pictures: pictureFiles
        });
    }

    render() {
        return (<>
            <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
            <img src={this.state.hangoutReducer.pictures[0]} />
        </>

        );
    }
}