/**
 * 简单链表
 * 插入、查找、删除操作
 */
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = new Node('head');
    }
    /**
     * 查找指定值的节点
     * @param {*} item 
     */
    findByValue(item) {
        let currentNode = this.head.next;
        while(currentNode !== null && currentNode.element !== item) {
            currentNode = currentNode.next;
        }
        return currentNode === null ? -1 : currentNode;
    }
    /**
     * 根据下标查找节点，下标从0开始
     * @param {*} index 
     */
    findByIndex(index) {
        let currentNode = this.head.next;
        let pos = 0;
        while(currentNode !== null && pos !== index) {
            currentNode = currentNode.next;
            pos++;
        }
        return currentNode === null ? -1 : currentNode;
    }
    /**
     * 查找前一个
     * @param {*} item 
     */
    findPrev(item) {
        let currentNode = this.head; // 允许找到头节点
        while (currentNode.next !== null && currentNode.next.element !== item) {
            currentNode = currentNode.next;
        }
        // 要判断下next是否为null，因为不存找到尾节点
        if (currentNode.next === null) {
            return -1;
        }
        return currentNode;
    }
    /**
     * 末尾插入
     * @param {*} newElement 
     */
    append(newElement) {
        let newNode = new Node(newElement);
        let currentNode = this.head;
        while(currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
    }
    /**
     * 指定元素后插入
     * @param {*} newElement 
     * @param {*} element 
     */
    insert(newElement, element) {
        const currentNode = this.findByValue(element);
        if (currentNode === -1) {
            console.log('未找到指定元素');
            return;
        }
        const newNode = new Node(newElement);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
    }
    /**
     * 删除指定的节点
     * @param {*} item 
     */
    remove(item) {
        const prevNode = this.findPrev(item);
        if (prevNode === -1) {
            console.log('没有找到要删除的节点');
            return;
        }
        if (prevNode.next.next === null) {
            prevNode.next = null;
            return;
        }
        prevNode.next = prevNode.next.next;
    }
}

// 测试用例
const Llist = new LinkedList();
Llist.append('anjor');
Llist.append('ffy');
Llist.append('hpday');
Llist.append('renren');
// Llist.insert('new', 'ffy');
console.dir(Llist);
// console.dir(Llist.findByValue('1'));
// console.log(Llist.findByIndex(2));
// Llist.remove('anjor');

/**
 * 反转链表
 */
 var reverseList = function(head) {
     var linkList = [];
     var currentNode = head;
     while (currentNode.next !== null) {
        linkList.push(currentNode);
        currentNode = currentNode.next;
     }
     head.next = null;
     linkList.push(currentNode);
     let i = linkList.length - 1;
     while(i > 0) {
         currentNode = linkList[i];
         let nextNode = linkList[i-1];
         currentNode.next = nextNode;
         i--;
    }
    return linkList[linkList.length - 1];
 }


 var reverseList2 = function(head) {
     var prev = null; // 前一个节点
     var current = head;
     while(current !== null) {
        var next = current.next;
        // 当前节点的下一个节点指向上一个节点
        current.next = prev;
        // 操作节点各自前进一位
        prev = current;
        current = next;
     }
     return prev;
 }
 var head = Llist.head;
 console.dir(head);
 var head2 = reverseList2(head);
 console.dir(head2);
