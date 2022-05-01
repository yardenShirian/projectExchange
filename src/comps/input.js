import React, { useEffect, useState } from 'react'

export default function Input(props) {
    const [ar, setAr] = useState([]);
    const [inputVal, setInputVal] = useState(1);
    const [selectFrom, setSelectFrom] = useState({});
    const [selectTo, setSelectTo] = useState({});

    useEffect(() => {
        doApi();
    }, [])

    useEffect(()=>{
        let strFrom = `${inputVal} ${selectFrom.label}`;
        let strTo = `${(inputVal / selectFrom.value * selectTo.value).toLocaleString()} ${selectTo.label}`;
        props.setRes([strFrom,strTo]);
    },[inputVal, selectFrom, selectTo])

    const onChangeFrom = (e) => {
        let index = e.nativeEvent.target.selectedIndex;
        let label = e.nativeEvent.target[index].label;
        let value = e.target.value;
        setSelectFrom({ label, value });
    }

    const onChangeTo = (e) => {
        let index = e.nativeEvent.target.selectedIndex;
        let label = e.nativeEvent.target[index].label;
        let value = e.target.value;
        setSelectTo({ label, value });
    }

    const doApi = async () => {
        
        let url = 'https://api.currencyapi.com/v3/latest?apikey=hQby0I1vpKEknQL9ara4kW7WuLDxosDK6PXubcPt';
       
        let resp = await fetch(url);
        let data = await resp.json();
        let tempAr = [];

        for (let key in data.data) {
            tempAr.push({ value: data.data[key].value, label: key});
        }

        setAr(tempAr);
        setSelectFrom(tempAr[140]);
        setSelectTo(tempAr[60]);
        console.log(tempAr);
    }

    return (
        <div className=''>
            <div className='row col-6 mx-auto mt-4'>

                <div className='col-4'>
                    <input onChange={(e) => setInputVal(e.target.valueAsNumber)} defaultValue={1} min='1' type='number' className='form-control' />
                </div>

                <div className='col-3'>
                    <select className='form-select ' onChange={onChangeFrom} value={selectFrom.value}>
                        {ar.map((item) => {
                            return (
                                <option label={item.label} value={item.value} key={item.label}></option>
                            )
                        })}
                    </select>
                </div>

                <div className='col-md-2 d-flex justify-content-center align-items-center' >
                    <img  onClick={()=>{setSelectFrom(selectTo); setSelectTo(selectFrom)}} src='https://icon-library.com/images/exchange-icon/exchange-icon-0.jpg' style={{ width: '35px',cursor:'pointer'}}/>
                </div>

                <div className=' col-3'>
                    <select className='form-select' onChange={onChangeTo} value={selectTo.value}>
                        {ar.map((item) => {
                            return (
                                <option label={item.label} value={item.value} key={item.label}></option>
                            )
                        })}
                    </select>
                </div>
            </div>
        </div>
    )
}
