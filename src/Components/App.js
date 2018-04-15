import React, {Components} from 'react';

class App extends Components{

    componentDidMount(){
        console.log('React Running...');
    }

    render(){
        return(
            <div>
            My App
            </div>
        );
    }
}

export default App;