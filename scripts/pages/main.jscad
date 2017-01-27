include("board.jscad");
include("box.jscad");
include("lid.jscad");
walls = 2;
tol = 0.2;
pin_gap = 2;


function main(){
  return union(
//    rf24(),
    lid().translate([0,0,10]),
    box()
  );
}
