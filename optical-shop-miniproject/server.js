// // const express = require('express');
// // const mongoose = require('mongoose');
// // const bodyParser = require('body-parser');
// // const app = express();
// // const port = 3000;

// // // Connect to MongoDB
// // mongoose.connect('mongodb://localhost:27017/opticalshop', { useNewUrlParser: true, useUnifiedTopology: true })
// //     .then(() => console.log('MongoDB connected'))
// //     .catch(err => console.error('MongoDB connection error:', err));

// // const UserSchema = new mongoose.Schema({
// //     name: String,
// //     email: String,
// //     password: String,
// //     address: String,
// //     mobile: String,
// //     rightEyePower: Number,
// //     leftEyePower: Number,
// //     lensType: String
// // }, { versionKey: false 
// // });

// // const User = mongoose.model('User', UserSchema);

// // const OrderSchema = new mongoose.Schema({
// //     userName: String, // Change userId to userName and make it a String
// //     productId: String,
// //     productName: String,
// //     price: Number,
// //     lensType: String
// // }, { versionKey: false });

// // const Order = mongoose.model('Order', OrderSchema);
// // const ProductSchema = new mongoose.Schema({
// //     name: String,
// //     price: Number,
// //     image: String
// // });

// // const Product = mongoose.model('Product', ProductSchema);

// // app.use(bodyParser.urlencoded({ extended: true }));
// // app.use(bodyParser.json());
// // app.use(express.static('public'));

// // // User Login
// // app.post('/login', (req, res) => {
// //     User.findOne({ email: req.body.email, password: req.body.password }, (err, user) => {
// //         if (user) {
// //             res.redirect('/products.html');
// //         } else {
// //             res.status(401).send('Invalid credentials');
// //         }
// //     });
// // });

// // // User Sign Up
// // app.post('/signup', (req, res) => {
// //     const newUser = new User({
// //         name: req.body.name,
// //         email: req.body.email,
// //         password: req.body.password,
// //         address: req.body.address,
// //         mobile: req.body.mobile,
// //         rightEyePower: req.body.rightEyePower,
// //         leftEyePower: req.body.leftEyePower,
// //         lensType: req.body.lensType
// //     });

// //     newUser.save(err => {
// //         if (err) {
// //             console.error('Error signing up:', err);
// //             res.status(500).send('Error signing up. Please try again later.');
// //         } else {
// //             res.redirect('/products.html');
// //         }
// //     });
// // });

// // // Fetch User Details by Name
// // app.get('/fetch-user-by-name', (req, res) => {
// //     const { name } = req.query;

// //     User.findOne({ name }, (err, user) => {
// //         if (err) {
// //             console.error('Error fetching user by name:', err);
// //             res.status(500).send('Error fetching user by name');
// //         } else {
// //             if (user) {
// //                 res.json(user); // Send user details as JSON response
// //             } else {
// //                 res.status(404).send('User not found');
// //             }
// //         }
// //     });
// // });

// // // Update User Details
// // app.post('/update-user', (req, res) => {
// //     const { name, address, mobile, rightEyePower, leftEyePower, lensType } = req.body;

// //     // Find the user by name and update their details
// //     User.findOneAndUpdate(
// //         { name: name }, // Filter criteria
// //         { address, mobile, rightEyePower, leftEyePower, lensType }, // Updated fields
// //         { new: true, useFindAndModify: false }, // Options: new to return updated document, useFindAndModify set to false to use native findOneAndUpdate
// //         (err, updatedUser) => {
// //             if (err) {
// //                 console.error('Error updating user details:', err);
// //                 res.status(500).send('Error updating user details');
// //             } else {
// //                 if (updatedUser) {
// //                     // Optionally, you can redirect here or send a success message
// //                     res.status(200).json(updatedUser); // Send updated user details as JSON response
// //                 } else {
// //                     res.status(404).send('User not found'); // Handle case where user is not found
// //                 }
// //             }
// //         }
// //     );
// // });

// // // Start the server
// // app.listen(port, () => {
// //     console.log(`Optical shop app listening at http://localhost:${port}`);
// // });


// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const app = express();
// const port = 3000;

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/opticalshop', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.error('MongoDB connection error:', err));

// const UserSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String,
//     address: String,
//     mobile: String,
//     rightEyePower: Number,
//     leftEyePower: Number,
//     lensType: String
// }, { versionKey: false });

