# coding-challenge

## URL
http://ec2-3-134-94-92.us-east-2.compute.amazonaws.com/codingChallenge/

## Note for testing
If you wanna test it locally:

Clone the git repository;

Install all dependencies;

Set up Mongodb, put MONGODB_URL(connection string), MONGODB_DB(name of database) in a .env file in root folder, then import data into the database. Collection name should be 'coding';

Run npm start for front-end dev server and npm run server to start node server (running on 3004);


### Structure
FrontEnd: a copy of all source files in root static folder

BackEnd: all source file in server folder

Database: Mongodb

### Algorithm 

Seperate elements into different group based on types(here we only care No. of elements);

Each time take one element from largest group and put into an array which will contain the distribution of all elements. 

Also make sure the type of the element that's about to be added must be different from the type of the last element in the array. 

This way we can distribute data as evenly as possible.

Algorithm is implemented inn server/model/getIndices.js


dataNeeded: 

number of all documents -- Integer;

number of distinct types -- Array;

number of documents of each type -- 

I encapsulate this info into an object in a form like this: 
{ type: 'typeA', 
  total:number of documents of type A} 
  
  and put all objects like this of different type into a max-heap(Max-Heap class in server/model/Max-Heap.js);
  
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

Algothrim:

Calculate the step for each type, which divide number of total elements by number of elements of a specific type.

This determines that once we put one element of that type in a spot, next one must be away from it by the step we get above.

This will cause collision which different type of elements happen to be in the same spot.

So we need to take care of that by moving it to the next available location in the array

and if its index goes out of bound before finding available spot, put it in the first available spot in the entire array;

It's implemented in App.vue, method addColor.

pros: it's not pre-determined, which means the server need not calculate distribution of a specific type until you press the button.

cons: not as evenly distributed as the above one.

It has been deploy under http://ec2-3-134-94-92.us-east-2.compute.amazonaws.com/codingChallenge2/

code repo: 

