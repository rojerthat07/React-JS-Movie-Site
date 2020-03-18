import React, { Component } from 'react'

class MovieRow extends Component {
    viewMovie = () =>{
        window.location.href = "https://www.themoviedb.org/movie/" + this.props.movie.id;
    }


    render() {
        return <table key={this.props.movie.id} className="movie-section">
        <tbody>
          <tr>
            <td>
         <img src={this.props.movie.poster_src} alt={this.props.movie.title}/>
            </td>
            <td>
           <p className="movie-section__title">{this.props.movie.title}</p>
           <p>{this.props.movie.overview}</p>
           <input onClick={this.viewMovie} type="button" value="View"/>
            </td>
          </tr>
        </tbody>
      </table>
    }
}

export default MovieRow
