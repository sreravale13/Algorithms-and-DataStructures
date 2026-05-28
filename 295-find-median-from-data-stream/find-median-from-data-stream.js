
var MedianFinder = function() {
    this. values=[];
};

/** 
 * @param {number} num
 * @return {void}
 */
var MedianFinder = function() {
    this.maxHeap = new Heap((a, b) => a > b);
    this.minHeap = new Heap((a, b) => a < b);
   
    
};



/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    // small nos are added to max heap
    this.maxHeap.push(num);
    // larger nos of list are added to min heap
    this.minHeap.push(this.maxHeap.pop());
    // trying to maintain equal heaps with at max 1 difference in odd nos usecase
    if (this.minHeap.size() > this.maxHeap.size()) {
        this.maxHeap.push(this.minHeap.pop());
    }

};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.maxHeap.size() > this.minHeap.size()) {
        // it gives mid/max of min valuesof list when sorted as ascending as res for odd
        return this.maxHeap.top();
    }
    // else mid value of min of maxheap+ max of min hep /2 
    return (this.maxHeap.top() + this.minHeap.top())/ 2;

    
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */