import { ReactComponent as CheckSVG } from '../resources/check.svg';
import { ReactComponent as DeleteSVG } from '../resources/delete.svg';
import '../css/TodoIcon.css';

const iconTypes = {
	check: <CheckSVG className='Icon-svg' />,
	delete: <DeleteSVG className='Icon-svg' />,
};

function TodoIcon({ type }) {
	return (
		<span className={`Icon-container Icon-container-${type}`}>
			{iconTypes[type]}
		</span>
	);
}

export { TodoIcon };
