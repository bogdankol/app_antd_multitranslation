import {
	useState,
	useEffect
} from 'react';
import {
	useTranslation
} from 'react-i18next';

function useData() {
	const [links, setLinks] = useState([]);
	const {
		t,
		i18n
	} = useTranslation();
	const {
		language
	} = i18n;

	useEffect(() => {
		setLinks([
			{
				text: t('navigation.firstLink', {ns: 'translation'}),
				to: '/home'
			},
			{
				text: t('navigation.secondLink'),
				to: '/equipment'
			},
			{
				text: t('navigation.thirdLink'),
				to: '/about'
			}
		]);
	}, [language]);

	return links;
}

export default useData;