import React from 'react';
import logo from './logo.svg';
import './App.css';

	const names = ['Luke', 'Anakin', 'Han', 'Leïa'];
	const habillage = 'listeexo';

	function ElementH1() {
				return (
					<h1>
						Hello World!
					</h1>
				)
		}


	function GetElems(props){
			return <ul>{
					props.liste.map((elem, index)=>{
							return <li key={index} className={props.style}>{elem}</li>
					})
				}
			</ul>
	}

		function ElementCond(props){
					if (props.isConnected) {
						return (
							<h3>Connected ! </h3>
						)
					} else {
						return (
							<h3>Not Connected ! </h3>
						)
					}
				}

	let Calcul = (props) => {
		let disque = props.num * props.num * 3.14116
		let resultStr = `rayon ${props.num}, surface du disque = ${disque}`
				return (
					<p>
					{console.info(props.num)}
 					{resultStr}
				</p>
 			)
		}


	function AllInclude(props) {
				return (
						<>
							<ElementH1 />
							<ElementCond isConnected={true}/>
							<Calcul num={2}/>
							<GetElems liste={names} style={habillage}/>
						</>
				);
	}

export default AllInclude;
