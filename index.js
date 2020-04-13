function depthFirstSearch(rootNode, vertices, edges){
    let s = []
    s.push(rootNode)
    let visited = [rootNode]
while(s.length != 0){

    let v = s.pop()

    if(!v.discovered){

        v.discovered = true

       let nodes = findAdjacent(v.name, vertices, edges)

       nodes.forEach(function(node){
           visited.push(node)
           s.push(node)
       })
    }

}
   return visited 
}



// function findAdjacent(nameString, vertices, edges) {
//     let edgeArray = []
//     let vertexArray = []

//     edges.forEach(function (edge) {

//         if (edge.includes(nameString)) {
//             edge.forEach(function (edgeName) {
//                 edgeArray.push(edgeName)
//             })
//         }
//     })
//     vertices.forEach(function (vertex) {

//         if (edgeArray.includes(vertex.name) && vertex.name != nameString && vertex.distance == null) {
//             vertexArray.push(vertex)
//         }
//     })
//     return vertexArray
// }

function findAdjacent(nodeName, vertices, edges) {
    return edges.filter(function (edge) {
        return edge.includes(nodeName)
    }).map(function (edge) {
        return edge.filter(function (node) {
            return (node != nodeName)
        })[0]
    }).map(function (name) {
        return findNode(name, vertices)
    }).filter(function (node) {
        return !node.discovered
    })
}

function findNode(nodeName, vertices) {
    return vertices.find(function (vertex) {
        return vertex.name == nodeName
    })
}