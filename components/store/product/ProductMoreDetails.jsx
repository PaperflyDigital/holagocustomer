import React from 'react'

const ProductMoreDetails = () => {
  return (
    <div>
        <p className='py-2 text-sm'>Model is 5’10” wearing a L size.</p>
          <p className='py-2 text-sm'>1 Pc In Stock.</p>
          <div>
            <div className="collapse collapse-arrow bg-white border border-[#CCCCCC]">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title  font-medium">Fabric info</div>
              <div className="collapse-content text-sm">
                <p>Fit type: Regular fit</p>
                <p>Fabric: Ottoman</p>
                <p>Fabric: Ottoman</p>
                <p>Fabric: Ottoman</p>
                <p>Fabric: Ottoman</p>
                <p>Fabric: Ottoman</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-white border border-[#CCCCCC]">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title  font-medium">Description</div>
              <div className="collapse-content text-sm">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam magnam nesciunt eius possimus officiis earum delectus consequuntur esse numquam qui.</p>
              </div>
            </div>
          </div>
    </div>
  )
}

export default ProductMoreDetails