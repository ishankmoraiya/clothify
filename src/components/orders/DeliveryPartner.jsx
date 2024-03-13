import React from 'react'
import SidePanel from "./SidePanel"

const DeliveryPartner = () => {
  return (
    <div className="order_grid">
      <SidePanel page="delivery" />
      <div className="order_row">
        <h1>Delivery Partner</h1>
      </div>
    </div>
  )
}

export default DeliveryPartner