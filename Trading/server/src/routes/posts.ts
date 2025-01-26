import express,{Request,Response} from 'express';
import Posts from '../models/posts';
import Employees from '../models/employee';
const router = express.Router();


//Save Posts
router.post('/post/save',(req:Request,res:Response)=>{
    let newPost= new Posts(req.body);
    newPost.save()
     .then(result => {
        return res.status(200).json({
            success:"Posts saved successfully"
        });
     })
     .catch(err => {
        return res.status(400).json({
            error:err
        });
     });
});

//Get a specific post
router.get('/post/:id',(req:Request,res:Response)=>{
  Posts.findById(req.params.id) //find by mongoose
   .then(post => {
      return res.status(200).json({
          success:true,
          post
      });
   })
   .catch(err => {
      return res.status(400).json({
          success:false,
          error:err
      });
   });
});


  

//Get Posts
router.get('/posts', (req:Request, res:Response) => {
    Posts.find().exec()
      .then(posts => {
        return res.status(200).json({
          success: true,
          existingPosts: posts
        });
      })
      .catch(err => {
        return res.status(400).json({
          error: err
        });
      });
  });

// Get the maximum orderID
router.get('/maxOrderID', (req:Request, res:Response) => {
  Posts.findOne({}, {}, { sort: { 'intOrderID': -1 } }) // Find one document with the highest orderID
    .then(user => {
      // Check if there is any post in the database
      if (user) {
        return res.status(200).json({
          success: true,
          maxOrderID: user.intOrderID
        });
      } else {
        // If no posts are found, return 1 as the maximum orderID
        return res.status(200).json({
          success: true,
          maxOrderID: 0
        });
      }
    })
    .catch(err => {
      return res.status(400).json({
        success: false,
        error: err
      });
    });
});

// Get Posts as an array
router.get('/posts', (req:Request, res:Response) => {
  Posts.find().exec()
    .then(posts => {
      // Extract relevant information and create an array
      const ordersArray = posts.map(post => {
        return {
          orderID: post.orderID,
          symbol: post.symbol,
          topic: post.topic,
          description: post.description,
          postCategory: post.postCategory,
          side: post.side,
          status: post.status
          // Add other fields as needed
        };
      });

      return res.status(200).json({
        success: true,
        ordersArray: ordersArray
      });
    })
    .catch(err => {
      return res.status(400).json({
        success: false,
        error: err
      });
    });
});

  

//Update Post
router.put('/post/update/:id',(req:Request,res:Response)=>{
    Posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        ) //find by mongoose
     .then(post => {
        return res.status(200).json({
            success:"Update Successfully",
        });
     })
     .catch(err => {
        return res.status(400).json({
            error:err
        });
     });
});

//Delete Post
router.delete('/post/delete/:id',(req:Request,res:Response)=>{
    Posts.findByIdAndDelete(req.params.id).exec() //find by mongoose
     .then(deletePost => {
        return res.status(200).json({
            success:"Deleted Successfully",
            deletePost
        });
     })
     .catch(err => {
        return res.status(400).json({
            error:err
        });
     });
});

//Register User
router.post('/register',(req:Request,res:Response)=>{
    let newEmployee= new Employees(req.body);
    newEmployee.save()
     .then(result => {
        return res.status(200).json({
            success:"Employee Register successfully"
        });
     })
     .catch(err => {
        return res.status(400).json({
            error:err
        });
     });
});

//Login User
// app.post("/login", (req,res)=>{
//     const {email, password}= req.body;
//     Employees.findOne({email: email})
//     .then(user=>{
//         if(user){
//             if(user.password===password){
//                 console.log("sddsd")
//                 res.json("Success")
//             }else{
//                 res.json("The password is incorrect")
//             }
//         }else{
//             res.json("No user registered")
//         }
//     })
// })



router.post('/loginto', (req:Request, res:Response) => {
    const { email, password } = req.body;

    Employees.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    // console.log("Login Successful");
                    return res.status(200).json({
             
                        success: 'Success'
                    });
                } else {
                    return res.status(401).json({
                        error: 'Incorrect password'
                    });
                }
            } else {
                return res.status(404).json({
                    error: 'No user registered with this email'
                });
            }
        })
        .catch(err => {
            return res.status(500).json({
                error: err
            });
        });
});

export default router;
// module.exports=router;