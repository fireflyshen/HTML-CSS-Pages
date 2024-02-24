console.clear()
let text_node = document.querySelector('code').firstChild;
console.log(text_node);

let highlightA = new Highlight()
let rangeA = new Range()
rangeA.setStart(text_node, 0)
rangeA.setEnd(text_node, 15)
highlightA.add(rangeA)
CSS.highlights.set('rangeA', highlightA)

let highlightB = new Highlight()
let rangeB = new Range()
rangeB.setStart(text_node, 10)
rangeB.setEnd(text_node, text_node.nodeValue.length)
highlightB.add(rangeB)
CSS.highlights.set('rangeB', highlightB)


// // 获取节点code 元素的第一个节点
// let text = document.querySelector("code").firstChild;
// // 创建高亮
// let high1 = new Highlight();
// // 创建应该高亮的区域
// let range1 = new Range();
// // 指定对应区域
// range1.setStart(text,'0');
// range1.setEnd(text,15);

// high1.add(range1);
// // 注册高亮
// CSS.highlights.set('range1',high1)



