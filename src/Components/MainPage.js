import React from 'react'
import './MainPage.css'
import ImgAsset from '../public'
export default function MainPage () {
	return (
		<div className='MainPage_MainPage'>
			<img className='MainCover' src = {ImgAsset.MainPage_MainCover} />
			<img className='logo' src = {ImgAsset.MainPage_logo} />
			<span className='Authenticfoodonyourtable'>Authentic food on your table. </span>
			<span className='Iam'>I am </span>
			<div className='Customer'>
				<div className='Rectangle1'/>
				<span className='Customer_1'>Customer</span>
			</div>
			<div className='Restaurateur'>
				<div className='Rectangle2'/>
				<span className='Restaurateaur'>Restaurateaur</span>
			</div>
			<span className='ContactUs'>Contact Us</span>
			<span className='About'>About</span>
			<span className='_'>|</span>
			<img className='Vector' src = {ImgAsset.MainPage_Vector} />
		</div>
	)
}