import React from 'react';
import { Typography, List, Button } from 'antd';
import { useTranslation } from 'react-i18next';

import { Galochka } from '../../../assets/icons/Galochka';
import productData from '../../translations/en/productsData.json';

import styles from './ProductDescription.module.css';

const { Title, Paragraph } = Typography;

function ProductDescription({product, id, onClickHandler}) {
	const {t} = useTranslation();

	return (
		<div className={styles.div}>
			<Title className={styles.title}>
				{t(`productsData:${product}.${id}.title`)}
			</Title>
			<Paragraph className={styles.paragraph}>
				{t(`productsData:${product}.${id}.paragraphOne`)}
			</Paragraph>
			{ productData?.[product]?.[id]?.paragraphTwo && <Paragraph className={styles.paragraph}>
				{t(`productsData:${product}.${id}.paragraphTwo`)}
			</Paragraph>}
			{ productData?.[product]?.[id]?.paragraphThree && <Paragraph className={styles.paragraph}>
				{t(`productsData:${product}.${id}.paragraphThree`)}
			</Paragraph>}
			{ productData?.[product]?.[id]?.paragraphFour && <Paragraph className={styles.paragraph}>
				{t(`productsData:${product}.${id}.paragraphFour`)}
			</Paragraph>}
			<List
				className={styles.list}
				dataSource={productData?.[product]?.[id]?.features}
				renderItem={(el, index) => (
					<List.Item className={styles.item}>
						<Galochka className={styles.svg}/>
						{t(`productsData:${product}.${[id]}.features:${[index]}`)}
					</List.Item>
				)}
			>
			</List>
			<Button className={styles.btn} onClick={onClickHandler}>
				{t('buyBtn')}
			</Button>
		</div>
	);
}

export default ProductDescription;
