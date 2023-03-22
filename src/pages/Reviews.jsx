import React from 'react'
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Reviews() {
  return (
    <div id="reviews">
      <h2 className="text-center">Reseñas</h2>
      <div>
        <Link to="https://www.instagram.com/stories/highlights/18102556177255428/?hl=de" className="text-center"><h3>Ver todas las reseñas en Instagram</h3></Link>
      </div>
      <div className="review-center-carousel">
        <Carousel className="review-carousel-ctn">
          <Carousel.Item>
            <img
              className="d-block review-carousel-image"
              src="../images/review0.png"
              alt="Review 0"
              style={{height: "75vh"}}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block review-carousel-image"
              src="../images/review1.png"
              alt="Review 1"
              style={{height: "75vh"}}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block review-carousel-image"
              src="../images/review2.png"
              alt="Review 2"
              style={{height: "75vh"}}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block review-carousel-image"
              src="../images/review3.png"
              alt="Review 3"
              style={{height: "75vh"}}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block review-carousel-image"
              src="../images/review4.png"
              alt="Review 4"
              style={{height: "75vh"}}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}

export default Reviews
