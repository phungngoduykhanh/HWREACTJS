import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.state= {
            hk1: 0,
            hk2: 0,
            avg: 0,
            result:"",
            xl:""
        }
    }
    handleChange = (event) =>{
        let key= event.target.name;
        let val= event.target.value;

        this.setState({ [key] : val});
        this.avg()
        this.setResult();
        this.setXL();
    };
    avg=()=>{
      this.setState({avg:parseFloat((parseFloat(this.state.hk1) + parseFloat(this.state.hk2))/2)})
    }

    handleSubmit= (event) =>{
        event.preventDefault();
        alert('Bạn là học sinh '+ this.state.xl);
    };
    setResult = () => {
        if(this.state.avg > 4.5) this.setState({ result:'Được lên lớp'});
        else this.setState({ result: 'Ở lại lớp'})
    };
    setXL = ()=>{
        if (this.state.avg < 4.5) this.setState({ xl: 'yếu'});
        else if (this.state.avg < 6.5) this.setState({ xl: 'trung bình'});
        else if (this.state.avg < 8) this.setState({ xl: 'khá'});
        else if (this.state.avg < 9) this.setState({ xl: 'giỏi'});
        else if (this.state.avg < 10) this.setState({ xl: 'xuất sắc'});
    }

    render() {
        return (
            <div className='container'>
                <h3 className='text-container'>Kết quả học tập</h3>
                <form onSubmit={this.handleSubmit} className='was-validated'>
                    <div className='form-group'> 
                        <label htmlFor='hk1'>Điểm HK1: </label>
                        <input
                            type='number'
                            className='form-control'
                            id='hk1'
                            name='hk1'
                            max={10}
                            min={0}
                            defaultValue={0}
                            required
                            onChange={this.handleChange}
                        />
                        {/* <div className='invalid-feedback'>Điểm không hợp lệ</div> */}   
                    </div>

                    <div className='form-group'> 
                        <label htmlFor='hk2'>Điểm HK2: </label>
                        <input
                            type='number'
                            className='form-control'
                            id='hk2'
                            name='hk2'
                            max={10}
                            min={0}
                            defaultValue={0}
                            // required
                            onChange={this.handleChange}
                        />
                        {/* <div className='invalid-feedback'>Điểm không hợp lệ</div> */}   
                    </div>

                    <div className='form-group'>
                        <label htmlFor='hk2'>Điểm Trung Bình: </label>
                        <input
                                type='number'
                                className='form-control'
                                readOnly
                                value={this.state.avg}
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='hk2'>Kết quả: </label>
                        <input
                                type='number'
                                className='form-control'
                                defaultValue={0}
                                readOnly
                                value={this.state.result}
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='hk2'>Xếp loại: </label>
                        <input
                                type='number'
                                className='form-control'
                                defaultValue={0}
                                readOnly
                                value={this.state.xl}
                        />
                    </div>

                    <button type='submit' value='Submit' className='btn btn-primary'>
                        Xem kết quả
                    </button>
                </form>     
            </div>
        );
    }
}

export default Form;