import React from 'react';
import { Row, Col, Image, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

import image2 from '../../../assets/images/about_2.jpg';

import styles from './ContactsBlock.module.css';

const { Title, Paragraph } = Typography;

function ContactsBlock() {
	const {t} = useTranslation();
	return (
		<Row className={styles.row} align="middle" >
			<Col span={10}>
				<Title className={styles.title}>{t('footer.contacts')}</Title>
				<Paragraph className={styles.paragraph}>
                    E-mail: <a href="mailto:bogdank208@gmail.com" className={styles.link}>bogdank208@gmail.com</a>
				</Paragraph>
			</Col>
			<Col span={10}>
				<Image width={'100%'} src={image2} preview={false} />
			</Col>
		</Row>
	);
}

export default ContactsBlock;