import React from 'react';
import {Row, Image, Col, Typography, Button} from 'antd';
import {useTranslation} from 'react-i18next';
import {NavLink} from 'react-router-dom';

import image from '../../../assets/images/Illustration.jpg';

import styles from './WhatWeDoBlock.module.css';

const {Title, Paragraph} = Typography;

function WhatWeDoBlock() {
	const {t} = useTranslation();

	return (
		<Row>
			<Col span={11} className={styles.col} >
				<Title className={styles.title} >
					{t('whatWeDo.title')}
				</Title>
				<Paragraph className={styles.paragraph} >
					{t('whatWeDo.text')}
				</Paragraph>
				<Button className={styles.btn} >
					<NavLink to="/about">
						{t('whatWeDo.btnText')}
					</NavLink>
				</Button>
			</Col>
			<Col span={10} offset={3} >
				<Image src={image} preview={false} />
			</Col>
		</Row>
	);
}

export default WhatWeDoBlock;