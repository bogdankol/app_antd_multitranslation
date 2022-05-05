import React, {useEffect} from 'react';
import {  useParams  } from 'react-router-dom';
import {Row} from 'antd';

import DescriptionBlock from '../../blocks/DescriptionBlock';
import RecomendationsBlock from '../../blocks/RecomendationsBlock';
import GotAnyQuestionsBlock from '../../blocks/GotAnyQuestionsBlock';
import LeaveAnAppModal from '../../modals/LeaveAnAppModal';

import styles from './ProductPage.module.css';

function ProductPage({onClickHandler, onSubmit}) {
	const {product, id} = useParams();

	useEffect(() => {
		window.scroll({top: 0, left: 0, behavior: 'smooth' });
	}, [product, id]);

	return (
		<Row className={styles.div}>
			<DescriptionBlock product={product} id={id} onClickHandler={onClickHandler} />
			<RecomendationsBlock product={product} id={id} onClickHandler={onClickHandler} />
			<GotAnyQuestionsBlock onClickHandler={onClickHandler} />
			<LeaveAnAppModal onCancel={onClickHandler} onSubmit={onSubmit}  />
		</Row>
	);
}

export default ProductPage;