// const User = mongoose.model('User', UserSchema);

// const OrderSchema = new mongoose.Schema({
//     userName: String, // Change userId to userName and make it a String
//     productId: String,
//     productName: String,
//     price: Number,
//     lensType: String
// }, { versionKey: false });

// const Order = mongoose.model('Order', OrderSchema);

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(express.static('public'));

// // User Login
// app.post('/login', (req, res) => {
//     User.findOne({ email: req.body.email, password: req.body.password }, (err, user) => {
//         if (user) {
//             res.redirect('/products.html');
//         } else {
//             res.status(401).send('Invalid credentials');
//         }
//     });
// });

// // User Sign Up
// app.post('/signup', (req, res) => {
//     const newUser = new User({
//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password,
//         address: req.body.address,
//         mobile: req.body.mobile,
//         rightEyePower: req.body.rightEyePower,
//         leftEyePower: req.body.leftEyePower,
//         lensType: req.body.lensType
//     });

//     newUser.save(err => {
//         if (err) {
//             console.error('Error signing up:', err);
//             res.status(500).send('Error signing up. Please try again later.');
//         } else {
//             res.redirect('/products.html');
//         }
//     });
// });

// // Fetch User Details by Name
// app.get('/fetch-user-by-name', (req, res) => {
//     const { name } = req.query;

//     User.findOne({ name }, (err, user) => {
//         if (err) {
//             console.error('Error fetching user by name:', err);
//             res.status(500).send('Error fetching user by name');
//         } else {
//             if (user) {
//                 res.json(user); // Send user details as JSON response
//             } else {
//                 res.status(404).send('User not found');
//             }
//         }
//     });
// });

// // Update User Details
// app.post('/update-user', (req, res) => {
//     const { name, address, mobile, rightEyePower, leftEyePower, lensType } = req.body;

//     // Find the user by name and update their details
//     User.findOneAndUpdate(
//         { name: name }, // Filter criteria
//         { address, mobile, rightEyePower, leftEyePower, lensType }, // Updated fields
//         { new: true, useFindAndModify: false }, // Options: new to return updated document, useFindAndModify set to false to use native findOneAndUpdate
//         (err, updatedUser) => {
//             if (err) {
//                 console.error('Error updating user details:', err);
//                 res.status(500).send('Error updating user details');
//             } else {
//                 if (updatedUser) {
//                     // Optionally, you can redirect here or send a success message
//                     res.status(200).json(updatedUser); // Send updated user details as JSON response
//                 } else {
//                     res.status(404).send('User not found'); // Handle case where user is not found
//                 }
//             }
//         }
//     );
// });

// // Fetch products
// app.get('/api/product/products', (req, res) => {
//     const products = [
//         { _id: '1', name: 'Spectacle 1', price: 100, lensType: 'Standard' },
//         { _id: '2', name: 'Spectacle 2', price: 150, lensType: 'Anti-glare' },
//         { _id: '3', name: 'Spectacle 3', price: 200, lensType: 'Photochromic' },
//         { _id: '4', name: 'Spectacle 4', price: 250, lensType: 'Polarized' },
//         { _id: '5', name: 'Spectacle 5', price: 300, lensType: 'Blue Light Filter' }
//     ];
//     res.json(products);
// });

// // Place an order
// app.post('/api/product/order', (req, res) => {
//     const { userName, productId } = req.body;
//     const products = [
//         { _id: '1', name: 'Spectacle 1', price: 100, lensType: 'Standard' },
//         { _id: '2', name: 'Spectacle 2', price: 150, lensType: 'Anti-glare' },
//         { _id: '3', name: 'Spectacle 3', price: 200, lensType: 'Photochromic' },
//         { _id: '4', name: 'Spectacle 4', price: 250, lensType: 'Polarized' },
//         { _id: '5', name: 'Spectacle 5', price: 300, lensType: 'Blue Light Filter' }
//     ];

//     const product = products.find(p => p._id === productId);

//     if (!product) {
//         return res.status(404).json({ error: 'Product not found' });
//     }

//     const newOrder = new Order({
//         userName: userName,
//         productId: product._id,
//         productName: product.name,
//         price: product.price,
//         lensType: product.lensType
//     });

