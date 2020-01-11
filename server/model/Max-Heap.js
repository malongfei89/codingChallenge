module.exports = class MinHeap{
    /*root is an object {
        type:,
        total
    }*/
    constructor(root = null){
        if(typeof root === 'Object') this.container = [root]
        else this.container = []
    }
    //called after inserting a new node into heap
    _reheap(index){
        let targetIndex
        if(index%2) targetIndex = (index-1)/2
        else targetIndex = (index-2)/2
        if(targetIndex >=0 ){
            if(this.container[index].total > this.container[targetIndex].total){
                let temp = this.container[index]
                this.container[index] = this.container[targetIndex]
                this.container[targetIndex] = temp
                this._reheap(targetIndex)
            }
        }
    }
    //called after removing root from heap
    _reheapTopDown(index, endIndex=this.container.length-1){
        if((index * 2)+2 <= endIndex){
            let left = (index * 2)+1
            let right = (index * 2)+2
            if(this.container[left].total < this.container[right].total) {
                if(this.container[index].total<this.container[right].total){
                    let temp = this.container[right]
                    this.container[right] = this.container[index]
                    this.container[index] = temp
                    this._reheapTopDown(right, endIndex)
                }
            } else{
                if(this.container[index].total<this.container[left].total){
                    let temp = this.container[left]
                    this.container[left] = this.container[index]
                    this.container[index] = temp
                    this._reheapTopDown(left, endIndex)
                }
            }
        }
        else if((index * 2) + 1 <= endIndex){
            let left = (index * 2) +1
            if(this.container[index].total < this.container[left].total){
                let temp = this.container[left]
                this.container[left] = this.container[index]
                this.container[index] = temp
            }
        }
    }
    insert(){
        if(arguments.length){
            if(this.container.length) {
                //this means go for left child first
                let left
                if(this.container.length%2) left = true
                else left = false
                for(let i = 0; i< arguments.length;i++){
                    if(left){
                        let parentIndex = (this.container.length-1)/2
                        let parent = this.container[parentIndex]
                        if( parent.total < arguments[i].total){
                            this.container[parentIndex] = arguments[i]
                            this.container[this.container.length] = parent
                            //reheap
                            this._reheap(parentIndex)
                        } else this.container[this.container.length] = arguments[i]
                        left = !left
                    } else {
                        let parentIndex = (this.container.length-2)/2
                        let parent = this.container[parentIndex]
                        if( parent.total < arguments[i].total){
                            this.container[parentIndex] = arguments[i]
                            this.container[this.container.length] = parent
                            //reheap
                            this._reheap(parentIndex)
                        } else this.container[this.container.length] = arguments[i]
                        left = !left
                    }
                } 
            } else {
                this.container[0] = arguments[0]
                if(arguments.length>1){   
                    let left = true
                    for(let i = 1; i< arguments.length;i++){
                        if(left){
                            let parentIndex = (this.container.length-1)/2
                            let parent = this.container[parentIndex]
                            if( parent.total < arguments[i].total){
                                this.container[parentIndex] = arguments[i]
                                this.container[this.container.length] = parent
                                //reheap
                                this._reheap(parentIndex)
                            } else this.container[this.container.length] = arguments[i]
                            left = !left
                        } else {
                            let parentIndex = (this.container.length-2)/2
                            let parent = this.container[parentIndex]
                            if( parent.total < arguments[i].total){
                                this.container[parentIndex] = arguments[i]
                                this.container[this.container.length] = parent
                                //reheap
                                this._reheap(parentIndex)
                            } else this.container[this.container.length] = arguments[i]
                            left = !left
                        }
                    }
                }
            }
        }
    }
    //get value of root without removing it from heap 
    peek(){
        if(this.container.length) return this.container[0]
    }
    delete(){
        if(this.container.length){
            let answer = this.container[0]
            if(this.container.length > 1) {
                this.container[0] = this.container[this.container.length-1]
                this.container.pop()
                this._reheapTopDown(0)
            } else this.container.pop()
            return answer
        }
    }
    
    // sort(){
    //     let reapTimes, endIndex
    //     endIndex = reapTimes= this.container.length-1
    //     for(let i = 0; i<reapTimes;i++) {
    //         let temp = this.container[0]
    //         this.container[0] = this.container[endIndex]
    //         this.container[endIndex] = temp
    //         this._reheapTopDown(0, --endIndex)
    //     }
    // }
}