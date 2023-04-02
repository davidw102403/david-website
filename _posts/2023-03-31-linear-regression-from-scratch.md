---
layout: default
title: Linear Regression from Scratch [CS]
subtitle: reating a Linear Regression Machine Learning Model from Scratch in Python
---

<script type="text/javascript" async src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-MML-AM_CHTML'></script>

<script type="text/x-mathjax-config">
  MathJax.Hub.Config({ TeX: { extensions: ["color.js"] }});
</script>

<div markdown="1" class="container">

<div class="postTitle"> Linear Regression From Scratch </div>
<div class="desc"> Creating a Linear Regression Machine Learning Model from Scratch in Python </div>
<div class="postDate"> Posted by David Wang on March 31, 2023 </div>

## Introduction

Linear Regresion is a machine learning model that aims to draw a best-fitted straight line through a set of data points. The goal is to use this line to describe the relationship between the input variables (independent variables) and the output variable (dependent variable). 

While machine learning libraries like scikit-learn can find the optimal regression line (as i have used [here](https://github.com/davidw102403/linear_regression_scikit)), it won't provide understanding of the underlying mathematics of the model. Implementing the model from scratch in python will allow us to gain a deeper understanding of how the algorithm works. 

## The Math

The basic framework of linear regression follows a linear function with structure:

$$
y = m \cdot x + b
$$

The gradient, denoted by __*m*__, and the intercept, denoted by __*b*__, are the two unknown parameters that we need to determine in linear regression. To solve for these parameters, we can use a loss function and the gradient descent algorithm.

### Loss Function - Mean Squared Error

To find the values of __*m*__ and __*b*__, we need to know how far each data point is from the regression line. This error can be calculated with a loss function. In this case, the mean squared error loss function can be used to calculate the distance between the regression line and the data point.

![Alt text](../images/error.png)

Using the mean squared error loss function, we take the distance between the data points and the regression line, square it, add it up for all data points, and then divide by the number of data points. In other words, we are taking the mean of the sum of the squared errors: 

$$
E = \frac{1}{n} \cdot \sum_{x=1}^{n} (y_i - \bar{y}_i)^2
$$

substituting in the equation of the regression line, we get:

$$
E = \frac{1}{n} \cdot \sum_{i=1}^{n} (y_i - (m \cdot x_i + b))^2
$$

We can now find the regression line of best fit by minimizing this function for error.

### Gradient Descent 

Gradient descent works by iteratively adjusting the model parameters in the direction of steepest descent of the error function. At each iteration, the algorithm calculates the gradient of the error function with respect to the model parameters. The algorithm then updates the model parameters by taking a step in the negative gradient direction.

Think of it like walking down a hill to find the lowest point. You take steps in the direction that leads you downhill, until you reach the bottom. In the same way, gradient descent takes steps in the direction of decreasing error, until it reaches the lowest possible value of the error function.

The size of the step is determined by the learning rate hyperparameter, which controls how far the algorithm moves in the negative gradient direction at each iteration. If the learning rate is too large, the algorithm may overshoot the minimum of the error function and fail to converge. If the learning rate is too small, the algorithm may take a long time to converge.

The learning rate is like the size of the steps you take. If you take steps that are too big, you might overshoot the minimum point and end up climbing up the hill again. If you take steps that are too small, it might take a long time to get to the bottom of the hill. So, the learning rate has to be chosen carefully to balance between speed and accuracy.

Taking the partial derivative of __*m*__ and __*b*__ with respect to the error function: 

$$ 
\frac{\partial E}{\partial m} = -\frac{2}{n} \sum_{i=1}^{n} x_i \cdot (y - (m \cdot x_i + b))
$$

$$ 
\frac{\partial E}{\partial b} = -\frac{2}{n} \sum_{i=1}^{n} (y - (m \cdot x_i + b))
$$

Scaling the gradient by learning rate __*L*__ tells us how much we need to change the parameters. Since the gradient gives the direction of steepest increase, the negative gradient gives the direction of steepest decrease, which is what we want to minimize the error function. Applying the changes at each interation: 

$$
m = m - L \cdot \frac{\partial E}{\partial m}
$$

$$
b = b - L \cdot \frac{\partial E}{\partial b}
$$

And thats it. We have successfully defined an algorithm for linear regression. Now all that's left is to implement it in code. 

## Implementing Linear Regression In Python









