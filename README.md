# A simple Todo List (Frontend only)

## Introduction
A simple, clear todo list implemented by HTML, Javascript, and CSS. 
![demo1.png](https://github.com/lanlanblue/todolist-frontend/blob/master/demo1.png)

## Useful CSS effects
- Trash icon shows up  
  In the beginning, we set width and opacity of trash icon to 0 for hiding it. Then, once we hover on any list item, we set them to appropriate values to let them show up.

```
span {
	background-color: #e74c3c;
	height: 40px;
	margin-right: 20px;
	text-align: center;
	color: white;
	width: 0;
	display: inline-block;
	transition: 0.2s linear;
	opacity: 0;

}

li:hover span {
	width: 40px;
	opacity: 1.0;
}
```
- Color change on input box  
  Use focus selector to change background-color and border size of input box.
```
input:focus { /*important! Click the input box, then the background will change*/
	background-color: #fff;
	border: 3px solid #2980b9;
	outline: none;
}
```
- Background colors of List item  
  Use nth-child() selector to change background color on even number of list item.
```
li:nth-child(2n) {
	background-color: #f7f7f7;
}
```
