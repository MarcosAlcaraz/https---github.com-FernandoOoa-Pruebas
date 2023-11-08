import { GetAttributes } from "./MapCodesJavaScripts";

// Sustituye la función  OffterInputs
// Por cada parametro de la función leida se creara una caja de texto correspondiente 
export const CreatingTextBoxes = (code, setValues,  values) => {
    let ListAttributes = GetAttributes(code);
    let ListSec = [];
    ListAttributes.forEach((item,index) =>{
        ListSec.push(
            <p style={{ borderRadius: 4, height: 30, width: 300, left: 250}} key={index}>
                {item + ': '}
                <input
                    style={{
                        fontSize: 16,
                        /*fontFamily: 'Source Code Pro, monospace',*/
                        borderRadius: 4,
                        height: 22,
                        width: 150,
                        backgroundColor: "#DEDEDE",
                        left: 250
                    }}
                    onChange={
                        (temp) =>{
                            let ListTemp = values;
                            ListTemp[index] = temp.target.value
                            setValues({
                                ListValues: ListTemp
                            });
                        }
                    }
                 >
                </input>
            </p>
        )
    });
    return (ListSec);
}

export const GetStringConvertValues = (values) =>{
    let ListValues = values;
    let ContElement = ListValues.length;
    let StringValues = '(';
    ListValues.forEach((element, index) => {
        if(index < ContElement - 1) {
            StringValues += (element + ', ');
        }else {
            StringValues += element;
        }
    });
    StringValues += ")";
    return( StringValues );
}

 export const Decorator1 = (result) => {
    return (<div><br />R = {result}</div>)
}