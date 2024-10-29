import React, {useState} from "react";
import Light from "../component/Light";


const Home = () => {
	const [ color, setColor ] = useState("red")

	function handleClick(event) {
		setColor(event.target.accessKey)
	}
	
	return (
		<div className="container">
			<div className="row ">
				<div className="col-12 d-flex justify-content-center">
					<div className="mount"></div>
				</div>
				<div className="col-12 d-flex justify-content-center">
					<div className="traffic-light rounded">
						<Light handleClick={handleClick} color="red" shadow={color} />
						<Light handleClick={handleClick} color="orange" shadow={color} />
						<Light handleClick={handleClick} color="green" shadow={color} />
					</div>
				</div>
			</div>
		</div>
	)
};

export default Home;
