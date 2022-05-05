import React from 'react';
import { Row, Typography } from 'antd';

import CustomListItem from '../../base/CustomListItem';

import styles from './RecomendationsBlock.module.css';
import useData from './hooks/useData';

const {Title} = Typography;

function RecomendationsBlock({product, onClickHandler}) {

	const {data} = useData(product);

	return (
		<Row className={styles.row}>
			<Title> 
            С этим товаром покупают:
			</Title>
			<ul className={styles.list}>
				{data.map(el => (
					<CustomListItem 
						src={el.src} 
						title={el.title} 
						text={el.text} 
						onClickHandler={onClickHandler} 
						link={el.link} 
						key={el.link}
					/>
				))}
			</ul>
                  
		</Row>
	);
}

export default RecomendationsBlock;