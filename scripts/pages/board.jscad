pitch = 2.54;
board_x = 20*pitch;
board_y = 9*pitch;
board_z = 1;
header_z = 8.5;
spacer_z = 2.54;
pin_z = 6;


rf24 = function(){
  return union(
    difference(
      cube().scale([board_x,board_y,board_z]).setColor([0.8,0,0]),
      cylinder({r:pitch/2,h:board_z}).translate([pitch,pitch,0]),
      cylinder({r:pitch/2,h:board_z}).translate([board_x-pitch,pitch,0]),
      cylinder({r:pitch/2,h:board_z}).translate([board_x-pitch,board_y-pitch,0]),
      cylinder({r:pitch/2,h:board_z}).translate([pitch,board_y-pitch,0])
    ),
    cube().scale([16*pitch,pitch,header_z]).translate([2*pitch,0,board_z]).setColor([0.2,0.2,0.2]),
    cube().scale([12*pitch,pitch,header_z]).translate([6*pitch,board_y-pitch,board_z]).setColor([0.2,0.2,0.2]),
    cube().scale([16*pitch,pitch,spacer_z]).translate([2*pitch,0,-spacer_z]).setColor([0.2,0.2,0.2]),
    cube().scale([12*pitch,pitch,spacer_z]).translate([6*pitch,board_y-pitch,-spacer_z]).setColor([0.2,0.2,0.2]),
    cube().scale([16*pitch,0.65,pin_z]).translate([2*pitch,0+0.945,-spacer_z-pin_z]).setColor([0.8,0.8,0.4]),
    cube().scale([12*pitch,0.65,pin_z]).translate([6*pitch,board_y-pitch+0.945,-spacer_z-pin_z]).setColor([0.8,0.8,0.4]),
    cube().scale([8.4,7.7,6]).translate([6*2.54-8.7 ,board_y-8,board_z]).setColor([1,1,1]),
    cube().scale([5.1,7.5,3]).translate([0,board_y/2-7.5/2,board_z]).setColor([0.8,0.8,0.8])

  );
}
