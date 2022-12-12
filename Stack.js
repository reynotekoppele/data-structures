/**
 * Handle entries via a stack. *(similar to stacking books (LIFO))*.
 *
 * *Change `any` to the correct type for better error checking.*
 */
class Stack {
	/** @type {any[]} */
	#entries = [];

	/**
	 * Add entry to the end of the stack.
	 *
	 * @param {any} entry Entry to add.
	 *
	 * @return {any} Added entry.
	 */
	add = ( entry ) => {
		this.#entries.push( entry );
		return entry;
	};

	/**
	 * Remove last entry from the queue.
	 *
	 * @return {any} Removed entry.
	 */
	remove = () => {
		return this.#entries.pop();
	};

	/**
	 * Check if the queue is empty.
	 *
	 * @return {boolean} Indicates whether the queue is empty.
	 */
	isEmpty = () => {
		return this.length === 0;
	};

	/**
	 * Get the current length of the queue.
	 *
	 * @return {number} Current length of the queue.
	 */
	length = () => {
		return this.#entries.length;
	};

	/**
	 * Get the last entry from the queue.
	 *
	 * @return {any} Last entry in the queue.
	 */
	peek = () => {
		return this.#entries.at( -1 );
	};
}
export default Stack;
