import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import { useTranslation } from 'react-i18next';

import styles from './GotAnyQuestionsBlock.module.css';

const { Title, Paragraph } = Typography;

function GotAnyQuestionsBlock({ onClickHandler  }) {
	const {t} = useTranslation();

	return (
		<Row className={styles.row} align="middle">
			<Col span={12}>
				<Title className={styles.title}>
					{t('gotQuestions.title')}
				</Title>
				<Paragraph className={styles.text}>
					{t('gotQuestions.text')}
				</Paragraph>
			</Col>
			<Col span={9} offset={3} >
				<Button type="primary" block className={styles.button} onClick={onClickHandler}>
					{t('gotQuestions.btnText')}
				</Button>
			</Col>
		</Row>
	);
}

export default GotAnyQuestionsBlock;