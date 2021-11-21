import React from 'react';
import '../ProductContainer/productContainer.css';
import p1 from "../../images/1.png";
import p2 from "../../images/2.png";


class ProductContainer extends React.Component {
    render() { 
        return (
			<>
            <div className="d-flex justify-content-start">
				<div className="card" >
					<div className ="heart" >
						<a>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
								<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
					  		</svg>
						</a>
					</div>
					<div className ="cardImage">
						<img src = {p1} alt = "AAA"/>
					</div>
					<h5>Juice</h5>
					<p className="price">500 dr</p>
					<p><button>Add</button></p>
				</div>	
				<div className="card" >
					<div className ="heart" >
						<a>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
								<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
					  		</svg>
						</a>
					</div>
					<div className ="cardImage">
						<img src = {p2} alt = "AAA"/>
					</div>
					<h5>Coca Cola</h5>
					<p className="price">500 dr</p>
					<p><button>Add</button></p>
				</div>
				<div className="card" >
					<div className ="heart" >
						<a>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
								<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
					  		</svg>
						</a>
					</div>
					<div className ="cardImage">
						<img src = {p1} alt = "AAA"/>
					</div>
					<h5>Juice</h5>
					<p className="price">500 dr</p>
					<p><button>Add</button></p>
				</div>	
				<div className="card" >
					<div className ="heart" >
						<a>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
								<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
					  		</svg>
						</a>
					</div>
					<div className ="cardImage">
						<img src = {p2} alt = "AAA"/>
					</div>
					<h5>Coca Cola</h5>
					<p className="price">500 dr</p>
					<p><button>Add</button></p>
				</div>

			</div>
			<img />
			</>
        )
    }
}
 
export default ProductContainer;