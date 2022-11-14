
const javascript = `

const promise = fetch('https://reqres.in/api/login', {

    method: 'POST',

    mode: 'cors',

    headers: { "Content-type": "application/json; charset=utf-8" },

    body: JSON.stringify({
        email: "eve.holt@reqres.in",
        password: "password"
    })
});

promise.then(response => {

    console.log(response);

    return response.json();
})
.then(json => {

    console.log(json);
});`
.trim();


// Ejemplo de codigo de: https://stackoverflow.com/questions/41103360/how-to-use-fetch-in-typescript
const typescript = `

// Implementation code where T is the returned data shape
function api<T>(url: string): Promise<T> {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json<T>()
    })

}

// Consumer
api<{ title: string; message: string }>('v1/posts/1')
.then(({ title, message }) => {
    console.log(title, message)
})
.catch(error => {
    console.log(error);
})
`.trim();


// Ejemplo de codigo de: https://www.javatpoint.com/java-lambda-expressions
const java = `

interface Drawable {  
    public void draw();  
} 

public class LambdaExpressionExample {  

    public static void main(String[] args) { 

        int width = 10;  
  
        //without lambda, Drawable implementation using anonymous class  
        Drawable d=new Drawable(){ 

            public void draw(){System.out.println("Drawing "+width);}  
        };  

        d.draw();  
    }  
}  

@FunctionalInterface  //It is optional  
interface Drawable {  
    public void draw();  
}  
  
public class LambdaExpressionExample2 { 

    public static void main(String[] args) { 

        int width = 10;  
          
        //with lambda  
        Drawable d2 = () -> { 

            System.out.println("Drawing "+ width);  
        };  

        d2.draw();  
    }  
}  
`.trim();


const c = `

// C++ program to demonstrate lambda expression in C++
#include <bits/stdc++.h>
using namespace std;

// Function to print vector
void printVector(vector<int> v)
{
	// lambda expression to print vector
	for_each(v.begin(), v.end(), [](int i)
	{
		std::cout << i << " ";
	});
	cout << endl;
}

int main()
{
	vector<int> v {4, 1, 3, 5, 2, 3, 1, 7};

	printVector(v);

	// below snippet find first number greater than 4
	// find_if searches for an element for which
	// function(third argument) returns true
	vector<int>:: iterator p = find_if(v.begin(), v.end(), [](int i)
	{
		return i > 4;
	});
	cout << "First number greater than 4 is : " << *p << endl;


	// function to sort vector, lambda expression is for sorting in
	// non-increasing order Compiler can make out return type as
	// bool, but shown here just for explanation
	sort(v.begin(), v.end(), [](const int& a, const int& b) -> bool
	{
		return a > b;
	});

	printVector(v);

	// function to count numbers greater than or equal to 5
	int count_5 = count_if(v.begin(), v.end(), [](int a)
	{
		return (a >= 5);
	});
	cout << "The number of elements greater than or equal to 5 is : "
		<< count_5 << endl;

	// function for removing duplicate element (after sorting all
	// duplicate comes together)
	p = unique(v.begin(), v.end(), [](int a, int b)
	{
		return a == b;
	});

	// resizing vector to make size equal to total different number
	v.resize(distance(v.begin(), p));
	printVector(v);

	// accumulate function accumulate the container on the basis of
	// function provided as third argument
	int arr[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
	int f = accumulate(arr, arr + 10, 1, [](int i, int j)
	{
		return i * j;
	});

	cout << "Factorial of 10 is : " << f << endl;

	//	 We can also access function by storing this into variable
	auto square = [](int i)
	{
		return i * i;
	};

	cout << "Square of 5 is : " << square(5) << endl;
}
`.trim();


const react = `

import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


function RenderMarkdown({text, style}){

    const [mode, setMode] = useState('markdown');

    const markdownContainerRef = useRef(null);

    const [html, setHtml] = useState('');

    useEffect(() => {
        
        setHtml(markdownContainerRef.current.innerHTML);

    }, [mode]);

    const changeModes = () => {
        const modes = ['markdown', 'html', 'raw'];

       let index = modes.indexOf(mode) + 1 === modes.length ? 0 : modes.indexOf(mode) + 1;

       setMode(modes[index]);
    }

    return (<div className="RenderMarkdown">

        <div className="position-relative">

            <div className="position-absolute top-0 end-0 px-4 d-flex justify-content-end">
            
                <label style={{fontSize: '28px'}}>

                    {mode === 'markdown' ? <i className="bi bi-markdown"></i> : ''}

                    {mode === 'html' ? <i className="bi bi-filetype-html"></i> : ''}

                    {mode === 'raw' ? <i className="bi bi-filetype-raw"></i> : ''}

                    <input type="button" className="d-none" value="" onClick={changeModes} />
                </label>
            
            </div>

            <div className="bg-light my-2 p-2 rounded" style={{display: 'flow-root', minHeight: '50px' , ...style}}>

                <div className={mode !== 'markdown' ? 'd-none' : ''} ref={markdownContainerRef}>

                    <ReactMarkdown children={text} remarkPlugins={[remarkGfm]}></ReactMarkdown>

                </div>

                { mode === 'raw' ? <pre>{text}</pre> : ''}

                { mode === 'html' ? <pre className="m-0 overflow-visible"><code>{html}</code></pre> : ''}
            </div>
        </div>
   
    </div>);
}

export default RenderMarkdown;
`.trim();

const html = `

<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    
    <body>
        
        <div class="css-loader">
            <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
        
    </body>
</html>
`.trim();

const css = `

.lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
}

.lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
}

.lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
}

.lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
}

.lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
}

@keyframes lds-ring {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
  
`.trim();


export { 
    javascript,
    typescript,
    java,
    c,
    react,
    html,
    css
}