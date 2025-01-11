import { KeyboardMixin } from '../mixins/KeyboardMixin';
import { FirstPersonControls, type Action } from './core/FirstPersonControls';

class FPKeyboardControls extends KeyboardMixin( FirstPersonControls ) {

	keyToActions: Record<string, Action[]> = {
		'KeyW': [ 'MOVE_FORWARD' ],
		'KeyS': [ 'MOVE_BACKWARD' ],
		'KeyA': [ 'MOVE_LEFTWARD' ],
		'KeyD': [ 'MOVE_RIGHTWARD' ],
		'Space': [ 'JUMP' ],
		'ShiftLeft': [ 'ACCELERATE' ],
		'ArrowUp': [ 'ROTATE_UP' ],
		'ArrowDown': [ 'ROTATE_DOWN' ],
		'ArrowRight': [ 'ROTATE_RIGHT' ],
		'ArrowLeft': [ 'ROTATE_LEFT' ]
	};

}

export { FPKeyboardControls };
