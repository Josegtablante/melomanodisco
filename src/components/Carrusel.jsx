import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100 h-50"
                    src="https://tap-multimedia-1156.nyc3.digitaloceanspaces.com/slider/3966/large/BIENVENIDXS_COMPU.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-50"
                    src="https://tap-multimedia-1156.nyc3.digitaloceanspaces.com/slider/3982/large/SEGUINOSENREDES_COMPU.jpg"
                    alt="Second slide"
                />

            </Carousel.Item>
        </Carousel>
    );
}

export default DarkVariantExample;