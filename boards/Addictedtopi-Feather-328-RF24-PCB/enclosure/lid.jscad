var step_width = 4
lid = function(){
  return difference(
      union(
        difference(
          cube().scale([board_x+2*tol+2*walls,board_y+2*tol+2*walls,-spacer_z+pin_gap+2*walls+tol]).translate([-tol-walls,-tol-walls,0]),
          cube().scale([board_x+2*tol,board_y+2*tol,-spacer_z+pin_gap+walls+tol]).translate([-tol,-tol,0])
        ),

        //for holding board down
        cube().scale([step_width/2,step_width ,header_z]).translate([0,0,-header_z+walls+pin_gap-spacer_z+tol]),
        cube().scale([step_width,step_width/2 ,header_z]).translate([0,0,-header_z+walls+pin_gap-spacer_z+tol]),
        cube().scale([step_width/2,step_width,header_z]).translate([board_x-step_width/2,0,-header_z+walls+pin_gap-spacer_z+tol]),
        cube().scale([step_width,step_width/2,header_z]).translate([board_x-step_width,0,-header_z+walls+pin_gap-spacer_z+tol]),
        cube().scale([step_width/2,step_width,header_z]).translate([board_x-step_width/2,board_y-step_width,-header_z+walls+pin_gap-spacer_z+tol]),
        cube().scale([step_width,step_width/2,header_z]).translate([board_x-step_width,board_y-step_width/2,-header_z+walls+pin_gap-spacer_z+tol]),
        cube().scale([step_width/2,step_width,header_z]).translate([0,board_y-step_width,-header_z+walls+pin_gap-spacer_z+tol]),
        cube().scale([step_width,step_width/2,header_z]).translate([0,board_y-step_width/2,-header_z+walls+pin_gap-spacer_z+tol])

      ),

      //screw hole gaps
      cylinder({r:pitch/2,h:20}).translate([pitch,pitch,-10]),
      cylinder({r:pitch/2,h:20}).translate([board_x-pitch,pitch,-10]),
      cylinder({r:pitch/2,h:20}).translate([board_x-pitch,board_y-pitch,-10]),
      cylinder({r:pitch/2,h:20}).translate([pitch,board_y-pitch,-10]),
// cube().scale([5,30,10]).translate([-5,0,-5]),
      //led hole gaps
      // cube().scale([2,2,4]).translate([board_x-pitch-2+1,board_y-5.5-2,0]),
      // cube().scale([2,2,4]).translate([board_x-pitch-2+1,5.5,0]),
      cube().scale([2,2,4]).translate([pitch-1,5.5,0]),
      cube().scale([2,2,4]).translate([pitch-1,board_y-5.5-2,0])

    ).translate([0,0,board_z+header_z+spacer_z-walls-pin_gap]);
}
//spacer_z+board_z+header_z+tol
///-pin_gap+0.55
///spacer_z+board_z+header_z+tol
