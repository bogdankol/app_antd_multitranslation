import React from 'react';
import { Row, Col, Image, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

import image1 from '../../../assets/images/about_1.jpg';

import styles from './AboutUsBlock.module.css';

const { Title, Paragraph } = Typography;

function AboutUsBlock() {
	const {t} = useTranslation();
	return (
		<Row className={styles.row} align="top" >
			<Col span={12}>
				<Image width={'100%'} src={image1} preview={false} />
			</Col>
			<Col span={10}>
				<Title className={styles.title}>{t('aboutUs.title')}</Title>
				<Paragraph className={styles.paragraph}>
					{t('aboutUs.firstParagraph')}
				</Paragraph>
				<Paragraph className={styles.paragraph}>
					{t('aboutUs.secondParagraph')}
				</Paragraph>
			</Col>
		</Row>
	);
}

export default AboutUsBlock;
