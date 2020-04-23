import React from "react";
import Table from "./table";

const FieldAgent = () => (
	<div style={{ display: "flex", flexDirection: "column" }}>
		<div className='controller'>controller</div>
		<div className='table' style={{}}>
			<Table />
		</div>
	</div>
);
export default FieldAgent;
