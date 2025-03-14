import React, { useContext } from 'react'
import GreatGrandChildren from './GreatGrandChildren'
import { myContext } from './Parent'

const GrandChildren = (props) => {

    const bat = useContext(myContext)
  return (
    <div>
        {/* <GreatGrandChildren /> */}
        {bat}
    </div>
  )
}

export default GrandChildren