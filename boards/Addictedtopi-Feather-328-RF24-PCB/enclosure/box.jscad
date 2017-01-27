var step_width = 4.2;

box = function(){
  return difference(

    union(
      //hollow box
      difference(
        cube().scale([board_x+2*tol+2*walls,board_y+2*tol+2*walls,spacer_z+board_z+header_z+tol]).translate([-tol-walls,-tol-walls,-tol-pin_gap-walls]),
        cube().scale([board_x+2*tol,board_y+2*tol,25]).translate([-tol,-tol,-tol-pin_gap])
      ),
      //steps for raising board
      cube().scale([step_width,step_width ,pin_gap+tol]).translate([-tol,-tol,-tol-pin_gap]),
      cube().scale([step_width,step_width,pin_gap+tol]).translate([board_x-step_width+tol,-tol,-tol-pin_gap]),
      cube().scale([step_width,step_width,pin_gap+tol]).translate([board_x-step_width+tol,board_y-step_width+tol,-tol-pin_gap]),
      cube().scale([step_width,step_width,pin_gap+tol]).translate([-tol,board_y-step_width+tol,-tol-pin_gap])
    ),

    //header gaps
    cube().scale([16*pitch+2*tol,pitch+2*tol,20]).translate([2*pitch-tol,-tol,-walls-tol-pin_gap]),
    cube().scale([12*pitch+2*tol,pitch+2*tol,20]).translate([6*pitch-tol,board_y-pitch-tol,-walls-tol-pin_gap]),

    //screw hole gaps
    cylinder({r:pitch/2,h:20}).translate([pitch,pitch,-5]),
    cylinder({r:pitch/2,h:20}).translate([board_x-pitch,pitch,-5]),
    cylinder({r:pitch/2,h:20}).translate([board_x-pitch,board_y-pitch,-5]),
    cylinder({r:pitch/2,h:20}).translate([pitch,board_y-pitch,-5]),
    // cube().scale([5,30,10]).translate([-5,0,-5]),
//---------------------------------------------------------------------------------------------------
// Board specific
//
    //holes for connectors
    cube().scale([8.4+2,20,6+1]).translate([6*2.54-8.7-1 ,board_y-8,board_z-1]),
    cube().scale([5.1,7.5+4,3+4]).translate([-tol-walls,board_y/2-7.5/2-2,board_z-2]),
    cube().scale([5.1,7.5+2,13]).translate([0-tol-0.3,board_y/2-7.5/2-1,board_z])
    //USB extends slightly

//---------------------------------------------------------------------------------------------------
  );
}
