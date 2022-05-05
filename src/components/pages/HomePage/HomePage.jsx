import React from 'react';
import {Row} from 'antd';

import DescriptionBlock from '../../blocks/DescriptionBlock';
import WhatWeDoBlock from '../../blocks/WhatWeDoBlock';
import RecomendationsBlock from '../../blocks/RecomendationsBlock';
import GotAnyQuestionsBlock from '../../blocks/GotAnyQuestionsBlock';
import LeaveAnAppModal from '../../modals/LeaveAnAppModal';


import styles from './HomePage.module.css';

function HomePage({onClickHandler, onSubmit}) {

	return (
		<Row className={styles.div}>
			<DescriptionBlock product='drill' id='1' onClickHandler={onClickHandler} />
			<WhatWeDoBlock onClickHandler={onClickHandler} />
			<RecomendationsBlock product='drill' id='1' onClickHandler={onClickHandler} />
			<GotAnyQuestionsBlock onClickHandler={onClickHandler} />
			<LeaveAnAppModal onCancel={onClickHandler} onSubmit={onSubmit} />
		</Row>
	);
}

export default HomePage;