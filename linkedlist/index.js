// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data , next = null){
        this.data = data ;
        this.next = next ;
    }
}

class LinkedList {
    constructor(){
        this.head = null ;
    }

    insertFirst(data){
        if(this.head == null){
            let newNode = new Node(data) ;
            this.head = newNode ;
        }
        else{
            let newNode = new Node(data) ;
            newNode.next = this.head ;
            this.head = newNode ;
        }

    }

    size(){
        let temp = this.head ;
        let count = 0 ;
        while(temp != null){
            count++ ;
            temp = temp.next ;
        }

        return count ;
    }


    getFirst(){
        return this.head ;
    }

    getLast(){
        let temp = this.head ;
        while(temp.next != null){
            temp = temp.next ;
        }

        return temp ;
    }

    clear(){
        this.head = null ;
    }

    removeFirst(){
        this.head = this.head.next ;
    }


    removeLast(){
        let temp = this.head ;
         if(temp == null){
        
         } 
        else if(temp.next == null){
            this.head = null ;
        }
        else {
            while(temp.next.next != null){
                temp = temp.next ;
            }

            temp.next = null ;
        }
    }



    insertLast(data){
        let temp = this.head ;

        if(temp == null){
            let newNode = new Node(data) ;
            this.head = newNode ;
        }
        else{
            while(temp.next != null){
                temp = temp.next ;
            }
    
            let newNode = new Node(data) ;
            temp.next = newNode ;
        }
       
    }


    getAt(position){
        let temp = this.head ;
        let count = 0 ;
        while(count != position && temp !=null){
            temp = temp.next ;
            count++ ;
        }

        return temp ;
    }
}



module.exports = { Node, LinkedList };
