
import {useTranslation} from 'react-i18next';

function useData() {
	const {t} = useTranslation();

	const data =  [{
		src: '/images/мотобур3.jpg',
		title: t('equipment.titleOne'),
		description: t('equipment.descOne'),
		link: t('equipment.linkOne')
	},{
		src: '/images/бак1.jpg',
		title: t('equipment.titleTwo'),
		description: t('equipment.descTwo'),
		link: t('equipment.linkTwo')
	},{
		src: '/images/truba1.jpg',
		title: t('equipment.titleThree'),
		description: t('equipment.descThree'),
		link: t('equipment.linkThree')
	}];

	return data;
}

export default useData;