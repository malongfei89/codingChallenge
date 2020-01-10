# coding-challenge

## URL
http://ec2-3-134-94-92.us-east-2.compute.amazonaws.com/codingChallenge/

## Note for testing
I console.log the number of nodes for each type in front end, I checked it with back-end to make sure it's working.


### Structure
FrontEnd: a copy of all source files in root static folder
BackEnd: all source file in server folder
Database: Mongodb

### Algorithm 

In server/model/getIndices.js

dataNeeded: 
number of all documents -- Integer;
number of distinct types -- Array;
number of documents of each type -- I encapsulate this info into an object in a form like this: {type: 'typeA', total:     number of documents of type A} and put all objects like this of different type into a max-heap(Max-Heap class in server/model/Max-Heap.js);
I also have an array called answer which contains the order of distributed items;

During each iteration( will ends when answer.length equals to number of all documents)
    pull root from max-heap (whose total is the largest)
    if last item in answer has the same type as root
        pull another root(root2) from max-heap
        push root2.type into answer
        decrement root2.total by 1
        if root2.total === zero, just insert root back to max-heap
        else insert both root and root2 back to max-heap
    else
        push root.type into answer
        decrement root.total by 1
        if root.total > zero insert root back


### Other thought
I have another algorithm implemented and working

pros: it's not pre-determined, which means the server will not calculate distribution of a specific type until you press the button.
cons: not as evenly distributed as the above one.

Will deploy this under http://ec2-3-134-94-92.us-east-2.compute.amazonaws.com/codingChallenge2/