//     newOrder.save((err, order) => {
//         if (err) {
//             console.error('Error placing order:', err);
//             res.status(500).send('Error placing order');
//         } else {
//             res.status(201).json(order);
//         }
//     });
// });

// // Fetch all orders
// app.get('/orders', (req, res) => {
//     Order.find({}, (err, orders) => {
//         if (err) {
//             console.error('Error fetching orders:', err);
//             res.status(500).send('Error fetching orders');
//         } else {
//             res.json(orders);
//         }
//     });
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Optical shop app listening at http://localhost:${port}`);
// });

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/opticalshop', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    address: String,
    mobile: String,
    rightEyePower: Number,
    leftEyePower: Number,
    lensType: String
}, { versionKey: false });

const User = mongoose.model('User', UserSchema);

const OrderSchema = new mongoose.Schema({
    userName: String, // Change userId to userName and make it a String
    productId: String,
    productName: String,
    price: Number,
    lensType: String
}, { versionKey: false });

const Order = mongoose.model('Order', OrderSchema);

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    quantity: Number
});

const Product = mongoose.model('Product', ProductSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// User Login
app.post('/login', (req, res) => {
    User.findOne({ email: req.body.email, password: req.body.password }, (err, user) => {
        if (user) {
            res.redirect(`/products.html?name=${user.name}`);
        } else {
            res.status(401).send('Invalid credentials');
        }
    });
});

// User Sign Up
app.post('/signup', (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        mobile: req.body.mobile,
        rightEyePower: req.body.rightEyePower,
        leftEyePower: req.body.leftEyePower,
        lensType: req.body.lensType
    });

    newUser.save(err => {
        if (err) {
            console.error('Error signing up:', err);
            res.status(500).send('Error signing up. Please try again later.');
        } else {
            res.redirect(`/products.html?name=${req.body.name}`);
        }
    });
});

// Fetch User Details by Name
app.get('/fetch-user-by-name', (req, res) => {
    const { name } = req.query;

    User.findOne({ name }, (err, user) => {
        if (err) {
            console.error('Error fetching user by name:', err);
            res.status(500).send('Error fetching user by name');
        } else {
            if (user) {
                res.json(user); // Send user details as JSON response
            } else {
                res.status(404).send('User not found');
            }
        }
    });
});

// Update User Details
app.post('/update-user', (req, res) => {
    const { name, address, mobile, rightEyePower, leftEyePower, lensType } = req.body;

    // Find the user by name and update their details
    User.findOneAndUpdate(
        { name: name }, // Filter criteria
        { address, mobile, rightEyePower, leftEyePower, lensType }, // Updated fields
        { new: true, useFindAndModify: false }, // Options: new to return updated document, useFindAndModify set to false to use native findOneAndUpdate
        (err, updatedUser) => {
            if (err) {
                console.error('Error updating user details:', err);
                res.status(500).send('Error updating user details');
            } else {
                if (updatedUser) {
                    // Optionally, you can redirect here or send a success message
                    res.status(200).json(updatedUser); // Send updated user details as JSON response
                } else {
                    res.status(404).send('User not found'); // Handle case where user is not found
                }
            }
        }
    );
});

// Place an Order
app.post('/order', async (req, res) => {
    try {
        const { userName, productId, productName, price, lensType } = req.body;

        const order = new Order({
            userName,
            productId,
            productName,
            price,
            lensType
        });

        await order.save();
        res.status(201).json(order);
    } catch (error) {
        console.error('Error placing order:', error);
        res.status(500).json({ error: 'Failed to place order' });
    }
});

// Get all orders
app.get('/orders', async (req, res) => {
    try {
        const { userName } = req.query;
        const orders = await Order.find({ userName });
        res.status(200).json(orders);
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ error: 'Failed to fetch orders' });
    }
});

// Cancel order
app.delete('/order/:orderId', async (req, res) => {
    const { orderId } = req.params;
    try {
        const deletedOrder = await Order.findByIdAndDelete(orderId);
        if (!deletedOrder) {
            return res.status(404).json({ error: 'Order not found' });
        }
        res.status(200).json({ message: 'Order cancelled successfully', order: deletedOrder });
    } catch (error) {
        console.error('Error cancelling order:', error);
        res.status(500).json({ error: 'Failed to cancel order' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Optical shop app listening at http://localhost:${port}`);
});
