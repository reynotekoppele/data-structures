/**
 * Handle entries via a queue. *(similar to a ticket line at a movie theater (FIFO))*.
 *
 * *Change `any` to the correct type for better error checking.*
 */
class Queue {
	/** @type {any[]} */
	#entries = [];

	/**
	 * Add entry to the end of the queue.
	 *
	 * @param {any} entry Entry to add.
	 *
	 * @return {any} Added entry.
	 */
	enqueue = ( entry ) => {
		this.#entries.push( entry );
		return entry;
	};

	/**
	 * Remove first entry from the queue.
	 *
	 * @return {any} Removed entry.
	 */
	dequeue = () => {
		return this.#entries.shift();
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
	 * Get the first entry from the queue.
	 *
	 * @return {any} First entry in the queue.
	 */
	peek = () => {
		return this.#entries.at( 0 );
	};
}

export default Queue;
