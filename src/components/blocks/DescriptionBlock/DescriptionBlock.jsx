import React from 'react';
import {Row, Col} from 'antd';

import Carousel from '../../base/Carousel';
import ProductDescription from '../../base/ProductDescription';

import styles from './DescriptionBlock.module.css';

function DescriptionBlock({product, id, onClickHandler}) {

	return (
		<Row className={styles.div}>
			<Col span={12}>
				<Carousel productVar={product} />
			</Col>
			<Col span={10} offset={2} >
				<ProductDescription product={product} id={id} onClickHandler={onClickHandler} />
			</Col>
		</Row>
	);
}

export default DescriptionBlock;