import Table from 'react-bootstrap/Table';


const History = (data) => {
    let history = data
    return ( 
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Input</th>
                        <th>Output</th>
                    </tr>
                </thead>
                <tbody>
                    {history.data.map((element, key)=>{
                        return(<tr key={key}>
                            <th>
                                {element.date}
                            </th>
                            <th>
                                {element.input}
                            </th>
                            <th>
                                {element.output}
                            </th>
                        </tr>)
                    }
                    )}
                </tbody>
            </Table>
        </div>
     );
}
 
export default History;