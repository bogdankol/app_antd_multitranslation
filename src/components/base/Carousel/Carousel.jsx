import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import {Image} from 'antd';

import drill1 from '../../../assets/images/мотобур1.jpg';
import drill2 from '../../../assets/images/мотобур2.jpg';
import drill3 from '../../../assets/images/мотобур3.jpg';
import tank4 from '../../../assets/images/бак1.png';
import tank5 from '../../../assets/images/бак2.jpg';
import tank6 from '../../../assets/images/бак3.jpg';
import tube7 from '../../../assets/images/tube1.jpg';
import tube8 from '../../../assets/images/tube2.jpg';

import styles from './Carousel.module.css';


function Carousel({productVar}) {
	const [index, setIndex] = useState(0);
	const {product} = useParams();

	const srcObj = {
		drill: [drill1, drill2, drill3],
		tank: [tank4, tank5, tank6],
		tube: [tube7, tube8]
	};

	function nextSrc () {
		setIndex(prev => {
			if(prev === srcObj[product || productVar].length - 1) return 0;
			return prev + 1;
		});
	}

	function previousSrc () {
		setIndex(prev => {
			if(prev === 0) return (srcObj[product || productVar].length - 1);
			return prev - 1;
		});
	}

	return (
		<div className={styles.div}>
			<div className={styles.innerDiv}>
				<button onClick={previousSrc} className={styles.btn} > next </button>
				<Image src={srcObj?.[product || productVar]?.[index]} preview className={styles.img} />
				<button onClick={nextSrc} className={styles.btn} > next </button>
			</div>
			<ul className={styles.indicatorList}>
				{srcObj?.[product || productVar].map((el, idx) => (
					<li className={idx === index ? styles.indicatorActive : styles.indicator} key={idx} ></li>
				))}
			</ul>
		</div>
	);
}

export default Carousel;