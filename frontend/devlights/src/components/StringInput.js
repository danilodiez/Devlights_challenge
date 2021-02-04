import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import {useState} from 'react';
import Alert from 'react-bootstrap/Alert'


const StringInput = (

) => {

    const [string, setString] = useState('');
    const [alertClass, setAlertClass] = useState('');
    const [divAnswer, setAnswer] = useState('');
    const [alertFlag, setAlertFlag] = useState(false);


    function showData(apiResponse){
        let answer = apiResponse.response
        let alertClass = answer=="YES"?"success":"danger"
        setAlertFlag(true);
        setAnswer(answer);
        setAlertClass(alertClass)

    };



    function sendString(e, string){
        e.preventDefault();
        fetch("http://localhost:8000/analyze",{
            method:'POST',
            credentials:'same-origin',
            headers:{
                'Content-Type':'application/json'
            },
            body:
                JSON.stringify({
                    text: string
            })
        })
        .then(response => response.json())
        .then(data => showData(data))
        
        .catch(error => console.log(error))
    }



    console.log(string)
    return ( 
        <div className="w-60">
        <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>String:</Form.Label>
          <Form.Control type="text" placeholder="" onChange={e=>setString(e.target.value)}/>
          
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(e)=>sendString(e, string)}>
          Submit
        </Button>
      </Form> 
      {alertFlag?
      <Alert variant={alertClass}>
    {divAnswer}
  </Alert>:<></>}
      </div>
    );
}
 
export default StringInput;

