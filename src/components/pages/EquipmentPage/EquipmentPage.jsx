import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { Typography, Image, Button } from 'antd';
import { useTranslation } from 'react-i18next';

import GotAnyQuestionsBlock from '../../blocks/GotAnyQuestionsBlock';
import LeaveAnAppModal from '../../modals/LeaveAnAppModal';

import styles from './EquipmentPage.module.css';
import useData from './hooks/useData';

const { Title, Paragraph } = Typography;

function EquipmentPage({onClickHandler, onSubmit}) {
	const data = useData();
	const { t } = useTranslation();

	useEffect(() => {
		window.scroll({top: 0, left: 0, behavior: 'smooth'});
	}, []);

	return (
		<div className={styles.div}>
			<ul className={styles.list}>
				{data.map((el, index) => (
					<>
						<li className={styles.item} key={index}>
							<Image src={el.src} width={236} height={'100%'} />
							<div className={styles.innerDiv}>
								<div className={styles.innerInnerDiv}>
									<NavLink to={el.link} >
										<Title className={styles.title}>
											{el.title}
										</Title>
									</NavLink>
                                
									<Paragraph className={styles.paragraph}>
										{el.description}
									</Paragraph>
								</div>
								<Button type="primary" className={styles.btn} onClick={onClickHandler}>
									{t('buyBtn')}
								</Button>
							</div>
						</li>
                    
					</>
				))}
			</ul>
			<GotAnyQuestionsBlock />
			<LeaveAnAppModal onCancel={onClickHandler} onSubmit={onSubmit} />
		</div>
	);
}

export default EquipmentPage;
