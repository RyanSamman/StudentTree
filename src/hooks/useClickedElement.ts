import {useEffect, useRef} from 'react'


/**
 * This hook checks if a click has occurred outside an element
 * @param callback A function to run if the click is outside the element
 * @returns A Reference to the element to check for clicks
 */
export default function useClickedElement<T extends HTMLElement>(callback: (clicked: boolean, e: MouseEvent) => any) {
	const referencedElement = useRef<T>(null)

	useEffect(() => {
		const handleClick = (elem: MouseEvent) => {

			// Check if clicked element is the info menu or a child of it
			const found = !!elem.composedPath()
								.find(e => e === referencedElement.current)

			callback(found, elem)
		}

		window.addEventListener("click", handleClick)
		return () => window.removeEventListener("click", handleClick)
	})


	return referencedElement
}