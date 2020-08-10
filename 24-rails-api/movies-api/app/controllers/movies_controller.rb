class MoviesController < ApplicationController
  def index
    movies = Movie.all.sort_by { |movie| movie.year }

    render json: movies
  end

  def create
    movie = Movie.create!(movie_params)

    render json: movie
  end
  
  def update
    movie = Movie.find(params[:id])

    movie.update!(movie_params)

    render json: movie, status: :ok
  end

  def destroy 
    movie = Movie.find(params[:id])

    movie.destroy!

    render json: {}
  end

  private

  def movie_params
    params.require(:movie).permit(:title, :genre, :score, :imageUrl, :year)
  end
end
