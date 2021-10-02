document.addEventListener("DOMContentLoaded", function(event) {
      start();
    });

    function start(){
      var current = 0;
      var audio = document.getElementById('audio');
      var playlist = document.getElementById('playlist');
      var tracks = playlist.querySelectorAll("li a","li img");
      var len = tracks.length;
    /*  audio.volume = .100;*/
      audio.play();
      for (var i = 0; i < tracks.length; i++) {
          tracks[i].addEventListener('click', function(event) {
              event.preventDefault();
              var link = event.target;
              current = indexInParent(link.parentNode) - 1;
              run(link, audio);
          });
      }

      audio.addEventListener('ended' ,function(event) {
          current++;
          if( current == len) {
              current = 0;
              link = playlist.querySelectorAll('a')[0];
          } else {
              link = playlist.querySelectorAll('a')[current];
          }
          run(link, audio);
      });
    }

    function indexInParent(node) {
        var children = node.parentNode.childNodes;
        var num = 0;
        for (var i=0; i<children.length; i++) {
             if (children[i]==node) return num;
             if (children[i].nodeType==1) num++;
        }
        return -1;
    }

    function run(link, player){
          player.src = link.getAttribute('href');
          
          var liParent = link.parentNode;
          liParent.className += 'active';
          removeSiblingsActive(liParent);
          player.load();
          player.play();
    }

    function removeSiblingsActive(current) {
      var liSiblings = playlist.querySelectorAll("li");
      for (var i = 0; i < liSiblings.length; i++) {
        if (liSiblings[i] !== current) {
          liSiblings[i].classList.remove("active");
        }
      }
    }
    
