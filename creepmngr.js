for(var name in Game.spawns)
    {
        if(Game.spawns[name].memory.worker == undefined)
        {
            Game.spawns.Spawn2.memory.worker = 0;
        };
        if(Game.spawns[name].memory.builder == undefined)
        {
            Game.spawns[name].memory.builder = 0;
        };
        if((Game.spawns[name].memory.worker < 4) && (Game.spawns[name].createCreep([WORK, WORK, MOVE, MOVE, CARRY],{role: 'worker'}))!=-4)
        {
           Game.spawns[name].memory.worker=Game.spawns[name].memory.worker+1;
           Game.spawns[name].createCreep([WORK, WORK, MOVE, MOVE, CARRY],'',{role: 'worker',spawned: [Game.spawns[name].name]});
           break;
        }
        if((Game.spawns[name].memory.builder < 3) && (Game.spawns[name].createCreep([WORK, WORK, MOVE, CARRY, CARRY],{role: 'builder'}))!=-4)
        {
           Game.spawns[name].memory.builder=Game.spawns[name].memory.builder+1;
           Game.spawns[name].createCreep([WORK, WORK, MOVE, CARRY, CARRY],'',{role: 'builder',spawned: [Game.spawns[name].name]});
            break;
        }
    }
