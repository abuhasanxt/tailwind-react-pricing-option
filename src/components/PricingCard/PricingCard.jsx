import React from "react";
import PricingFeatures from "./PricingFeatures";

const PricingCard = ({ pricing }) => {
  const { name, price, description, features } = pricing;
  return (
    <div className="flex flex-col border bg-amber-700 rounded-2xl p-4">
      {/* card header */}
      <div>
        <h1 className="text-4xl">{name}</h1>
        <h3 className="text-xl">{price}</h3>
      </div>
      {/* card body */}
      <div className="bg-amber-400 p-2 mt-5 rounded-2xl flex-1">
        <p>{description}</p>
        {
            features.map((feature,index)=><PricingFeatures key={index} feature={feature}></PricingFeatures>)
        }
      </div>
      <button className="btn w-full my-2">subscribe</button>
    </div>
  );
};

export default PricingCard;
