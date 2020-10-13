import React from 'react'
import {BASE_URL} from "../config.js"


const ShowImage=(item)=>{
const image1=`${BASE_URL}/api/product/photo/5f7f50ce275a8612ecea5ebd`

	return (
	<div className="product-img">
		<img src={image1} alt="Book" style={{"maxHeight":"50%" ,"maxWidth":"70%"}} className="mb-3"/>
	</div>
		)
}



	export default ShowImage