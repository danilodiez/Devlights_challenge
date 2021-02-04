import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import {useState} from 'react';
import Alert from 'react-bootstrap/Alert'
import History from './History'

const StringInput = (

) => {

    const [string, setString] = useState('');
    const [alertClass, setAlertClass] = useState('');
    const [divAnswer, setAnswer] = useState('');
    const [alertFlag, setAlertFlag] = useState(false);
    const [arrayData, setArrayData] = useState([]);

    function showData(string, apiResponse){
        let answer = apiResponse.response
        let dataStorage;
        let current = new Date()
        let alertClass = answer==="YES"?"success":"danger"
        setAlertFlag(true);
        setAnswer(answer);
        setAlertClass(alertClass)


        //Almacenado de registros
        dataStorage = {
            input:string,
            output:answer,
            date: current.toLocaleString()
        }

        setArrayData(oldArray=>[...oldArray,dataStorage])

        
        
        
        
        
        

    };



    function sendString(e, string){
        e.preventDefault();
        if(string.match(/^[A-Za-z]+$/) && string.length<100000){
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
        .then(data => showData(string,data))
        
        .catch(error => console.log(error))
    }else{
      console.log("String no valido")
    }
  }



    return ( 
        <div className="string-input">
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
  {/*Analizamos si hay registros para mostrar*/
  arrayData.length>0?<History data={arrayData} />:<></>
  }
      </div>
    );
}
 
export default StringInput;

