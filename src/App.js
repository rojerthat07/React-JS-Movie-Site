//Importing React
import React, { Component } from 'react'
//Components
import Header from './components/Header'
import Search from './components/Search'
import MovieRow from './components/MovieRow'
//Dependencies
import './App.scss'
import $ from 'jquery'


class App extends Component {

  constructor(props){
    super(props)
    this.state ={
      search: ""
    }
    //  const movies =[
    //    {
    //      id:0,
    //      poster_src:"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
    //      title:'Avengers: Infinity War',
    //      overview: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod explicabo tempore, quibusdam, dignissimos optio ratione velit corporis iste eum sapiente quae repellat odio aliquam quis quas labore inventore laudantium voluptates!'
    //    },
    //   {
    //     id:1,
    //     poster_src:"https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_UX182_CR0,0,182,268_AL_.jpg",
    //      title:'Spiderman (2002)',
    //      overview: 'When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family.'
    //   }
    //  ]
    
    //  var movieRows = [];

    //  movies.forEach( movie => {
    //    console.log(movie.id)
    //    const movieRow = <MovieRow key={movie.id} movie={movie} />
 
    //    movieRows.push(movieRow)
    //  })

    //  this.state = {rows: movieRows}

    this.performSearch("marvel");
  }

  performSearch(searchTerm){
    console.log("perform search using moviedb");
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=ad8a2a3e22a31453b48785c80f462afd&query=" + searchTerm;
 
     $.ajax({
       url: urlString,
       success: (searchResult) =>{
        console.log("fetched data succesfully")
   
        const results = searchResult.results;
        var movieRows = []



        results.forEach( movie =>{
          movie.poster_src = "https://image.tmdb.org/t/p/w185_and_h278_bestv2" + movie.poster_path
          const movies = <MovieRow key={movie.id} movie={movie} />
          movieRows.push(movies)
        })

        this.setState({
          rows: movieRows
        })

       },
       error: (xhr,status,err) =>{
         console.error("failed to fetch data")
       }

     })
  }

  searchChangeHandler = (e) =>{
        
        const searchTerm = e.target.value
        this.performSearch(searchTerm)
  }

  

  render() {
    return (
      <div className="App">
        <Header />
        <Search onSearch={this.searchChangeHandler}  />
      
     {this.state.rows}
   
      </div>
    )
  }
}

export default App

