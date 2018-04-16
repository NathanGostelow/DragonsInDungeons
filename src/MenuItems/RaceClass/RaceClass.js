import React, { Component } from 'react';
// import './Classes.css';
import D20 from '../D20.png';

class RaceClass extends Component {
	constructor(props){
		super(props);
		this.state = {
      id: this.props.cont,
			error: null,
			classRace : [],
			isLoaded: false
		};
	}

  static getDerivedStateFromProps(nextProps, prevState){
    console.log(nextProps, prevState);
    if(nextProps.cont !== prevState.id){
      return {
          id: nextProps.cont,
          error: null,
          classRace : [],
          isLoaded: false
      }
    }
    return
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.id !== this.state.id) {
      this.ClassesList(this.state.id);
    }
  }

	componentDidMount() {
    this.ClassesList(this.state.id);
  }

  ClassesList(prop) {
    const cachedData = localStorage.getItem(prop);
    if(cachedData){
      console.log('serving from localstorage rather than wastering away the data')
      this.setState({
        isLoaded : true,
        classRace : JSON.parse(cachedData)
      })
      return;
    }
    fetch('http://www.dnd5eapi.co/api/' + prop)
    	.then(res => res.json())
      .then(
      	(result) => {
          this.SortItems(result.results);
      },
      (error) =>{
      	this.setState({
      		isLoaded: true,
      		error
      	})
      });
  }

  SortItems(data){
    // data = _.uniqBy(data, 'name');
    const storageName = this.props.cont;
    data.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    this.setState({
      isLoaded :true,
      classRace : data
    })
    this.SetLocalStorage(storageName);

  }

SetLocalStorage(type){
    localStorage.setItem(type, JSON.stringify(this.state.classRace));
  }

  render() {
  	const {id, error, isLoaded, classRace} = this.state;
  	if(error){
  		return <div> Error: {error.message}</div>
  	} else if(!isLoaded){
  		return <img src={D20} className="loading-image" alt="Loading" />
  	} else {
	    return (
	      <div className="container">
	        <h1> Classes </h1>
	        	{classRace.map(item => (
  	        		<div className='classes-card' key={item.name}>
                  <span className='classes-title'>{item.name}</span>
                  <img className='classes-img' src={process.env.PUBLIC_URL + '/img/'+ id + '/' + item.name +'.png'} alt={item.name}/>
                  {/*<div className='overlay'> testicle</div>*/}
                  {/*<span className='classes-button'> View Details </span>*/}
	           		</div>
	        	))}       
	      </div>
	    );
	  }
  }
}

export default RaceClass;
