
var graph, vid, eid;
var vertices = 100
var removals = 10;
var additions = 10;

function setup(){
  graph = document.querySelector('#graph').graph;

  var interval = setInterval(() => {
    vid = graph.add_vertex({cube: {size: 10, color: '#FEA16F'}})
    if(vid > vertices){
      clearInterval(interval);
    }
  }, 100)
}

function round(){
  var removed = 0;
  while(vid > 50 && removed < removals){
    var proposed = Math.round(Math.random() * eid)
    if(graph.E.get(proposed)){
      graph.remove_edge(proposed);
      removed++;
    }
  }

  var added = 0;
  while(added < additions){
    var source;
    while(source === undefined){
      var proposed = graph.V.get(Math.round(Math.random() * vid));
      source = proposed ? proposed.id : undefined
    }

    var target;
    while(target === undefined){
      var proposed = graph.V.get(Math.round(Math.random() * vid));
      target = proposed ? proposed.id : undefined;
    }
    eid = graph.add_edge(source, target, {color: 0});
    added++;
  }

}

$(document).ready(function(){
  
  setup()
  setInterval(round, 100);

})