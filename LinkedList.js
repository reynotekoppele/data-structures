/**
 * Handle entries via a (double) linked list.
 */
class LinkedList {
	#head = null;

	/**
	 * Add element to list.
	 *
	 * @param {any} data Data to append.
	 */
	add = ( data ) => {
		const node = new ListNode( data );

		// If the list is empty.
		if ( this.#head === null ) {
			this.#head = node;
			return;
		}

		// Get the last item.
		let current = this.#head;
		while ( current.next ) {
			current = current.next;
		}

		// Append to last item.
		current.next = node;
		node.prev = current;
	};

	/**
	 * Insert element at given index.
	 *
	 * @param {number} index Index to insert at.
	 * @param {any}    data  Data to append.
	 */
	insertAt = ( index, data ) => {
		// Check index range.
		this.#isOutOfBounds( index );

		// Get nodes.
		const node = new ListNode( data );
		let current = this.#head;

		// Reassign if it's the start.
		if ( index === 0 ) {
			node.next = current;
			this.#head = node;
			return;
		}

		// Get item for given index.
		while ( --index ) {
			if ( current.next !== null ) {
				current = current.next;
			}
		}

		// Assign new pointers.
		const temp = current.next;
		current.next = node;
		node.next = temp;
		node.prev = current;

		let previous = current.prev;
		while ( current.next ) {
			if ( current.next !== null ) {
				previous = current;
				current = current.next;
			}

			current.prev = previous;
		}
	};

	/**
	 * Remove element from list based on given index.
	 *
	 * @param {number} index Index to remove.
	 */
	removeFrom = ( index ) => {
		// Check index range.
		this.#isOutOfBounds( index );

		// Get node.
		let current = this.#head;

		// Reassign if it's the first item.
		if ( index === 0 ) {
			current = current.next;
			current.prev = null;
			this.#head = current;
			return;
		}

		// Get item for given index.
		while ( --index ) {
			if ( current.next !== null ) {
				current = current.next;
			}
		}

		// Reassign pointers.
		current.next.next.prev = current;
		current.next = current.next.next;
	};

	/**
	 * Get element at given index.
	 *
	 * @param {number} index Index of element to return.
	 *
	 * @return {ListNode} Found element.
	 */
	getNode = ( index ) => {
		// Check index range.
		this.#isOutOfBounds( index );

		// Get node.
		let current = this.#head;

		// Return if it's the first item.
		if ( index === 0 ) {
			return current;
		}

		// Get item for given index.
		while ( index-- ) {
			current = current.next;
		}

		// Return node.
		return current;
	};

	/**
	 * Get index of element based on given data.
	 *
	 * @param {any} data Data of element to retrieve index for.
	 */
	indexOf = ( data ) => {
		let current = this.#head;
		let index = -1;

		while ( current ) {
			index++;
			if ( current.data === data ) {
				return index;
			}

			current = current.next;
		}

		return -1;
	};

	/**
	 * Get size of list.
	 */
	size = () => {
		let size = 0;
		let node = this.#head;

		while ( node ) {
			size++;
			node = node.next;
		}

		return size;
	};

	/**
	 * Remove all entries in the list.
	 */
	clear = () => {
		this.#head = null;
	};

	/**
	 * Check if the list is empty.
	 *
	 * @return {boolean} Indiciates whether the list is empty.
	 */
	isEmpty = () => {
		return this.#head === null;
	};

	/**
	 * Print the list as string.
	 */
	print = () => {
		let node = this.#head;
		let output = 'HEAD->';

		// If the list is not empty.
		while ( node ) {
			output += `${ node.data }->`;
			node = node.next;
		}

		output += 'NULL';
		console.log( output ); // eslint-disable-line no-console
	};

	/**
	 * Throws error if index is out of bounds.
	 *
	 * @throws {RangeError}
	 *
	 * @param {number} index Given index that is out of bounds.
	 */
	#isOutOfBounds = ( index ) => {
		if ( index < 0 || index > this.size() ) {
			throw new RangeError( `Index ${ index } is outside of the range 0-${ this.size() }` );
		}
	};
}

class ListNode {
	constructor( data ) {
		this.data = data;
		this.next = null;
		this.prev = null;
	}
}

export default LinkedList;
