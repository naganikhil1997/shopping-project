import Carousel from 'react-bootstrap/Carousel';
import image1 from './supermarket-banner-concept-with-ingredients.jpg'
import image2 from './top-view-bunch-fresh-food-donation.jpg'
import image3 from './view-table-with-articles-food-family.jpg'

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>In this Slide we have a supermarket banner with vegetables.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>In this Slide we have a top view of a bunch of fresh food grocery.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
          .In this Slide we have a view a top view of a bunch of fresh food grocery.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;