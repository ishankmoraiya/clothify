import React from 'react'
import SidePanel from './SidePanel'

const Shipment = () => {
  return (
    <div className="order_grid">
      <SidePanel page="shipment" />
      <div className="order_row">
        <h1>Shipment</h1>
      </div>
    </div>
  )
}

export default Shipment