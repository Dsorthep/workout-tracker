const router = require("express").Router();
const Workout = require("../models/workout");

router.post("/api/workouts", (req,res) => {
    console.log(req.body);
    Workout.create({
      exercises: [
        
      ]
    })
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
 
  
  router.put("/api/workouts/:id", ({body, params}, res) => {
    console.log("connected to put")
    console.log(body)
    Workout.findByIdAndUpdate(
      params.id,
      {
        $push: { exercises: body }
      },
      { new: true, runValidators: true }
    )
      .then(dbWorkout => {
        console.log("after promise")
        console.log(dbWorkout);
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

router.get("/api/workout", (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;