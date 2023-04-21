import React, {Component} from "react";
import {aminoAcids} from "./aminoAcids";
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';
import ErrorBoundry from "./ErrorBoundry";





class  App extends Component {
    constructor() {
        super()
        this.state = {
            aminoAcids: aminoAcids,
            //for the API instead of aminoAcids just empty array []
            searchfield: ''
        }
    }

    /*//this is an example, how to ad API to my app
    componentDidMount() {
         fetch('https://jsonplaceholder.typicode.com/users')
             .then(response=>{return response.json();
         })
             .then(users=>{
                 this.setState({aminoAcids:users});})
     }

     */


    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})

    }

    render() {


            const {aminoAcids, searchfield} = this.state
            const filteredAcids = aminoAcids.filter((aminoAcid) => {

                const searchValue = searchfield.toLowerCase();
                return (
                    aminoAcid.name.toLowerCase().includes(searchValue) ||
                    aminoAcid.group.toLowerCase().includes(searchValue)
                );
            });
            return !aminoAcids.length ?
                <h1>Loading...</h1> :

                (
                    < div className ="tc">

                        <h1 className='f1'>Proteinogenic Amino Acids</h1>
                            <SearchBox searchChange={this.onSearchChange}/>
                        <Scroll>
                            <ErrorBoundry>
                                <CardList aminoAcids={filteredAcids}/>
                            </ErrorBoundry>
                        </Scroll>
                        <div>
                        </div>

                    </div>
                );
        }
}
export default App;
