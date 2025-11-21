import React from 'react'

const ProductSkeleton = () => {
 
   return (
     <div className="container py-5">
       <div className="row align-items-start justify-content-center">
         {/* Product Image Skeleton */}
         <div className="col-lg-6 mb-4">
           <div
             className="bg-secondary rounded shadow-sm w-100"
             style={{
               height: "500px",
               opacity: 0.3,
             }}
           ></div>
         </div>

         {/* Product Info Skeleton */}
         <div className="col-lg-6">
           {/* Category */}
           <div
             className="bg-secondary rounded mb-3"
             style={{ height: "14px", width: "25%", opacity: 0.3 }}
           ></div>

           {/* Product Name */}
           <div
             className="bg-secondary rounded mb-3"
             style={{ height: "20px", width: "50%", opacity: 0.3 }}
           ></div>

           {/* Pricing */}
           <div className="d-flex gap-0 mb-3">
             <div
               className="bg-secondary rounded"
               style={{ height: "16px", width: "35%", opacity: 0.3 }}
             ></div>
           </div>

           {/* Description Title */}
           <div
             className="bg-secondary rounded mb-2"
             style={{ height: "14px", width: "50%", opacity: 0.3 }}
           ></div>

           {/* Description Text */}
           <div
             className="bg-secondary rounded mb-2"
             style={{ height: "12px", width: "100%", opacity: 0.3 }}
           ></div>
           <div
             className="bg-secondary rounded mb-2"
             style={{ height: "12px", width: "100%", opacity: 0.3 }}
           ></div>
           <div
             className="bg-secondary rounded mb-3"
             style={{ height: "12px", width: "75%", opacity: 0.3 }}
           ></div>

           {/* Product Details List */}
           {[...Array(6)].map((_, i) => (
             <div
               key={i}
               className="bg-secondary rounded mb-2"
               style={{ height: "12px", width: "50%", opacity: 0.3 }}
             ></div>
           ))}
         </div>
       </div>
     </div>
   );

}

export default ProductSkeleton
