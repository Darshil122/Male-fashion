import React from 'react';

const ProductsSkeleton = () => {
  const skeletonArray = Array.from({ length: 8 });

  return (
    <div className="row">
      {skeletonArray.map((_, index) => (
        <div key={index} className="col-lg-3 col-md-6 col-sm-6 mb-4">
          <div className="product__item">
            {/* Image Skeleton */}
            <div
              className="bg-secondary rounded mb-3 w-100"
              style={{
                height: '250px',
                opacity: 0.2,
              }}
            ></div>

            <div className="product__item__text">
              {/* Name */}
              <div
                className="bg-secondary rounded mb-2"
                style={{ height: '16px', width: '80%', opacity: 0.2 }}
              ></div>

              {/* Category */}
              <div
                className="bg-secondary rounded mb-2"
                style={{ height: '14px', width: '60%', opacity: 0.2 }}
              ></div>

              {/* Add to Cart button */}
              <div
                className="bg-secondary rounded mb-2"
                style={{ height: '16px', width: '40%', opacity: 0.2 }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsSkeleton;
