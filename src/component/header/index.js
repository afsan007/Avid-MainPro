import React from "react";
import { Link } from "react-router-dom";
const Header = () => (
	<div className='header'>
		<Link to='/ctrl-center'> control center</Link>
		<Link to='/field-agent'>Field Agent</Link>
	</div>
);
export default Header;
