import React, {useEffect} from 'react';
import {Row} from 'antd';

import AboutUsBlock from '../../blocks/AboutUsBlock/AboutUsBlock';
import ContactsBlock from '../../blocks/ContactsBlock/ContactsBlock';
import GotAnyQuestionsBlock from '../../blocks/GotAnyQuestionsBlock/GotAnyQuestionsBlock';
import LeaveAnAppModal from '../../modals/LeaveAnAppModal';

import styles from './AboutPage.module.css';

function AboutPage({ onClickHandler, onSubmit }) {
	useEffect(() => {
		window.scroll({top: 0, left: 0, behavior: 'smooth'});
	}, []);
	return (
		<Row className={styles.row}>
			<AboutUsBlock />
			<ContactsBlock />
			<GotAnyQuestionsBlock onClickHandler={onClickHandler} />
			<LeaveAnAppModal onCancel={onClickHandler} onSubmit={onSubmit} />
		</Row>
	);
}

export default AboutPage;