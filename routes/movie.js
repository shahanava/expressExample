var Movie = require('../models/movieSchema');
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var movie = require('node-movie');

//listing
router.get('/movieAll', function(req, res) {
Movie.find(function(err, movies) {
  if(err){
    return res.send("No movie to show");
  }

  res.json(movies);
});
});

//add
 router.post('/movieAdd',function(req, res) {
   var moviename = req.body.name;
  // var mov = new Movie(req.body);
   movie(moviename, function (err, data) {
   var mov = new Movie();
   mov.Title=data.Title;
   mov.Year=data.Year;
   mov.Rated=data.Rated;
   mov.Released=data.Released;
   mov.Runtime=data.Runtime;
   mov.Genre=data.Genre;
   mov.Director=data.Director;
   mov.Writer=data.Writer;
   mov.Actors=data.Actors;
   mov.Language=data.Language;
   mov.Country=data.Country;
   mov.Awards=data.Awards;
   mov.Poster=data.Poster;
   mov.Metascore=data.Metascore;
   mov.imdbRating=data.imdbRating;
   mov.imdbVotes=data.imdbVotes;
   mov.imdbID=data.imdbID;
   mov.Type=data.Type;
   mov.Response=data.Response;
   mov.save(function(err) {
   if(err) {
     res.send("Data not added");
   }

   res.send("data added succesfully");

 });
});


});

//delete
router.delete('/deleteMovie/:id', function(req, res) {
 Movie.remove({
   _id: req.params.id
 }, function(err, movie) {
     if(err) {
       res.send("Movie id not exist");
     }

     res.json(movie);

 });
});
//update
router.put('/updateMovie/:id', function(req, res) {
 Movie.findOne({ _id: req.params.id}, function(err, movie) {
   if(err) {
     return res.send("Movie id not exist, not able to update");
   }

   for(prop in req.body) {
     movie[prop] = req.body[prop];
   }

   //save
   movie.save(function(err) {
     if(err) {
       return res.send("not able to save");
     }

     res.json(movie);
   });
 });
});


module.exports = router;
