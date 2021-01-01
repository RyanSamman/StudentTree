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
    from: s.major,
    to: s.name,
  }
))

const nodes: NodeData<Student | undefined>[] = [
  {
    id: 'FCIT',
    text: 'FCIT20',
  },
  {
    id: 'IT',
    text: 'Information Technology'
  },
  {
    id: 'IS',
    text: 'Information Systems'
  },
  {
    id: 'CS',
    text: 'Computer Science'
  },
  ...studentNodes
];

const edges: EdgeData[] = [
  {
    id: 'FCIT-IT',
    from: 'FCIT',
    to: 'IT',
  },
  {
    id: 'FCIT-IS',
    from: 'FCIT',
    to: 'IS'
  },
  {
    id: 'FCIT-CS',
    from: 'FCIT',
    to: 'CS'
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
        node={(props) => <Node {...props} onClick={_ => handleChangeStudent(props.properties?.data)} />}
        edge={(props) => <Edge {...props} onClick={_ => setStudent(undefined)} />}
      />
    </>
  );
}

export default App;
