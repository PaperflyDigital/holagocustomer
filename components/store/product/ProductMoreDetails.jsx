import React from "react";

const ProductMoreDetails = ({ product, selectedSize }) => {
  return (
    <div>
      <div className="py-2 text-sm" dangerouslySetInnerHTML={{ __html: product.productShortDescription }}></div>
      <p className="py-2 text-sm">{selectedSize?.quantity} Pc In Stock.</p>
      <div>
        <div className="collapse collapse-arrow bg-white border border-[#CCCCCC]">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title  font-medium">Fabric info</div>
          <div className="collapse-content text-sm">
            <p>
              Fabric: <span className="font-semibold">{product.fabric}</span>
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-white border border-[#CCCCCC]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title  font-medium">Description</div>
          <div className="collapse-content text-sm">
            <div
              dangerouslySetInnerHTML={{ __html: product.productDescription }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMoreDetails;
