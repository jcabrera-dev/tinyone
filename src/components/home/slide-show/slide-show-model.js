import { Model }		from 'react-axiom';

class SlideShowModel extends Model {
	static defaultState() {
		return {
			id: null,
			url: ''
		}
	}
}

export default SlideShowModel;