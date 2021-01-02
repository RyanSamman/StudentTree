import React, { useState } from 'react';
import { Canvas, Edge, EdgeData, Node, NodeData } from 'reaflow';
import InfoMenu from './components/InfoMenu/InfoMenu';
import students, { Student } from './students';

const studentNodes: NodeData<Student>[] = students.map(s => (
  {
    id: `${s.name}`,
    text: s.name,
    data: s,
  }
))

const studentEdges: EdgeData[] = students.map(s => (
  {
    id: `${s.major}-${s.name}`,
    from: s.major+s.year,
    to: s.name
  }
))

const nodes: NodeData<Student | undefined>[] = [
  {
    id: 'FCIT',
    text: 'FCIT'
  },
  {
    id: 'FCIT18',
    text: 'FCIT18'
  },
  {
    id: 'FCIT20',
    text: 'FCIT20'
  },
  {
    id: 'IT18',
    text: 'Information Technology'
  },
  {
    id: 'IS18',
    text: 'Information Systems'
  },
  {
    id: 'CS18',
    text: 'Computer Science'
  },
  {
    id: 'IT20',
    text: 'Information Technology'
  },
  {
    id: 'IS20',
    text: 'Information Systems'
  },
  {
    id: 'CS20',
    text: 'Computer Science'
  },
  ...studentNodes
];

const edges: EdgeData[] = [
  {
    id: 'FCIT-FCIT18',
    from: 'FCIT',
    to: 'FCIT18'
  },
  {
    id: 'FCIT-FCIT20',
    from: 'FCIT',
    to: 'FCIT20'
  },
  {
    id: 'FCIT18-IT',
    from: 'FCIT18',
    to: 'IT18'
  },
  {
    id: 'FCIT18-IS',
    from: 'FCIT18',
    to: 'IS18'
  },
  {
    id: 'FCIT18-CS',
    from: 'FCIT18',
    to: 'CS18'
  },
  {
    id: 'FCIT20-IT',
    from: 'FCIT20',
    to: 'IT20'
  },
  {
    id: 'FCIT20-IS',
    from: 'FCIT20',
    to: 'IS20'
  },
  {
    id: 'FCIT20-CS',
    from: 'FCIT20',
    to: 'CS20'
  },
  ...studentEdges
];

function App() {
  const [student, setStudent] = useState<Student | undefined>(students[0]);

  const handleChangeStudent = (newStudent: Student) => {
    // Close Menu if it's open on the same student
    if (newStudent === student) {
      setStudent(undefined)
    } else {
      setStudent(newStudent)
    }
  }

  return (
    <>
      <h1>Click on a student</h1>
      {student ? <InfoMenu student={student} setStudent={setStudent} /> : null}
      <Canvas
        nodes={nodes}
        edges={edges}
        width={window.innerWidth}
        height={window.innerHeight}
        node={(props) => <Node {...props} onClick={_ => handleChangeStudent(props.properties?.data)} />}
        edge={(props) => <Edge {...props} onClick={_ => setStudent(undefined)} />}
      />
    </>
  );
}

export default App;
