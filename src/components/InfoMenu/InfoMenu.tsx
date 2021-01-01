import React, { FC, ReactElement } from 'react';
import useClickedElement from '../../hooks/useClickedElement';
import { Student } from '../../students';
import util from './../../util/util';



type InfoMenuProps = {
	student: Student | undefined,
	setStudent: (student: Student | undefined) => any,
	style?: React.CSSProperties,
}

const defaultMenuStyle: React.CSSProperties = {
	position: 'fixed',
	zIndex: 1,
	left: 0,
	bottom: 0,
	margin: "auto",
	width: 500,
	maxWidth: "100vw",
	height: 200,
	border: "4px solid black",
	backgroundColor: "#fff",
}

const InfoMenu: FC<InfoMenuProps> = ({ student, setStudent, style = defaultMenuStyle }): ReactElement => {
	// const [menuStyle, setMenuStyle] = useState<React.CSSProperties>(() => style)

	const menuElement = useClickedElement<HTMLDivElement>(clicked => !clicked && setStudent(undefined));

	if (!student) {
		setStudent(undefined)
		return <></>
	}

	return (
		<div id="InfoMenu" ref={menuElement} style={style}>
			<h1>{student.name}</h1>
			<h2>{student.major}</h2>
			{student.title ? <h3>{student.title}</h3> : null}
			<div style={{ display: "flex" }}>
				{
					!student.social
						? null
						: Object
							.entries(student.social)
							.map(([type, data]) => util.mapToIcon(type, data))
				}
			</div>
		</div>
	)
}

export default InfoMenu
